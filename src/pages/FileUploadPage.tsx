import React from 'react';
import { FileUploader } from '../components/FileUploader';

export const FileUploadPage: React.FC = () => {
  return (
    <div className="px-4 py-6 sm:px-0">
      <h1 className="text-2xl font-bold mb-6">File Upload</h1>
      <p className="mb-6">
        Practice file upload interactions using both drag-and-drop and traditional
        file input methods.
      </p>
      <FileUploader />
    </div>
  );
};