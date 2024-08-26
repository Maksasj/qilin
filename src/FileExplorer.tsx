import React from 'react';
import { Badge } from './components/ui/badge';
import './FileExplorer.css';

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
    let filesAndFolders: any[] = [];

    for (let i = 0; i < 20; i++) {
        filesAndFolders[i] = { name: 'README.md', type: 'file' };
    }

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
