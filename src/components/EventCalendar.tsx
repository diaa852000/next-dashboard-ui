"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores"
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores"
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores"
    },
];

export default function EventCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className="bg-white p-4 rounded-md">
            <Calendar onChange={onChange} value={value} />
            <div className='flex justify-between items-center mt-4 mb-2'>
                <h1 className='text-lg font-semibold'>Events</h1>
                <Image
                    src={'/moreDark.png'}
                    alt=''
                    width={20}
                    height={20}
                    className='cursor-pointer'
                />
            </div>
            <div className="flex flex-col gap-4">
                {events.map(event => (
                    <div className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-Sky even:border-t-Purple" key={event.id}>
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold text-gray-600">{event.title}</h1>
                            <span className="text-xs text-gray-400">{event.time}</span>
                        </div>
                        <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}