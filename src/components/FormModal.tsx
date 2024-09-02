"use client";

import { ActionType, TableTypes } from "@/lib/types"
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";

const TeacherForm = dynamic(() => import("./forms/TeacherForm"),{
    loading: () => <h1>loading...</h1>
})
const StudentForm = dynamic(() => import("./forms/StudentForm"),{
    loading: () => <h1>loading...</h1>
})

const forms: {
    [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
    teacher: (type,data) => <TeacherForm type={type} data={data}/>,
    student: (type,data) => <StudentForm type={type} data={data}/>
}

export default function FormModal(
    {
        table,
        type,
        data,
        id,
    }: {
        table: TableTypes,
        type: ActionType,
        data?: any,
        id?: number
    }
) {
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create"
        ? "bg-Yellow"
        : type === "update"
            ? "bg-Sky"
            : "bg-Purple"

    const [open, setOpen] = useState(false);

    const Form = () => {
        return type === "delete" && id ? (
            <form action={""} className="flex flex-col gap-4 p-4">
                <span className="text-center font-medium">All data will be lost, Are you sure you want to delete this {table}?</span>
                <button
                    type="button"
                    className="bg-red-700 text-white py-2 px-4 rounded-md border-none w-max self-center"
                >
                    Delete
                </button>
            </form>
        ) : type === ActionType.CREATE || type === ActionType.UPDATE ? (
            forms[table](type, data)
        ) : "Form Not Found!"
    }

    return (
        <>
            <button 
                onClick={() => setOpen(true)}
                type="button" 
                className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
            >
                <Image
                    src={`/${type}.png`}
                    alt=""
                    width={16}
                    height={16}
                />
            </button>
            {/* w-full md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] h-full md:h-auto */}
            {open && (
                <div className={`w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-60 z-50 flex items-center justify-center  `}>
                    <div className="bg-white p-4 rounded-md relative container h-full md:h-auto">
                        <Form />
                        <div
                            className="absolute top-4 right-4 cursor-pointer"
                            onClick={() => setOpen(false)}
                        >
                            <Image
                                src={'/close.png'}
                                alt=""
                                width={14}
                                height={14}
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
