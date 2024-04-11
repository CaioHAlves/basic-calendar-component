import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Calendar } from '../src'

const App = () => {
  return (
    <div>
      <Calendar
        onChange={(date, dateToLocaleString) => console.log(date, dateToLocaleString)}
        language='pt-BR'
        label='Initial date'
        defaultDate="2024-02-15"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
