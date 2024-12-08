import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

const menuItems = [
  {
    category: 'Basic',
    items: [
      { path: '/about', label: 'About' },
      { path: '/forms', label: 'Forms' },
      { path: '/tables', label: 'Tables' },
    ]
  },
  {
    category: 'Interaction',
    items: [
      { path: '/drag-drop', label: 'Drag & Drop' },
      { path: '/dynamic-elements', label: 'Dynamic Elements' },
      { path: '/hover', label: 'Hover States' },
      { path: '/key-press', label: 'Key Press' },
      { path: '/slider', label: 'Slider' },
    ]
  },
  {
    category: 'Content',
    items: [
      { path: '/file-upload', label: 'File Upload' },
      { path: '/file-download', label: 'File Download' },
      { path: '/iframes', label: 'Iframes' },
      { path: '/broken-images', label: 'Broken Images' },
      { path: '/shadow-dom', label: 'Shadow DOM' },
    ]
  },
  {
    category: 'Advanced',
    items: [
      { path: '/context-menu', label: 'Context Menu' },
      { path: '/notifications', label: 'Notifications' },
      { path: '/ab-testing', label: 'A/B Testing' },
      { path: '/auth', label: 'Authentication' },
      { path: '/checkboxes', label: 'Checkboxes' },
      { path: '/exit-intent', label: 'Exit Intent' },
      { path: '/alerts', label: 'Alerts' },
    ]
  }
];

export const SideNav: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg h-screen fixed left-0 top-0 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
          data-test="home-link"
        >
          <Home className="w-5 h-5" />
          <span className="font-semibold">Home</span>
        </Link>
      </div>
      
      <nav className="p-4">
        {menuItems.map((category) => (
          <div key={category.category} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              {category.category}
            </h3>
            <ul className="space-y-1">
              {category.items.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-3 py-2 text-sm rounded-md ${
                      location.pathname === item.path
                        ? 'bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                    data-test={`nav-${item.path.slice(1)}`}
                  >
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};