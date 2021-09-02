import ReactDOM from 'react-dom';
import App from './App.js';


const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2021',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2021',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2021',
    important: true
  }
]


ReactDOM.render(
  <App notes={notes}/>,
  document.getElementById('root')
)