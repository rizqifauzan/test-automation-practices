import React, { useState } from 'react';

export const SliderPage: React.FC = () => {
  const [value, setValue] = useState(50);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold mb-6">Horizontal Slider</h1>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="space-y-4">
          <div className="relative" data-test="slider-container">
            <input
              type="range"
              min="0"
              max="100"
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value))}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="w-full"
              data-test="slider"
            />
            {showTooltip && (
              <div
                className="absolute -top-8 px-2 py-1 bg-gray-800 text-white rounded text-sm transform -translate-x-1/2"
                style={{ left: `${value}%` }}
                data-test="slider-tooltip"
              >
                {value}
              </div>
            )}
          </div>
          <div className="text-center" data-test="slider-value">
            Current value: {value}
          </div>
        </div>
      </div>
    </div>
  );
};