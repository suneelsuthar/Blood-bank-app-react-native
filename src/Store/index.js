import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Allreducer from './Reducer'

export default createStore(Allreducer,applyMiddleware(thunk))