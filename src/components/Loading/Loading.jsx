import React from 'react';

const Loading = () => {
    return (
        <div className="w-full min-h-[calc(100vh-180px)] flex items-center justify-center">
            <div className='flex items-center text-3xl'>
            L <div className="w-8 h-8 animate-spin	 rounded-full border-dashed border-2 border-blue-500"></div>
            ading...
        </div>
        </div>
    );
};

export default Loading;