export const validateDate = (date?: string | Date) => {
  if (typeof date === "object") {
    return date
  }
  if (typeof date === "string") {
    return new Date(`${date} 00:00:00`)
  }

  return null
}

interface IGenerateCalendar {
  selectedDay: number | null
  selectedDate: Date | null
  month: number
  year: number
  table: HTMLTableSectionElement | null
  currentMonth: number
  currentYear: number
  onChange?: (date: Date, dateToLocaleString: string) => void
  setSelectedDay: (value: React.SetStateAction<number | null>) => void
  setSelectedDate: (value: React.SetStateAction<Date | null>) => void
  defaultDate: Date | null
  disabledPast?: boolean 
  disabledFuture?: boolean
}

export const generateCalendar = ({ 
  month, 
  year, 
  selectedDate, 
  selectedDay, 
  table, 
  currentMonth, 
  currentYear, 
  onChange, 
  setSelectedDay, 
  setSelectedDate, 
  defaultDate, 
  disabledPast,
  disabledFuture
}: IGenerateCalendar) => {

  const paramSelectedDate = selectedDate || new Date()
  const paramDefaultDateForDisableDates = defaultDate || new Date()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  let dayCounter = 0

  let html = ""

  for (let i = 0; i < 6; i++) {
    html += "<tr>";

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay.getDay()) {
        html += "<td></td>"
      } else if (dayCounter < daysInMonth) {
        dayCounter++

        const dayNumber = dayCounter
        const isSelected = dayNumber === paramSelectedDate.getDate() && currentMonth === (paramSelectedDate.getMonth() ?? 0) && currentYear === (paramSelectedDate.getFullYear() ?? 0)
        const cellDate = new Date(year, month, dayCounter)
        const isDisabledPast = paramDefaultDateForDisableDates && disabledPast && (cellDate.setHours(0, 0, 0, 0,) < paramDefaultDateForDisableDates.setHours(0, 0, 0, 0,) || cellDate.setHours(0, 0, 0, 0,) < new Date().setHours(0, 0, 0, 0,))
        const isDisabledFuture = paramDefaultDateForDisableDates && disabledFuture && (cellDate.setHours(0, 0, 0, 0,) > paramDefaultDateForDisableDates.setHours(0, 0, 0, 0,) || cellDate.setHours(0, 0, 0, 0,) > new Date().setHours(0, 0, 0, 0,))

        html += `<td class="${isSelected ? 'selected' : ''} ${isDisabledPast ? 'disabled-past' : undefined} ${isDisabledFuture ? 'disabled-future' : undefined}" data-day="${dayNumber}">${dayNumber}</td>`
      } else {
        html += ""
      }
    }

    html += "</tr>"
  }

  if (table) {
    table.innerHTML = html
  }

  const days = document.querySelectorAll("td")

  days.forEach((day) => {
    if (day.innerText && !day.classList.contains('disabled-past') && !day.classList.contains('disabled-future')) {
      day.addEventListener("click", function () {
        setSelectedDay(Number(day.dataset.day))
        const newSelectedDate = new Date(currentYear, currentMonth, Number(day.dataset.day))
        setSelectedDate(newSelectedDate)

        if (selectedDay) {
          const selectedDayElement = document.querySelector(`[data-day="${selectedDay}"]`)

          if (selectedDayElement) {
            selectedDayElement.classList.remove("selected")
          }
        }

        day.classList.add("selected")
        const date = new Date(`${currentYear}-${currentMonth + 1}-${day.dataset.day} 00:00:00`)

        onChange?.(date, date.toLocaleDateString())
      })
    }
  })
}