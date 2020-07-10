import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';
import highchartsConfig from './HighchartsConfig';
import ReactHighcharts from 'react-highcharts';
import { Tile } from '../Shared/Tile';
import highchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';

ReactHighcharts.Highcharts.setOptions(highchartsTheme);

export default function () {
  const { historical, currentFavorite, changeChartSelect } = useContext(
    AppContext
  );

  return (
    <Tile>
      <ChartSelect
        defaultValue={'months'}
        onChange={(e) => changeChartSelect(e.target.value)}
      >
        <option value='days'>Days</option>
        <option value='weeks'>Weeks</option>
        <option value='months'>Months</option>
      </ChartSelect>
      {historical ? (
        <ReactHighcharts
          config={highchartsConfig(historical, currentFavorite)}
        />
      ) : (
        <div>Loading Historical Data...</div>
      )}
    </Tile>
  );
}
