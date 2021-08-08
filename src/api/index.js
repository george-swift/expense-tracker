import axios from 'axios';
import { API_BASE_URL } from '../constants';

const client = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export const createAccount = (user) => client.post('users', user);

export const signIn = (user) => client.post('login', user);

export const userDetails = (id) => client.get(`users/${id}`);

export const editUserDetails = (id, params) => client.put(`users/${id}`, params);

export const signOut = () => client.delete('logout');

export const fetchLists = (id) => client.get(`users/${id}/lists`);

export const createList = (id, params) => client.post(`users/${id}/lists`, params);

export const updateList = (id, params) => client.put(`/lists/${id}`, params);

export const deleteList = (id) => client.delete(`/lists/${id}`);

export const fetchExpenses = (id) => client.get(`lists/${id}/expenses`);

export const createExpense = (id, params) => client.post(`lists/${id}/expenses`, params);

export const updateExpense = (id, params) => client.put(`/expenses/${id}`, params);

export const deleteExpense = (id) => client.delete(`/expenses/${id}`);
