import React from 'react'

export const Toolbar = () => {
    return (
        <div className='absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4'>
            <div className="bg-white rounded-md p-1.5 gap-y-1 flex flex-col items-center shadow-md">
                <div>Pencil</div>
                <div>Square</div>
                <div>Circle</div>
                <div>Ellipsis</div>
                <div>Sticky Note</div>
            </div>
            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-md">
                <div>Undo</div>
                <div>Redo</div>
            </div>
        </div>
    )
}

Toolbar.Skeleton = function ToolbarSkeleton() {
    return (
        <div className='absolute top-[50%] -translate-y-[50%] left-2 flex flex-col gap-y-4 h-[300px] w-[60px] bg-white shadow-md rounded-md' />
    )
}