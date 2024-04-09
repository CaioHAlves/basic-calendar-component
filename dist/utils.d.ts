/// <reference types="react" />
export declare const validateDate: (date?: string | Date | undefined) => Date | null;
interface IGenerateCalendar {
    selectedDay: number | null;
    selectedDate: Date | null;
    month: number;
    year: number;
    table: HTMLTableSectionElement | null;
    currentMonth: number;
    currentYear: number;
    onChange?: (date: Date, dateToLocaleString: string) => void;
    setSelectedDay: (value: React.SetStateAction<number | null>) => void;
    setSelectedDate: (value: React.SetStateAction<Date | null>) => void;
    defaultDate: Date | null;
    disabledPast?: boolean;
    disabledFuture?: boolean;
}
export declare const generateCalendar: ({ month, year, selectedDate, selectedDay, table, currentMonth, currentYear, onChange, setSelectedDay, setSelectedDate, defaultDate, disabledPast, disabledFuture }: IGenerateCalendar) => void;
export {};
