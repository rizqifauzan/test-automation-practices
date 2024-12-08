import React, { useState } from 'react';
import type { TableData } from '../types';

interface DynamicTableProps {
  data: TableData[];
}

export const DynamicTable: React.FC<DynamicTableProps> = ({ data }) => {
  const [sortField, setSortField] = useState<keyof TableData>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof TableData) => {
    if (field === sortField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortDirection === 'asc') {
      return a[sortField] > b[sortField] ? 1 : -1;
    }
    return a[sortField] < b[sortField] ? 1 : -1;
  });

  return (
    <div className="overflow-x-auto" data-test="dynamic-table">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th
                key={key}
                onClick={() => handleSort(key as keyof TableData)}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                data-test={`table-header-${key}`}
              >
                {key}
                {sortField === key && (
                  <span className="ml-2">
                    {sortDirection === 'asc' ? '↑' : '↓'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData.map((row) => (
            <tr key={row.id} data-test={`table-row-${row.id}`}>
              {Object.entries(row).map(([key, value]) => (
                <td
                  key={key}
                  className="px-6 py-4 whitespace-nowrap"
                  data-test={`table-cell-${key}-${row.id}`}
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};