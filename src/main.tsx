import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AliveScope } from 'react-activation'
import App from '@/App'
import store from '@/store'
import './i18n'
import '@/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <AliveScope>
        <App />
      </AliveScope>
    </BrowserRouter>
  </Provider>
)
