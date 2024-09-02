import { FieldError } from "react-hook-form";

type InputFiledProps = {
    label: string;
    type?: React.HTMLInputTypeAttribute;
    register: any;
    name: string;
    defaultValue?: string;
    error?: FieldError;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function InputField({
    label,
    type = "text",
    register,
    name,
    defaultValue,
    error,
    inputProps
}: InputFiledProps) {
    return (
        <div className="flex flex-col gap-2 w-full flex-1 md:min-w-[200px]">
            <label htmlFor={name} className="text-xs text-gray-500 capitalize">{label}</label>
            <input
                type={type}
                id={name}
                {...register(name)}
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                {...inputProps}
                defaultValue={defaultValue}
            />
            {error?.message && <p className="text-xs text-red-500  font-light">{error?.message.toString()}</p>}
        </div>
    )
}
