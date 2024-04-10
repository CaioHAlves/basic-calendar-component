# Basic Calendar

- Capture current dates
- Block future and past dates from the default date
- Display calendar in some predefined languages
- Use refs to get input data
- Place the icon you want if you don't want to use the default one

## Usage/Examples

```javascript
import { Calendar } from 'basic-calendar-component'

function App() {
  return (
      <Calendar
        onChange={(date, dateToLocaleString) => console.log(date, dateToLocaleString)}
        language='pt-BR'
        label='Initial Date'
        defaultDate="2024-02-10"
      />
  )
}
```

## Running locally

Clone the project
```bash
  git clone https://link-para-o-projeto
```

Enter the project directory
```bash
  cd react-basic-calendar
```

Install dependencies
```bash
  yarn install
```

Enter the example directory
```bash
  cd example
```

Install dependencies
```bash
  yarn install
```

Start the project
```bash
  yarn start
```

## Contribution

To learn how to contribute, contact me via email at caio.henriquealves@outlook.com or through the contact methods on my website https://caiohalves.vercel.app
