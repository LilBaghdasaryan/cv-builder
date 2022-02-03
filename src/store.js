import { createStore } from 'redux';
import rootReducer from './redux/reducer/index'

export default function configureStore() {
    return createStore(rootReducer);
}