import { createSelector } from 'reselect';
import { suggested as options } from '../utils';

export const getUser = (state) => state.user;

export const getAuthedUser = (state) => {
  const { user } = getUser(state);
  const authedUserID = user?.id ?? '';
  const [authedUserName] = user?.username.split(/\s/) ?? '';
  return { authedUserID, authedUserName };
};

export const getAvailableOptions = createSelector(
  [(state) => state.lists],
  (lists) => {
    const currentLists = lists?.map((list) => list.name);
    const suggested = options.filter(({ label }) => !currentLists?.includes(label));
    return { lists, suggested };
  },
);

export const getTotalExpenses = createSelector(
  [(state) => state.lists, (state) => state.reports],
  (lists, reports) => {
    const categories = lists?.reduce((map, { id, name }) => ({
      ...map, [id]: { name, total: 0 },
    }), {}) ?? {};

    reports?.forEach(({ list_id: id, amount }) => {
      if (categories[id]) categories[id].total += amount;
    });

    return Object.values(categories);
  },
);

export const isReportAvailable = (state) => state.lists.length;
