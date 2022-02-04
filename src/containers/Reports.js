import DonutLargeTwoToneIcon from '@mui/icons-material/DonutLargeTwoTone';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { isReportAvailable, getTotalExpenses } from '../selectors';
import { suggested, miscellaenous, buildChart } from '../utils';
import Header from '../components/Header';
import Progress from '../components/Progress';
import FlashMessage from '../components/FlashMessage';

export default function Reports() {
  const userSpent = useSelector(isReportAvailable);
  const { isLoading, error } = useSelector((state) => state.notifications);

  const chartContainer = useRef(null);
  const outcomes = useSelector(getTotalExpenses);

  const initChartData = () => {
    const ctx = chartContainer?.current;
    const chartType = 'doughnut';
    const labels = outcomes.map(({ name }) => name);
    const data = outcomes.map(({ total }) => total);
    const backgroundColor = labels
      .map((name) => suggested
        .find(({ label }) => name === label)?.color ?? miscellaenous);
    const config = {
      ctx, labels, data, backgroundColor, chartType,
    };
    return config;
  };

  useEffect(() => {
    if (!userSpent) return () => {};

    const chart = buildChart(initChartData());
    return () => chart.destroy();
  }, []);

  return (
    <>
      <Header>
        <span className="theme__heading">
          <DonutLargeTwoToneIcon />
        </span>
      </Header>
      {error && <FlashMessage message={error} />}
      <div className="wrap-page">
        <section className="outcome">
          <h3>Overview of expenses</h3>
          {userSpent ? (
            <div>
              {isLoading ? <Progress /> : <canvas ref={chartContainer} width={500} height={500} />}
            </div>
          ) : <p className="mt-5 text-center">No record</p>}
        </section>
      </div>
    </>
  );
}
