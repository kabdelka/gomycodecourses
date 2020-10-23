import {combineReducers} from 'redux'
import bookreducer from './bookreducer.js'
import filterreducer from './filterreducer.js'


const rootReducer = combineReducers({filter:filterreducer, book:bookreducer})


export default rootReducer;