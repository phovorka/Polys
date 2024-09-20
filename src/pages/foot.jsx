import React from 'react';

const TestComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="border border-red-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        <div className="bg-blue-500 text-white p-4">Button 1</div>
        <div className="bg-blue-500 text-white p-4">Button 2</div>
        <div className="bg-blue-500 text-white p-4">Button 3</div>
        <div className="bg-blue-500 text-white p-4">Button 4</div>
      </div>
    </div>
  );
};

export default TestComponent;