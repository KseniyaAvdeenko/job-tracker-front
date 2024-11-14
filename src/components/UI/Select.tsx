import React, {FC} from 'react';

interface ISelectProps {
    id: string;
    label: string;
    value: string;
    changeHandler: Function;
    optionsArray: Array<any>
    selectStyle: {[key:string]: string},
    required:boolean
}

const Select: FC<ISelectProps> = ({required, selectStyle, id, label, value, optionsArray, changeHandler}) => {

    return (
        <div>
            <label htmlFor={id} className="block text-2xl font-medium text-text-200 mb-2">
                {label} {required && (<sup className={'text-red-600 text-base'}>*</sup>)}
            </label>
            <select style={selectStyle} required={required}
                    className="block text-2xl w-full rounded-md border-0 p-1.5 text-text-100 shadow-sm ring-1 ring-inset ring-bg-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-200"
                    value={value} name="status" id="status" onChange={e => changeHandler(e)}>
                {optionsArray && optionsArray.map(({name, color, _id}) => (
                    <option key={_id} value={name} style={{background: color, fontSize: '1.6rem'}}>{name}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;
