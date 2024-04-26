import React, { ReactNode } from 'react';
import { TCountry } from './constantsArrayDaysAndMonths';
interface IProps {
    defaultDate?: string | Date;
    icon?: ReactNode;
    label?: string;
    placeholder?: string;
    forwardedRef?: React.Ref<HTMLInputElement>;
    error?: string;
    onChange?: (date: Date, dateToLocaleString: string) => void;
    disabledPast?: boolean;
    disabledFuture?: boolean;
    language?: TCountry;
    variant?: "outlined" | "default";
    disabled?: boolean;
    inputName?: string;
    dataLanguage?: {
        daysOfTheWeek: Array<string | number>;
        months: Array<string | number>;
    };
}
export declare const Calendar: ({ defaultDate, icon, label, placeholder, forwardedRef, error, disabledPast, disabledFuture, onChange, language, variant, disabled, inputName, dataLanguage, ...rest }: IProps) => React.JSX.Element;
export {};
