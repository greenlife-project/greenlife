import React from 'react';

interface ButtonProps {
    label: string;
    type?: "default" | "empty" ;
    onClick?: () => void;

}


const getTypeClasses = (type: any) => {
    switch (type) {
        case 'empty': {
            return 'text-main text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:text-secondary'
        }
        case 'disabled': {
            return ''
        }
        default: {
            return 'focus:outline-none text-custom-white bg-main hover:text-custom-green'
        }
    }
}

export function Button({
  label,
  type = "default",
  ...props
  }: ButtonProps){
    const typeClass = getTypeClasses(type)
    return(
        <button className={['text-sm px-5 py-2.5 mr-2 mb-2 font-medium rounded-lg', typeClass].join(' ')} {...props}>
            {label}
        </button>
    )
}
