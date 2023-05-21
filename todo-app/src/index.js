import reactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import './style/index.css'


let root = reactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider >)