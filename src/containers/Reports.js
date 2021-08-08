import { useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { useVerify } from '../hooks';
import { showExpenses } from '../actions';
import Header from '../components/Header';
import FlashMessage from '../components/FlashMessage';

const Reports = () => {
  const {
    id, isLoading, error, dispatch,
  } = useVerify();

  useEffect(() => {
    if (id !== undefined) dispatch(showExpenses(id));
  }, []);

  const lists = useSelector((state) => state.lists);
  const expenditure = useSelector((state) => state.reports);

  const totalExpenses = useMemo(() => {
    if (expenditure.length < 1) return 0;
    return expenditure
      .reduce((total, expense) => total + expense.amount, 0).toLocaleString();
  }, [expenditure]);

  const listName = useCallback((id) => lists.find((list) => list.id === id).name, [lists]);

  return (
    <>
      <Header>
        <span className="theme">Reports</span>
      </Header>
      <div className="wrap-page">
        {error !== null && (
          <FlashMessage>{ error }</FlashMessage>
        )}
        <section className="overview-header">
          <h3>Overview of expenditure</h3>
          <hr />
          <div className="mx-0">
            <p>
              <span>You&apos;ve spent</span>
              <br />
              <span className="display-3">
                $
                {totalExpenses}
              </span>
              <br />
              <span>so far</span>
            </p>
          </div>
        </section>
        <div className="mt-3 bg-white">
          {isLoading ? (
            <p className="page-loading"><FaSpinner /></p>
          ) : (
            <table className="table table-hover bg-light">
              <thead className="color-mix">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Title</th>
                  <th scope="col">List</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                {expenditure[0]?.id ? expenditure.map((expense) => (
                  <tr key={expense.id}>
                    <td>{expense.date}</td>
                    <td>{expense.title}</td>
                    <td>{listName(expense.list_id)}</td>
                    <td className="fw-bold">{`$${expense.amount}`}</td>
                  </tr>
                )) : (
                  <tr>
                    <th scope="row">N/A</th>
                    <td colSpan="4">No record of expenses available at this time</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Reports;
