import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, error = undefined, className, ...rest }, ref
) => {
    return (
        <div className="flex flex-col w-full">
            {!!label && (
                <label 
                    htmlFor={name} 
                    id={`${name}-form-label`} 
                    className="mb-2 text-sm font-medium text-gray-200"
                >
                    {label}
                </label>
            )}
            
            <input
                name={name}
                id={name}
                ref={ref}
                className={`
                    w-full px-4 py-3 rounded-md text-lg outline-none transition-colors
                    bg-black/60 text-white border-2
                    hover:bg-black/90
                    focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
                    ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-transparent'}
                    ${className || ''}
                `}
                {...rest}
            />

            {!!error && (
                <span className="mt-2 text-sm text-red-500">
                    {error.message}
                </span>
            )}
        </div>
    );
}

export const Input = forwardRef(InputBase);