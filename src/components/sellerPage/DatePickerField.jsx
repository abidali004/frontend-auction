import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField, ErrorMessage } from 'formik';

const DatePickerField = ({ ...props }) => {
    const [field, , helpers] = useField(props);
    const { setValue } = helpers;

    return (
        <div>

            <DatePicker
                {...props}
                selected={field.value}
                onChange={val => setValue(val)}
                className="border border-zinc-900 rounded h-[3.4rem] w-full text-center"
            />
            <ErrorMessage name={field.name} component="div" className="text-red-500" />
        </div>
    );
};

export default DatePickerField;
