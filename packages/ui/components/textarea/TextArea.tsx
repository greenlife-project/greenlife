import {ChangeEvent} from "react";

interface TextAreaProps {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

export function TextArea({onChange, placeholder, value}: TextAreaProps){
    return(
        <textarea rows={4} maxLength={100}
                  onChange={onChange}
                  value={value}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-custom-white rounded-lg md:w-1/2"
                  placeholder={placeholder}></textarea>
    )
}
