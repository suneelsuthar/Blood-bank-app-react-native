import {combineReducers} from 'redux'
import Authreducer from './Auth_reducer'
import Mainreducer from './Main_reducer'


export default combineReducers({
    Authreducer,
    Mainreducer
})