import { useState } from 'react';
import { Checklist } from '@/data/checklists';
import ChecklistItem from './ChecklistItem';

interface ChecklistSectionProps {
  checklist: Checklist;
}

export default function ChecklistSection({ checklist }: ChecklistSectionProps) {
  const [items, setItems] = useState(checklist.items);

  const handleToggle = (id: string, completed: boolean) => {
    const updateItems = (items: any[]) => {
      return items.map(item => {
        if (item.id === id) {
          return { ...item, isCompleted: completed };
        } else if (item.items && item.items.length > 0) {
          return { ...item, items: updateItems(item.items) };
        }
        return item;
      });
    };

    setItems(updateItems(items));
  };

  const completedCount = items.reduce((count, item) => {
    const countCompletedItems = (items: any[]): number => {
      return items.reduce((sum, item) => {
        let itemCount = item.isCompleted ? 1 : 0;
        if (item.items && item.items.length > 0) {
          itemCount += countCompletedItems(item.items);
        }
        return sum + itemCount;
      }, 0);
    };
    
    let itemCount = item.isCompleted ? 1 : 0;
    if (item.items && item.items.length > 0) {
      itemCount += countCompletedItems(item.items);
    }
    return count + itemCount;
  }, 0);

  const totalItems = (() => {
    const countTotalItems = (items: any[]): number => {
      return items.reduce((sum, item) => {
        let itemCount = 1;
        if (item.items && item.items.length > 0) {
          itemCount += countTotalItems(item.items);
        }
        return sum + itemCount;
      }, 0);
    };
    
    return countTotalItems(items);
  })();

  const progress = totalItems > 0 ? (completedCount / totalItems) * 100 : 0;

  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-2">{checklist.title}</h2>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="bg-primary h-2.5 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="text-sm text-gray-600 mb-6">
        Progreso: {completedCount} de {totalItems} tareas completadas ({Math.round(progress)}%)
      </div>
      
      <div className="space-y-1">
        {items.map((item) => (
          <ChecklistItem 
            key={item.id} 
            item={item} 
            onToggle={handleToggle} 
          />
        ))}
      </div>
    </div>
  );
} 