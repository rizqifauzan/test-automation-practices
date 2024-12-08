import React, { useState, useEffect } from 'react';

export const KeyPressPage: React.FC = () => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  const [lastKey, setLastKey] = useState<string>('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key;
      setLastKey(key);
      setPressedKeys((prev) => [key, ...prev].slice(0, 5));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold mb-6">Key Presses</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="mb-6">
          <p className="text-lg mb-2">Press any key to see it captured below:</p>
          <div
            className="text-4xl font-mono bg-gray-100 p-8 rounded text-center"
            data-test="last-key-pressed"
          >
            {lastKey || 'No key pressed'}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-medium mb-4">Last 5 Keys Pressed:</h3>
          <div className="space-y-2" data-test="key-history">
            {pressedKeys.map((key, index) => (
              <div
                key={index}
                className="bg-gray-50 p-2 rounded"
                data-test={`key-${index}`}
              >
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};