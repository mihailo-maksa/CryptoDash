export default function (historical, currentFavorite) {
  return {
    title: {
      text: `${currentFavorite} Price Chart`,
    },
    yAxis: {
      title: {
        text: 'Price in USD',
      },
    },

    xAxis: {
      type: 'datetime',
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointStart: 2010,
      },
    },

    series: historical,

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
  };
}
