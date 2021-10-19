import Chart from 'chart.js/auto';

export default function buildChart(config) {
  const {
    ctx, chartType, labels, data, radius, backgroundColor,
  } = config;

  return new Chart(ctx, {
    type: chartType,
    radius,
    responsive: true,
    maintainAspectRatio: false,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          hoverOffset: 4,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Distribution of expenses. Amount in USD',
        },
      },
    },
  });
}
