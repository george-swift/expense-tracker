import { SHOW_EXPENDITURE_SUCCESSFUL } from '../../constants';
import reports from '../../reducers/reports';

describe('Testing the reports reducer', () => {
  const payload = [
    {
      id: 87,
      title: 'Dinner with devs',
      amount: 125,
      date: '2021-08-01',
    },
    {
      id: 22,
      title: 'Outdoor fixtures',
      amount: 75,
      date: '2021-08-04',
      notes: 'Hammock',
    },
  ];

  const fetchAction = { type: SHOW_EXPENDITURE_SUCCESSFUL, payload };

  it('should be an empty array by default', () => {
    expect(reports(undefined, [])).toStrictEqual([]);
  });

  it('should update the state of the store when data is fetched from the backend', () => {
    expect(reports(undefined, fetchAction)).toStrictEqual(
      expect.arrayContaining([...payload]),
    );
  });
});
