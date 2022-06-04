import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';
import moment from 'moment';

const slice = createSlice({
    name: "users",
    initialState: {
        list: [],
        loading: false,
        totalItems: null,
        lastFetch: null,
        pagination: {},
        modal: { openNewUser: false, openEditUser: false, openDeleteUser: false },
        deleteId: null,
        editUser: {},
    },
    reducers: {
        usersRequested: (users) => {
            users.loading = true;
        },
        usersRequestedFailed: (users) => {
            users.loading = false;
        },
        usersReceived: (users, action) => {
            users.list = action.payload['hydra:member'];
            users.totalItems = action.payload['hydra:totalItems'];
            users.pagination = action.payload['hydra:view'];
            users.lastFetch = Date.now();
            users.loading = false;
        },
        userAdded: (users, action) => {
            users.list.push(action.payload);
            users.loading = false;
            users.modal.openNewUser = false;
        },
        userRemoved: (users) => {
            users.list = users.list.filter(user => user.id !== users.deleteId);
            users.loading = false;
            users.deleteId = null;
            users.modal.openDeleteUser = false;
        },
        userUpdated: (users, action) => {
            users.list = users.list.map(user => user.id === action.payload.id ?
                {
                    ...user,
                    ...action.payload
                } : user);
            users.loading = false;
            users.modal.openEditUser = false;
        },
        openNewUserModal: (users) => {
            users.modal.openNewUser = true;
        },
        closeNewUserModal: (users) => {
            users.modal.openNewUser = false;
        },
        openEditUserModal: (users, action) => {
            users.editUser = action.payload.user;
            users.modal.openEditUser = true;
        },
        updateEditUserField: (users, action) => {
            users.editUser = { ...users.editUser, ...action.payload };
            users.modal.openEditUser = true;
        },
        closeEditUserModal: (users) => {
            users.modal.openEditUser = false;
        },
        openDeleteUserModal: (users, action) => {
            users.deleteId = action.payload.id;
            users.modal.openDeleteUser = true;
        },
        closeDeleteUserModal: (users) => {
            users.deleteId = null;
            users.modal.openDeleteUser = false;
        },
    }
});

export const {
    usersRequested,
    usersRequestedFailed,
    usersReceived,
    userAdded,
    userRemoved,
    userUpdated,
    openNewUserModal,
    closeNewUserModal,
    openEditUserModal,
    updateEditUserField,
    closeEditUserModal,
    openDeleteUserModal,
    closeDeleteUserModal,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/users";

export const loadUsers = (page) => (dispatch, getState) => {
    const { lastFetch } = getState().entities.users;

    const diffInMinutes = moment().diff(moment(lastFetch), 'minutes');

    if (diffInMinutes < 10) return;
    dispatch(apiCallBegan({
        url: page ?? `${url}?page=1&itemsPerPage=5`,
        onStart: usersRequested.type,
        onSuccess: usersReceived.type,
        onError: usersRequestedFailed.type,
    }));
}

export const addUser = user => apiCallBegan({
    url,
    method: "post",
    data: user,
    onStart: usersRequested.type,
    onSuccess: userAdded.type,
    onError: usersRequestedFailed.type,
});

export const removeUser = payload => apiCallBegan({
    url: `${url}/${payload.id}`,
    method: "delete",
    onStart: usersRequested.type,
    onSuccess: userRemoved.type,
    onError: usersRequestedFailed.type,
    id: payload.id
});

export const updateUser = user => apiCallBegan({
    url: `${url}/${user.id}`,
    method: "put",
    data: user,
    onStart: usersRequested.type,
    onSuccess: userUpdated.type,
    onError: usersRequestedFailed.type,
});