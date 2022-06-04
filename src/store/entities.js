import { combineReducers } from 'redux';
import usersReducer from './users';
import bankAccountsReducer from './bankAccounts';

export default combineReducers({
    users: usersReducer,
    bankAccounts: bankAccountsReducer
});