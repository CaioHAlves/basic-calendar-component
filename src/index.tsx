import React, { ChangeEvent, ReactNode, useState } from 'react';
import { generateCalendar, validateDate } from './utils';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import EventIcon from '@material-ui/icons/Event';
import * as S from './styles'
import { IconButton } from '@material-ui/core';
import { defaultArrayMonths, defaultArrayDaysWeekly, TCountry, textActions } from './constantsArrayDaysAndMonths'

interface IProps {
  defaultDate?: string | Date
  icon?: ReactNode
  label?: string
  placeholder?: string
  forwardedRef?: React.Ref<HTMLInputElement>
  error?: string
  onChange?: (date: Date, dateToLocaleString: string) => void
  disabledPast?: boolean
  disabledFuture?: boolean
  language?: TCountry
  variant?: "outlined" | "default"
  disabled?: boolean
  inputName?: string
  dataLanguage?: {
    daysOfTheWeek: Array<string | number>
    months: Array<string | number>
  }
}

export const Calendar = ({
  defaultDate,
  icon,
  label,
  placeholder = " ",
  forwardedRef,
  error,
  disabledPast,
  disabledFuture,
  onChange,
  language = "en-US",
  variant = "outlined",
  disabled,
  inputName,
  dataLanguage,
  ...rest
}: IProps) => {

  const arrayDaysWeekly = dataLanguage && dataLanguage.daysOfTheWeek.length === 7 ? dataLanguage.daysOfTheWeek : defaultArrayDaysWeekly[language]
  const arrayMonths = dataLanguage && dataLanguage.months.length === 12 ? dataLanguage.months : defaultArrayMonths[language]

  const [currentYear, setCurrentYear] = useState<number>(defaultDate ? validateDate(defaultDate)!.getFullYear() : new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState<number>(defaultDate ? validateDate(defaultDate)!.getMonth() : new Date().getMonth())
  const [selectedDate, setSelectedDate] = useState<Date | null>(validateDate(defaultDate))
  const [currentSelectDate, setCurrentSelectDate] = useState<Date | null>(validateDate(defaultDate))
  const [openCalendar, setOpenCalendar] = useState(false)

  const changeYear = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentYear(Number(event.target.value))
  }

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(s => s - 1)
    }
  }

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(s => s + 1)
    }
  }

  const changeMonth = (event: ChangeEvent<HTMLSelectElement>) => {
    setCurrentMonth(Number(event.target.value))
  }

  const generateOptionsYear = () => {
    const startYear = currentYear - 100
    const endYear = currentYear + 100
    let options: Array<{ label: number, value: number }> = []

    for (let i = startYear; i <= endYear; i++) {
      options.push({ label: i, value: i })
    }

    return options
  }

  const handleOpenCalendar = () => {
    setOpenCalendar(!openCalendar)
  }

  const handleConfirm = () => {
    if (onChange && selectedDate) {
      setCurrentSelectDate(selectedDate)
      onChange(selectedDate, selectedDate.toLocaleDateString())
    }
    handleOpenCalendar()
  }

  const handleCancel = () => {
    setSelectedDate(currentSelectDate)
    handleOpenCalendar()
  }

  return (
    <>
      <S.SInput error={error} className={`${variant} ${disabled ? "disabled" : ""}`.trim()}>
        <input
          type='text'
          id="input-calendar"
          value={selectedDate?.toLocaleDateString() || ""}
          placeholder={placeholder}
          ref={forwardedRef}
          onClick={handleOpenCalendar}
          autoComplete='off'
          onChange={() => selectedDate?.toLocaleDateString() || ""}
          disabled={disabled}
          name={inputName}
          {...rest}
        />
        <label htmlFor="input-calendar">{label}</label>
        <IconButton onClick={handleOpenCalendar}>{icon || <EventIcon />}</IconButton>
      </S.SInput>
      {openCalendar ?
        <S.ConteinerCalendar role="dialog" id="dialog">
          <div id='calendar-content'>
            <div className="header-calendar">
              <select id="select-year" onChange={changeYear} value={currentYear} className="select-year">
                {generateOptionsYear().map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                ))}
              </select>
              <span id="date-string">{arrayDaysWeekly[selectedDate?.getDay() || 0]}, {arrayMonths[selectedDate?.getMonth() || currentMonth]} {selectedDate?.getDate()}</span>
            </div>

            <div id="body-calendar">
              <div className="nav-buttons">
                <button id="previous-month" onClick={prevMonth}>
                  <ArrowBackIosIcon fontSize='small' />
                </button>
                <select id="select-month" onChange={changeMonth} value={currentMonth} className="select-month">
                  {arrayMonths.map((item, index) => (
                    <option value={index} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
                <button id="next-month" onClick={nextMonth}>
                  <ArrowForwardIosIcon fontSize='small' />
                </button>
              </div>
              <div id="calendar">
                <div id="body-calendar">
                  <div className="first-line">
                    {arrayDaysWeekly.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>
                  {generateCalendar({
                    month: currentMonth,
                    year: currentYear,
                    currentMonth,
                    currentYear,
                    selectedDate,
                    setSelectedDate(value) {
                      setSelectedDate(value)
                    },
                    defaultDate: validateDate(defaultDate),
                    disabledPast,
                    disabledFuture,
                    disabled
                  })}
                </div>
                <div className='actions'>
                  <button onClick={handleCancel}>{textActions[language].cancel}</button>
                  <button onClick={handleConfirm}>{textActions[language].confirm}</button>
                </div>
              </div>
            </div>
          </div>
        </S.ConteinerCalendar>
        : null}
    </>
  )
}
