"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters long!" })
        .max(20, { message: "Username must be at most 20 characters long! " }),
    email: z.string().email({ message: "invalid email address!" }),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters long!" }),
    firstName: z.string().min(1, { message: "First name is required"! }),
    lastName: z.string().min(1, { message: "Last name is required!" }),
    phone: z.string().min(1, { message: "Phone is required!" }),
    address: z.string().min(1, { message: "Address is required!" }),
    bloodType: z.string().min(1, { message: "Blood Type is required!" }),
    birthday: z.string().min(1, { message: "Birthday is required!" }).refine(val => !isNaN(Date.parse(val)), {
        message: "Invalid date!"
    }),
    sex: z.enum(["male", "female"], { message: "Sex is required!" }),
    img: z
        .any()
        .refine((files) => files?.[0], {
            message: "Image is required!",
        })
});

type StudentSchemaType = z.infer<typeof schema>;

export default function StudentForm({ type, data }: { type: "create" | "update", data?: any }) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<StudentSchemaType>({
        resolver: zodResolver(schema)
    })

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return (
        <form className="flex flex-col gap-4 md:gap-8 overflow-y-auto h-full p-4" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold">Create a new student</h1>
            <div className="flex flex-col gap-4">
                <span className="text-xs text-gray-400 font-medium">Authentcation Information</span>
                <div className="flex flex-col sm:flex-row gap-4 items-start justify-between flex-wrap">
                    <InputField
                        label="username"
                        name="username"
                        defaultValue={data?.username}
                        register={register}
                        error={errors.username}
                    />
                    <InputField
                        label="email"
                        name="email"
                        defaultValue={data?.email}
                        register={register}
                        error={errors.email}
                        type="email"
                    />
                    <InputField
                        label="password"
                        name="password"
                        defaultValue={data?.password}
                        register={register}
                        error={errors.password}
                        type="password"
                    />
                </div>
            </div>
            <span className="text-xs text-gray-400 font-medium">Personal Information</span>
            <div className="flex flex-col md:flex-row gap-4 items-start justify-between flex-wrap">
                <InputField
                    label="first name"
                    name="firstName"
                    defaultValue={data?.firstName}
                    register={register}
                    error={errors.firstName}
                />
                <InputField
                    label="last name"
                    name="lastName"
                    defaultValue={data?.lastName}
                    register={register}
                    error={errors.lastName}
                />
                <InputField
                    label="phone"
                    name="phone"
                    defaultValue={data?.phone}
                    register={register}
                    error={errors.phone}
                />
                <InputField
                    label="address"
                    name="address"
                    defaultValue={data?.address}
                    register={register}
                    error={errors.address}
                />
                <InputField
                    label="bloodType"
                    name="bloodType"
                    defaultValue={data?.bloodType}
                    register={register}
                    error={errors.bloodType}
                />
                <InputField
                    label="birthday"
                    name="birthday"
                    defaultValue={data?.birthday}
                    register={register}
                    error={errors.birthday}
                    type="date"
                />
                <div className="flex flex-col gap-2 w-full flex-1 md:min-w-[200px]">
                    <label htmlFor="sex" className="text-xs text-gray-500 capitalize">sex</label>
                    <select id="sex" className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                        {...register("sex")}
                        defaultValue={data?.sex}
                    >
                        <option value={"male"}>male</option>
                        <option value={"female"}>female</option>
                    </select>
                    {errors?.sex?.message && <p className="text-xs text-red-500  font-light">{errors?.sex?.message.toString()}</p>}
                </div>

                <div className="flex flex-col justify-center items-center gap-2 w-full flex-1 md:min-w-[200px] sm:mt-7">
                    <label htmlFor="img" className="text-xs text-gray-500 capitalize flex items-center gap-2 cursor-pointer">
                        <Image
                            src={'/upload.png'}
                            alt=""
                            width={28}
                            height={28}
                        />
                        <span>Upload a photo</span>
                    </label>
                    <input
                        type="file"
                        id="img"
                        {...register("img")}
                        className="hidden"
                    />
                    {errors?.img?.message && <p className="text-xs text-red-500  font-light">{errors?.img?.message.toString()}</p>}
                </div>
            </div>
            <button className="bg-blue-400 text-white p-2 rounded-md mt-4">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
    )
}
