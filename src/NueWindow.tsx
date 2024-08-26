import React from 'react';
import './NueWindow.css';
 
export function NueWindow({children}: any) {
  return (
    <div className="nue-window">
     {children}
    </div>
  );
};
