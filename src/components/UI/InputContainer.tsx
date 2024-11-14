import React, {FC} from 'react';
interface IInputContainerProps{
    id: string;
    label:string;
    name: string;
    type: string
    changeHandler:Function;
    required: boolean;
    value: string
}
const InputContainer: FC<IInputContainerProps> = ({value, id,type, name, required, changeHandler, label}) => {
    return (
        <div>
            <label htmlFor={id} className="block text-2xl font-medium text-text-200">
                {label} {required && (<sup className={'text-red-600 text-base'}>*</sup>)}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    value={value}
                    name={name}
                    type={type}
                    onChange={e=>changeHandler(e)}
                    required={required}
                    className="block w-full rounded-md border-0 p-1.5 text-text-100 shadow-sm ring-1 ring-inset ring-bg-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-200 sm:text-sm/6"
                />
            </div>
        </div>
    );
};

export default InputContainer;
