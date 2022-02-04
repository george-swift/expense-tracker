import Chart from 'chart.js/auto';

export default function buildChart(config) {
  const {
    ctx, chartType, labels, data, radius, backgroundColor,
  } = config;

  return new Chart(ctx, {
    type: chartType,
    radius,
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          hoverOffset: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Total expenditure. Amount in USD',
        },
      },
    },
  });
}
