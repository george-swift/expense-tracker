import axios from 'axios';

export const baseURL = 'https://api-expense-tracker.herokuapp.com/';

const client = axios.create({ baseURL, withCredentials: true });

client.interceptors.request.use((config) => {
  const storage = localStorage.getItem('exp_tracker');
  const { token } = storage ? JSON.parse(storage) : { token: '' };
  // eslint-disable-next-line no-param-reassign
  config.headers.common.Authorization = `Bearer ${token}`;
  return config;
});

export const createAccount = (user) => client.post('users', user);

export const signIn = (user) => client.post('sessions', user);

export const userDetails = (id) => client.get(`users/${id}`);

export const editUserDetails = (id, params) => client.put(`users/${id}`, params);

export const signOut = () => client.delete('sessions');

export const fetchLists = (id) => client.get(`users/${id}/lists`);

export const createList = (id, params) => client.post(`users/${id}/lists`, params);

export const updateList = (id, params) => client.put(`/lists/${id}`, params);

export const deleteList = (id) => client.delete(`/lists/${id}`);

export const fetchExpenses = (id) => client.get(`lists/${id}/expenses`);

export const createExpense = (id, params) => client.post(`lists/${id}/expenses`, params);

export const updateExpense = (id, params) => client.put(`/expenses/${id}`, params);

export const deleteExpense = (id) => client.delete(`/expenses/${id}`);
