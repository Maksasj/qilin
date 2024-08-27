import React from 'react';
import EntityTile from './entity-tile';
import './file-explorer.css';

function makeid(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const FileExplorer = () => {
    let filesAndFolders: any[] = [];

    for (let i = 0; i < 20; i++) {
        filesAndFolders[i] = { name: makeid(100), type: 'file' };
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
