export const getUser = (state) => state.user;

export const getLists = (state) => (state.lists.length ? state.lists : null);

export const getExpenses = (state) => (state.expenses.length ? state.expenses : null);

export const getNotifications = (state) => state.notifications;
