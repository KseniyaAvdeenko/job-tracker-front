import React, {FC} from 'react';

interface IInputContainerProps {
    id: string;
    label?: string;
    name: string;
    type: string
    changeHandler: Function;
    required: boolean;
    value: string
    isTextArea: boolean
}

const InputContainer: FC<IInputContainerProps> = ({
                                                      isTextArea,
                                                      value,
                                                      id,
                                                      type,
                                                      name,
                                                      required,
                                                      changeHandler,
                                                      label
                                                  }) => {
    return (
        <div>
            {label && (
                <label htmlFor={id} className="block text-2xl font-medium text-text-200">
                    {label} {required && (<sup className={'text-red-600 text-base'}>*</sup>)}
                </label>
            )}
            {!isTextArea
                ? <div className="mt-2">
                    <input
                        id={id}
                        value={value}
                        name={name}
                        type={type}
                        onChange={e => changeHandler(e)}
                        required={required}
                        className="block w-full rounded-md border-0 p-1.5 text-text-100 shadow-sm ring-1 ring-inset ring-bg-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-200 sm:text-sm/6 lg:text-2xl"
                    />
                </div>
                : <div className="mt-2">
                    <textarea cols={30} rows={4} id={id}
                              value={value}
                              name={name}
                              onChange={e => changeHandler(e)}
                              required={required}
                              style={{resize: 'vertical'}}
                              className="block w-full rounded-md border-0 p-1.5 text-text-100 shadow-sm ring-1 ring-inset ring-bg-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-200 sm:text-sm/6 lg:text-2xl">
                    </textarea>
                </div>
            }
        </div>
    );
};

export default InputContainer;
