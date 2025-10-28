import React from 'react';

// Tell TypeScript what 'children' is.
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      {children}
    </div>
  );
}

export default Card;