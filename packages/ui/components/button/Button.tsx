import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
}

export function Button({
                                   label,
                                   ...props
                               }: ButtonProps){
    return(
        <button className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2" {...props}>
            {label}
        </button>
    )
}
