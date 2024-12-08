import React from 'react';
import { IframeExample } from '../components/IframeExample';

export const IframePage: React.FC = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold mb-6">Iframe Examples</h1>
      <p className="mb-6">
        Practice working with iframes, including nested elements and cross-frame
        communication.
      </p>
      <IframeExample />
    </div>
  );
};