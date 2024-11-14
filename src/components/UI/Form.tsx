import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface IFormProps {
    children: React.ReactNode;
    formName?: string;
    submitHandler: Function;
    buttonName: string;
    additionalInfo?: { text: string, linkPath: string, linkName: string }
}

const Form: FC<IFormProps> = ({additionalInfo, buttonName, children, formName, submitHandler}) => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            {formName && (<div className="sm:mx-auto sm:w-full sm:max-w-sm md:max-w-lg lg:max-w-4xl ">
                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-text-200">
                    {formName}
                </h2>
            </div>)}

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-lg lg:max-w-4xl ">
                <form onSubmit={e => submitHandler(e)} method="POST" className="w-full space-y-6">
                    {children}
                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-accent-200 px-3 py-1.5 text-sm/6 font-semibold text-bg-100 shadow-sm hover:bg-accent-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-100"
                        >
                            {buttonName}
                        </button>
                    </div>
                </form>
                {additionalInfo && (
                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        {additionalInfo.text}
                        <Link to={additionalInfo.linkPath} className="ml-2 font-semibold text-accent-200 hover:text-accent-100">
                            {additionalInfo.linkName}
                        </Link>
                    </p>
                )}

            </div>
        </div>
    );
};

export default Form;
