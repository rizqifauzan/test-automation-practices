import React, { useEffect, useRef } from 'react';

export const ShadowDOMPage: React.FC = () => {
  const hostRef = useRef<HTMLDivElement>(null);
  const shadowRootRef = useRef<ShadowRoot | null>(null);

  useEffect(() => {
    if (hostRef.current && !shadowRootRef.current) {
      // Only create shadow root if it doesn't exist
      shadowRootRef.current = hostRef.current.attachShadow({ mode: 'open' });

      const style = document.createElement('style');
      style.textContent = `
        .shadow-content {
          padding: 20px;
          background: #f0f0f0;
          border-radius: 8px;
        }
        .shadow-button {
          background: #4CAF50;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .shadow-button:hover {
          background: #45a049;
        }
        
        @media (prefers-color-scheme: dark) {
          .shadow-content {
            background: #333;
            color: #fff;
          }
        }
      `;

      const content = document.createElement('div');
      content.setAttribute('class', 'shadow-content');
      content.setAttribute('data-test', 'shadow-content');
      content.innerHTML = `
        <h2>This is inside Shadow DOM</h2>
        <p>This content is encapsulated within a Shadow DOM.</p>
        <button class="shadow-button" data-test="shadow-button">
          Click me!
        </button>
      `;

      shadowRootRef.current.appendChild(style);
      shadowRootRef.current.appendChild(content);

      const button = content.querySelector('button');
      if (button) {
        button.addEventListener('click', () => {
          alert('Button in Shadow DOM clicked!');
        });
      }
    }

    // Cleanup function
    return () => {
      if (hostRef.current && shadowRootRef.current) {
        // Clear the shadow root content
        while (shadowRootRef.current.firstChild) {
          shadowRootRef.current.removeChild(shadowRootRef.current.firstChild);
        }
      }
    };
  }, []);

  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Shadow DOM Example</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        This page demonstrates working with Shadow DOM elements, which provide
        encapsulation for markup structure, style, and behavior.
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <div ref={hostRef} data-test="shadow-host">
          {/* Shadow DOM content will be attached here */}
        </div>

        <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded">
          <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Regular DOM Content</h3>
          <p className="text-gray-700 dark:text-gray-300">This content is in the regular DOM, outside the Shadow DOM.</p>
        </div>
      </div>
    </div>
  );
};