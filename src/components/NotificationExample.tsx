import React, { useState } from 'react';
import type { NotificationMessage } from '../types';
import { X } from 'lucide-react';

export const NotificationExample: React.FC = () => {
  const [notifications, setNotifications] = useState<NotificationMessage[]>([]);

  const addNotification = (type: NotificationMessage['type']) => {
    const newNotification: NotificationMessage = {
      id: Date.now().toString(),
      type,
      message: `This is a ${type} notification message.`
    };

    setNotifications(prev => [...prev, newNotification]);

    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, 5000);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-4" data-test="notification-example">
      <div className="space-x-4">
        <button
          onClick={() => addNotification('success')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          data-test="add-success"
        >
          Success Message
        </button>
        <button
          onClick={() => addNotification('error')}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          data-test="add-error"
        >
          Error Message
        </button>
        <button
          onClick={() => addNotification('info')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          data-test="add-info"
        >
          Info Message
        </button>
      </div>

      <div
        className="fixed top-4 right-4 space-y-2 w-80"
        data-test="notification-container"
      >
        {notifications.map(({ id, type, message }) => (
          <div
            key={id}
            className={`p-4 rounded shadow-lg flex justify-between items-start ${
              type === 'success' ? 'bg-green-100 text-green-800' :
              type === 'error' ? 'bg-red-100 text-red-800' :
              'bg-blue-100 text-blue-800'
            }`}
            data-test={`notification-${id}`}
          >
            <p>{message}</p>
            <button
              onClick={() => removeNotification(id)}
              className="ml-4 text-gray-500 hover:text-gray-700"
              data-test={`close-notification-${id}`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};