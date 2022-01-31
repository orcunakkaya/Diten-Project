import { combineReducers } from 'redux';
import toggleReducer from './toggleReducer';
import firstTableReducer from './firstTableReducer';
import secondTableReducer from './secondTableReducer';
import thirdTableReducer from './thirdTableReducer';
import fourthTableReducer from './fourthTableReducer';

const reducers = combineReducers({
    toggle: toggleReducer,
    firstTable: firstTableReducer,
    secondTable: secondTableReducer,
    thirdTable: thirdTableReducer,
    fourthTable: fourthTableReducer
});

export default reducers;