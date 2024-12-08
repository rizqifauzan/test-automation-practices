import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import { simulateNetworkDelay } from '../utils/delay';
import type { FileUploadResponse } from '../types';

export const FileUploader: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<FileUploadResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = [...e.dataTransfer.files];
    await handleFiles(files);
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? [...e.target.files] : [];
    await handleFiles(files);
  };

  const handleFiles = async (files: File[]) => {
    setLoading(true);
    await simulateNetworkDelay(2000, 4000);

    const newFiles: FileUploadResponse[] = files.map(file => ({
      success: true,
      filename: file.name,
      size: file.size
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    setLoading(false);
  };

  return (
    <div className="space-y-4" data-test="file-uploader">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        data-test="drop-zone"
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop files here, or{' '}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="text-blue-500 hover:text-blue-600"
            data-test="file-select-button"
          >
            browse
          </button>
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          className="hidden"
          onChange={handleFileInput}
          data-test="file-input"
        />
      </div>

      {loading && (
        <div className="text-center" data-test="upload-loading">
          <p>Uploading...</p>
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="mt-4" data-test="uploaded-files">
          <h3 className="text-lg font-medium mb-2">Uploaded Files</h3>
          <ul className="space-y-2">
            {uploadedFiles.map((file, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
                data-test={`uploaded-file-${index}`}
              >
                <span>{file.filename}</span>
                <span className="text-sm text-gray-500">
                  {(file.size / 1024).toFixed(2)} KB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};