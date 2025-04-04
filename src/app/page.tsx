'use client';

import { useState } from 'react';
import { checklists } from '@/data/checklists';
import ChecklistSection from '@/components/ChecklistSection';
import { ChevronDown, ChevronUp, Save, Download } from 'lucide-react';

export default function Home() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabClick = (tabId: string) => {
    if (selectedTab === tabId) {
      setSelectedTab(null);
    } else {
      setSelectedTab(tabId);
    }
  };

  const handleSaveProgress = () => {
    try {
      const data = localStorage.getItem('checklistProgress');
      const blob = new Blob([data || '{}'], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'checklist-progreso.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al guardar el progreso:', error);
    }
  };

  const handleLoadProgress = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const content = event.target?.result as string;
            localStorage.setItem('checklistProgress', content);
            window.location.reload();
          } catch (error) {
            console.error('Error al cargar el archivo:', error);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  return (
    <main className="min-h-screen py-8 px-4">
      <div className="checklist-container">
        <div className="checklist-header">
          <h1 className="text-3xl font-bold mb-2">Checklist de Manuales de Marca</h1>
          <p className="text-gray-600">Seguimiento de tareas para el desarrollo de manuales de marca</p>
          
          <div className="mt-4 flex gap-2">
            <button 
              onClick={handleSaveProgress}
              className="btn btn-sm btn-primary gap-2"
            >
              <Save size={16} />
              Exportar progreso
            </button>
            <button 
              onClick={handleLoadProgress}
              className="btn btn-sm btn-outline btn-primary gap-2"
            >
              <Download size={16} />
              Importar progreso
            </button>
          </div>
        </div>

        <div className="mt-4">
          {checklists.map((checklist) => (
            <div key={checklist.id} className="mb-4">
              <div 
                className="bg-gray-100 p-4 rounded-lg cursor-pointer flex justify-between items-center"
                onClick={() => handleTabClick(checklist.id)}
              >
                <h2 className="text-xl font-semibold">{checklist.title}</h2>
                {selectedTab === checklist.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                )}
              </div>
              
              {selectedTab === checklist.id && (
                <ChecklistSection checklist={checklist} />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 