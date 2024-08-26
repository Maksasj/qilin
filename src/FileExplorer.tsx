import React from 'react';
import './FileExplorer.css';

// Sample data for files and folders
const filesAndFolders = [
  { name: '.git', type: 'folder' },
  { name: 'node_modules', type: 'folder' },
  { name: 'public', type: 'folder' },
  { name: 'src', type: 'folder' },
  { name: '.gitignore', type: 'file' },
  { name: 'README.md', type: 'file' },
  { name: 'index.html', type: 'file' },
  { name: 'vite.config.ts', type: 'file' },
  // Add more items as needed
];
 
const FileExplorer = () => {
  return (
    <div className="file-explorer">
      {filesAndFolders.map((item, index) => (
        <div key={index} className={`tile ${item.type}`}>
          {item.type === 'folder' ? (
            <div className="icon folder-icon">📁</div>
          ) : (
            <div className="icon file-icon">📄</div>
          )}
          <div className="file-name">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;
