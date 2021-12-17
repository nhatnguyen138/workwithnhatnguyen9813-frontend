import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')
if (rootElement && rootElement.hasChildNodes())
  ReactDOM.hydrate(
    <BrowserRouter>
      <App />
    </BrowserRouter>, rootElement)
else
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, rootElement)
reportWebVitals()