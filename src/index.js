import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import App from './App.js'
import './font-awesome.min.css'
import store from './redux/store'
import { Provider } from 'react-redux'


ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
document.getElementById('root')
)




reportWebVitals();
