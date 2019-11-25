import { combineReducers } from 'redux';
import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { customers } from './customers.reducer';
import { alert } from './alert.reducer';
import { content, nav } from './content.reducer'


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  customers,
  alert,
  content,
  nav
});

export default rootReducer;