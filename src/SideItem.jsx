import React from 'react';

export default function SideItem({ light, children }) {
  return (
    <div className={`side_item ${light ? '' : 'side_item--dark'}`}>
      {children}
    </div>
  );
}
