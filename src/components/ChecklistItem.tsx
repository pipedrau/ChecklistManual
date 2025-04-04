import { useState } from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { ChecklistItem as ChecklistItemType } from '@/data/checklists';

interface ChecklistItemProps {
  item: ChecklistItemType;
  onToggle: (id: string, completed: boolean) => void;
}

export default function ChecklistItem({ item, onToggle }: ChecklistItemProps) {
  const [isOpen, setIsOpen] = useState(true);
  const hasNestedItems = item.items && item.items.length > 0;

  const handleToggle = () => {
    onToggle(item.id, !item.isCompleted);
  };

  return (
    <div className="checklist-item rounded-md p-2 mb-2">
      <div className="flex items-start">
        <button
          onClick={handleToggle}
          className="flex-shrink-0 mt-1 text-primary hover:text-primary-dark transition-colors"
        >
          {item.isCompleted ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <Circle className="h-5 w-5" />
          )}
        </button>
        <div className="ml-2 flex-grow">
          <div className="flex justify-between items-center">
            <span
              className={`font-medium ${item.isCompleted ? 'completed' : ''}`}
            >
              {item.title}
            </span>
            {hasNestedItems && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-500 hover:text-gray-700"
              >
                {isOpen ? '▼' : '►'}
              </button>
            )}
          </div>
          {hasNestedItems && isOpen && (
            <div className="nested-items mt-2">
              {item.items?.map((nestedItem) => (
                <ChecklistItem
                  key={nestedItem.id}
                  item={nestedItem}
                  onToggle={onToggle}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 