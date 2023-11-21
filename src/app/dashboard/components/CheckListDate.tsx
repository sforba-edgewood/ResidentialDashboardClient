import { DatePicker, DatePickerValue } from "@tremor/react";
import { useState } from "react";

const ChecklistDate = () => {
    const [submitDate, setSubmiteDate] = useState(new Date());
    return (
        <div className="mx-auto max-w-4xl mb-5">
            <div className="text-center">
                Select Date:
            </div>
            <div className="relative">
            <DatePicker className="max-w-sm mx-auto" />
                {/* <div className="absolute  z-10 inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </div>
                <DatePicker className={'date_picker bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600'} selected={submitDate} onChange={(date) => setSubmiteDate(date)} /> */}
            </div>
        </div>
    );
}

export default ChecklistDate;