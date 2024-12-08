import React, { useState, useEffect } from 'react';
import type { ContextMenuPosition } from '../types';

export const ContextMenu: React.FC = () => {
  const [position, setPosition] = useState<ContextMenuPosition | null>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    setPosition(null);
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="p-8 bg-white rounded-lg shadow" data-test="context-menu-area">
      <div
        className="h-48 bg-gray-100 rounded flex items-center justify-center"
        onContextMenu={handleContextMenu}
        data-test="context-menu-trigger"
      >
        Right-click here to open context menu
      </div>

      {position && (
        <div
          className="fixed bg-white shadow-lg rounded py-2 min-w-[160px]"
          style={{ left: position.x, top: position.y }}
          data-test="context-menu"
        >
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            data-test="context-menu-edit"
          >
            Edit
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            data-test="context-menu-delete"
          >
            Delete
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-100"
            data-test="context-menu-properties"
          >
            Properties
          </button>
        </div>
      )}
    </div>
  );
};