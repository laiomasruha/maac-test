import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import moment from 'moment';

const slice = createSlice({
    name: "bankAccounts",
    initialState: {
        list: [],
        loading: false,
        totalItems: null,
        lastFetch: null,
        modal: { openNewBankAccount: false, openEditBankAccount: false, openDeleteBankAccount: false },
        deleteId: null,
        editBankAccount: {},
        currentUser: {},
        banks: []
    },
    reducers: {
        setCurrentUser: (bankAccounts, action) => {
            bankAccounts.currentUser = action.payload.user
        },
        bankAccountsRequested: (bankAccounts) => {
            bankAccounts.loading = true;
        },
        bankAccountsRequestedFailed: (bankAccounts) => {
            bankAccounts.loading = false;
        },
        bankAccountsReceived: (bankAccounts, action) => {
            bankAccounts.list = action.payload['hydra:member'];
            bankAccounts.totalItems = action.payload['hydra:totalItems'];
            bankAccounts.lastFetch = Date.now();
            bankAccounts.loading = false;
        },
        bankAccountAdded: (bankAccounts, action) => {
            bankAccounts.list.push(action.payload);
            bankAccounts.loading = false;
            bankAccounts.modal.openNewBankAccount = false;
        },
        bankAccountRemoved: (bankAccounts, action) => {
            bankAccounts.list = bankAccounts.list.filter(bankAccount => bankAccount.id !== bankAccounts.deleteId);
            bankAccounts.loading = false;
            bankAccounts.deleteId = null;
            bankAccounts.modal.openDeleteBankAccount = false;
        },
        bankAccountUpdated: (bankAccounts, action) => {
            bankAccounts.list = bankAccounts.list.map(bankAccount => bankAccount.id === action.payload.id ?
                {
                    ...bankAccount,
                    ...action.payload
                } : bankAccount);
            bankAccounts.loading = false;
            bankAccounts.modal.openEditBankAccount = false;
        },
        openNewBankAccountModal: (bankAccounts) => {
            bankAccounts.modal.openNewBankAccount = true;
        },
        closeNewBankAccountModal: (bankAccounts) => {
            bankAccounts.modal.openNewBankAccount = false;
        },
        openEditBankAccountModal: (bankAccounts, action) => {
            bankAccounts.editBankAccount = action.payload.bankAccount;
            bankAccounts.modal.openEditBankAccount = true;
        },
        updateEditBankAccountField: (bankAccounts, action) => {
            bankAccounts.editBankAccount = { ...bankAccounts.editBankAccount, ...action.payload };
            bankAccounts.modal.openEditBankAccount = true;
        },
        closeEditBankAccountModal: (bankAccounts) => {
            bankAccounts.modal.openEditBankAccount = false;
        },
        openDeleteBankAccountModal: (bankAccounts, action) => {
            bankAccounts.deleteId = action.payload.id;
            bankAccounts.modal.openDeleteBankAccount = true;
        },
        closeDeleteBankAccountModal: (bankAccounts) => {
            bankAccounts.modal.openDeleteBankAccount = false;
        },
        banksReceived: (bankAccounts, action) => {
            bankAccounts.banks = action.payload['hydra:member'];
        },
    }
});

export const { setCurrentUser, bankAccountsRequested, bankAccountsRequestedFailed, bankAccountsReceived, bankAccountAdded, bankAccountRemoved, bankAccountUpdated, openNewBankAccountModal, closeNewBankAccountModal, openDeleteBankAccountModal, closeDeleteBankAccountModal, openEditBankAccountModal, updateEditBankAccountField, closeEditBankAccountModal, banksReceived } = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/bank_accounts";

export const loadBankAccounts = () => (dispatch, getState) => {
    const { currentUser } = getState().entities.bankAccounts;
    const customUrl = currentUser["@id"] + url

    if (customUrl !== undefined || customUrl !== "")
        dispatch(apiCallBegan({
            url: customUrl,
            onStart: bankAccountsRequested.type,
            onSuccess: bankAccountsReceived.type,
            onError: bankAccountsRequestedFailed.type,
        }));
}

export const addBankAccount = bankAccount => apiCallBegan({
    url,
    method: "post",
    data: bankAccount,
    onStart: bankAccountsRequested.type,
    onSuccess: bankAccountAdded.type,
    onError: bankAccountsRequestedFailed.type,
});

export const removeBankAccount = payload => apiCallBegan({
    url: `${url}/${payload.id}`,
    method: "delete",
    onStart: bankAccountsRequested.type,
    onSuccess: bankAccountRemoved.type,
    onError: bankAccountsRequestedFailed.type,
});

export const updateBankAccount = bankAccount => apiCallBegan({
    url: `${url}/${bankAccount.id}`,
    method: "put",
    data: bankAccount,
    onStart: bankAccountsRequested.type,
    onSuccess: bankAccountUpdated.type,
    onError: bankAccountsRequestedFailed.type,
});

export const loadBanks = () => (dispatch, getState) => {
    const { lastFetch } = getState().entities.bankAccounts;

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

    if (diffInMinutes < 10) return;

    dispatch(apiCallBegan({
        url: "/banks",
        onSuccess: banksReceived.type,
    }));
}