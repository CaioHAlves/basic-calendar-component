import React from 'react';
interface IGenerateCalendar {
    selectedDate: Date | null;
    month: number;
    year: number;
    currentMonth: number;
    currentYear: number;
    setSelectedDate: (value: React.SetStateAction<Date | null>) => void;
    defaultDate: Date | null;
    disabledPast?: boolean;
    disabledFuture?: boolean;
    disabled?: boolean;
}
export declare const validateDate: (date?: string | Date | undefined) => Date | null;
export declare const generateCalendar: ({ month, year, selectedDate, currentMonth, currentYear, setSelectedDate, defaultDate, disabledPast, disabledFuture, disabled }: IGenerateCalendar) => React.JSX.Element;
export {};
