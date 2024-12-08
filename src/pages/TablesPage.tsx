import React from 'react';
import { DynamicTable } from '../components/DynamicTable';

const mockData = [
  { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active', role: 'Admin' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive', role: 'User' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', status: 'Active', role: 'Editor' },
];

export const TablesPage: React.FC = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold mb-6">Dynamic Tables</h1>
      <p className="mb-6">
        Practice working with sortable tables, data grids, and dynamic content.
        Click on column headers to sort the data.
      </p>
      <DynamicTable data={mockData} />
    </div>
  );
};