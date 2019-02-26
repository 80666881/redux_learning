import {createStore} from 'redux'
import reducer from './Reducer'

let initState = {
  'First': 0,
  'Second': 13,
  'Third': 20
}
let store = createStore(reducer,initState)

export default store