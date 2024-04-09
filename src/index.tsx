import React, { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react';
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
  language = "en-US"
}: IProps) => {

  const arrayDaysWeekly = defaultArrayDaysWeekly[language]
  const arrayMonths = defaultArrayMonths[language]

  const calendarRef = useRef<HTMLTableSectionElement | null>(null)

  const [currentYear, setCurrentYear] = useState<number>(defaultDate ? validateDate(defaultDate)!.getFullYear() : new Date().getFullYear())
  const [currentMonth, setCurrentMonth] = useState<number>(defaultDate ? validateDate(defaultDate)!.getMonth() : new Date().getMonth())
  const [selectedDay, setSelectedDay] = useState<number | null>(defaultDate ? validateDate(defaultDate)!.getDate() : new Date().getDate())
  const [selectedDate, setSelectedDate] = useState<Date | null>(validateDate(defaultDate))
  const [openCalendar, setOpenCalendar] = useState(false)

  useEffect(() => {
    generateCalendar({
      month: currentMonth,
      year: currentYear,
      currentMonth,
      currentYear,
      selectedDate,
      selectedDay,
      setSelectedDate(value) {
        setSelectedDate(value)
      },
      setSelectedDay(value) {
        setSelectedDay(value)
      },
      table: calendarRef.current,
      onChange(date, dateToLocaleString) {
        onChange?.(date, dateToLocaleString)
      },
      defaultDate: validateDate(defaultDate),
      disabledPast,
      disabledFuture
    })
  }, [currentYear, currentMonth, selectedDate, openCalendar])

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
      onChange(selectedDate, selectedDate.toLocaleDateString())
    }
    handleOpenCalendar()
  }

  const handleCancel = () => {
    setSelectedDate(validateDate(defaultDate))
    handleOpenCalendar()
  }

  return (
    <>
      <S.SInput error={error}>
        <input
          type='text'
          id="data-calendar"
          value={selectedDate?.toLocaleDateString()}
          placeholder={placeholder}
          ref={forwardedRef}
          onClick={handleOpenCalendar}
          autoComplete='off'
          onChange={(e) => e.target.value = selectedDate?.toLocaleDateString() || ""}
        />
        <label htmlFor="data-calendar">{label}</label>
        <IconButton onClick={handleOpenCalendar}>{icon || <EventIcon />}</IconButton>
      </S.SInput>
      {openCalendar ?
        <S.ConteinerCalendar role="dialog" id="dialog">
          <div id='content'>
            <div className="header">
              <select id="year" onChange={changeYear} value={currentYear} className="select">
                {generateOptionsYear().map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                ))}
              </select>
              <span id="date-full">{arrayDaysWeekly[selectedDate?.getDay() || 0]}, {arrayMonths[selectedDate?.getMonth() || currentMonth]} {selectedDate?.getDate()}</span>
            </div>

            <div id="body-calendar">
              <div className="nav-buttons">
                <button id="previous" onClick={prevMonth}>
                  <ArrowBackIosIcon fontSize='small' />
                </button>
                <select id="month" onChange={changeMonth} value={currentMonth} className="select">
                  {arrayMonths.map((item, index) => (
                    <option value={index} key={index}>
                      {item}
                    </option>
                  ))}
                </select>
                <button id="next" onClick={nextMonth}>
                  <ArrowForwardIosIcon fontSize='small' />
                </button>
              </div>
              <div id="calendar">
                <table>
                  <thead>
                    <tr>
                      {arrayDaysWeekly.map((item, index) => (
                        <th key={index}>{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody ref={calendarRef}></tbody>
                </table>
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
