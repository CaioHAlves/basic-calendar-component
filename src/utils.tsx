import React from 'react'

interface IGenerateCalendar {
  selectedDate: Date | null
  month: number
  year: number
  currentMonth: number
  currentYear: number
  setSelectedDate: (value: React.SetStateAction<Date | null>) => void
  defaultDate: Date | null
  disabledPast?: boolean 
  disabledFuture?: boolean
  disabled?: boolean
}

interface IHandleClick {
  currentYear: number
  currentMonth: number
  setSelectedDate: (value: React.SetStateAction<Date | null>) => void
}

export const validateDate = (date?: string | Date) => {
  if (typeof date === "object") {
    return date
  }
  if (typeof date === "string") {
    return new Date(`${date} 00:00:00`)
  }

  return null
}

const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, { currentMonth, currentYear, setSelectedDate }: IHandleClick) => {
  const classList = event.currentTarget.classList 

  if (!classList.contains("disabled-past") && !classList.contains("disabled-future")) {
    const dateForOnChange = new Date(`${currentYear}-${currentMonth + 1}-${event.currentTarget.dataset.day} 00:00:00`)
  
    setSelectedDate(dateForOnChange)
  }
}

export const generateCalendar = ({
  month,
  year,
  selectedDate,
  currentMonth,
  currentYear,
  setSelectedDate,
  defaultDate,
  disabledPast,
  disabledFuture,
  disabled
}: IGenerateCalendar) => {

  const paramSelectedDate = selectedDate || new Date()
  const paramDisableFuture = disabledFuture && (defaultDate || new Date())
  const paramDisabledPast = disabledPast && (defaultDate || new Date())

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  let dayCounter = 0

  let days = []

  for (let i = 0; i < 6; i++) {
    let weekDays = []
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay.getDay()) {
        weekDays.push(<button key={`empty-${j}`} type="button" />)
      } else if (dayCounter < daysInMonth) {
        dayCounter++
  
        const isSelected = dayCounter === paramSelectedDate.getDate() && currentMonth === (paramSelectedDate.getMonth() ?? 0) && currentYear === (paramSelectedDate.getFullYear() ?? 0)
        const cellDate = new Date(year, month, dayCounter)
        const isDisabledPast = paramDisabledPast && (cellDate.setHours(0, 0, 0, 0,) < paramDisabledPast.setHours(0, 0, 0, 0,) || cellDate.setHours(0, 0, 0, 0,) < new Date().setHours(0, 0, 0, 0,))
        const isDisabledFuture = paramDisableFuture && (cellDate.setHours(0, 0, 0, 0,) > paramDisableFuture.setHours(0, 0, 0, 0,) || cellDate.setHours(0, 0, 0, 0,) > new Date().setHours(0, 0, 0, 0,))
        
        weekDays.push(
          <button
            key={`day-${dayCounter}`}
            className={`${isSelected ? 'selected' : ""} ${isDisabledPast || disabled ? 'disabled-past' : ""} ${isDisabledFuture || disabled ? 'disabled-future' : ""}`}
            data-day={dayCounter}
            disabled={disabled}
            onClick={(event) => handleClick(event, { currentMonth, currentYear, setSelectedDate })}
            type="button"
          >
            {dayCounter}
          </button>
        )
      } else {
        weekDays.push(<button key={`empty-${j}`} type="button" />)
      }
    }
    days.push(<div key={`week-${i}`} className="week">{weekDays}</div>)
  }

  return <div className="calendar">{days}</div>
}