import React from 'react';
import { ContextMenu } from '../components/ContextMenu';

export const ContextMenuPage: React.FC = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold mb-6">Context Menu</h1>
      <p className="mb-6">
        Practice working with right-click context menus and custom menu positioning.
      </p>
      <ContextMenu />
    </div>
  );
};