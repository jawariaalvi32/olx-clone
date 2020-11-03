import reducer from './reducer';
import { createStore } from 'redux';
// import thunk from 'redux-thunk';


const store = createStore(reducer);

export default store;