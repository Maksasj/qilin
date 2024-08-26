import React from 'react';
import { Badge } from './components/ui/badge';
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

const EntityTile = ({ index, name }: { index: number, name: string }) => {
    return (
        <div key={index} className={`tile`}>
            <div className="icon">📄</div>
            <div className="file-name">{name}</div>
            <Badge>📂 File</Badge>
        </div>
    )
}
 
const FileExplorer = () => {
  return (
    <div className="file-explorer">
      {filesAndFolders.map((item, index) => (
        <EntityTile 
            index = {index} 
            name = {item.name}
            />
      ))}
    </div>
  );
};

export default FileExplorer;
