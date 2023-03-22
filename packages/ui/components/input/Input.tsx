import React from 'react';

interface InputProps {
    //Значение
    value: any
    //Типы инпута
    type?: "text" | "password" | "tel"
    //Функция изменения компонена
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    //Плейсхолдер
    placeholder: string
}


export function Input({onChange, value, placeholder, type = "text"}:InputProps){
    return(
        <input type={type}
               onChange={(e) => onChange(e)}
               value={value}
               className="bg-bg text-custom-gray text-sm rounded-xl block w-full px-2.5 py-4"
               placeholder={placeholder} required/>
    )
}
