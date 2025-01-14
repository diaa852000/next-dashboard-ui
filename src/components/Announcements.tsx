import React from 'react'

export default function Announcements() {
    return (
        <div className='bg-white p-4 rounded-md'>
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold'>Announcements</h1>
                <span className='text-xs text-gray-400'>View All</span>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                <div className='bg-SkyLight rounded-md p-4'>
                    <div className="flex items-center justify-between">
                        <h2 className='font-medium'>Lorem ipsum dolor sit.</h2>
                        <span className='text-gray-400 text-xs bg-white rounded-md p-1'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore impedit consequuntur. Earum possimus </p>
                </div>
                <div className='bg-PurpleLight rounded-md p-4'>
                    <div className="flex items-center justify-between">
                        <h2 className='font-medium'>Lorem ipsum dolor sit.</h2>
                        <span className='text-gray-400 text-xs bg-white rounded-md p-1'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore impedit consequuntur. Earum possimus </p>
                </div>
                <div className='bg-YellowLight rounded-md p-4'>
                    <div className="flex items-center justify-between">
                        <h2 className='font-medium'>Lorem ipsum dolor sit.</h2>
                        <span className='text-gray-400 text-xs bg-white rounded-md p-1'>2025-01-01</span>
                    </div>
                    <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore impedit consequuntur. Earum possimus </p>
                </div>
            </div>
        </div>
    )
}
