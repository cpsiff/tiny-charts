import './App.css';
import Chart from './chart';
import Slider from "./slider";
import ReactDOM from 'react-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const data = [
  {
      "name": 1976,
      "democrat": 1040232,
      "republican": 1004987,
      "other": 56117
  },
  {
      "name": 1980,
      "democrat": 981584,
      "republican": 1088845,
      "other": 202792
  },
  {
      "name": 1984,
      "democrat": 995740,
      "republican": 1198584,
      "other": 17365
  },
  {
      "name": 1988,
      "democrat": 1126794,
      "republican": 1047499,
      "other": 17315
  },
  {
      "name": 1992,
      "democrat": 1041066,
      "republican": 930855,
      "other": 559143
  },
  {
      "name": 1996,
      "democrat": 1071971,
      "republican": 845029,
      "other": 279169
  },
  {
      "name": 2000,
      "democrat": 1242987,
      "republican": 1237279,
      "other": 118341
  },
  {
      "name": 2004,
      "democrat": 1489504,
      "republican": 1478120,
      "other": 29383
  },
  {
      "name": 2008,
      "democrat": 1677211,
      "republican": 1262393,
      "other": 43813
  },
  {
      "name": 2012,
      "democrat": 1620985,
      "republican": 1410966,
      "other": 39483
  },
  {
      "name": 2016,
      "democrat": 1382536,
      "republican": 1405284,
      "other": 188330
  }
];

var sliderVal;
var typeToggle = "ordinal";

function handleToggle(event, newToggleVal){
  typeToggle = newToggleVal;
  onSliderChange(sliderVal);
}

function onSliderChange(value){
  console.log("slider changed " + value);
  sliderVal = value;
  ReactDOM.render(
    <Chart
      data={data}
      width={value}
      type={typeToggle}
    />,
    document.getElementById('chart1div')
  )
  if(typeToggle === "ordinal"){
    ReactDOM.render(
      "Wisconsin - Partisan Vote Count in Presidental Elections, 1976-2016",
      document.getElementById('title')
    )
  }
  else{
    ReactDOM.render(
      "Partisan Vote Count in 2016 Presidental Election - Selected States",
      document.getElementById('title')
    )
  }
}

function App() {
  return (
    <div>
      <ToggleButtonGroup id="toggles"
        exclusive
        onChange={handleToggle}
      >
        <ToggleButton value="categorical">categorical x axis</ToggleButton>
        <ToggleButton value="ordinal">ordinal x axis</ToggleButton>
      </ToggleButtonGroup>
      <Slider 
        onChange={onSliderChange}
      />
      <div id='title'>
      
      </div>
      <div id='chart1div'>
      </div>
    </div>
  );
}

export default App;
