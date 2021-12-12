import './App.css';
import Chart from './chart';
import Slider from "./slider";
import ReactDOM from 'react-dom';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const dataInterval = [
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

const dataCategorical = [
  {
      "name": "Alabama",
      "democrat": 729547,
      "republican": 1318255,
      "other": 75570
  },
  {
      "name": "Colorado",
      "democrat": 1338870,
      "republican": 1202484,
      "other": 238866
  },
  {
      "name": "Missouri",
      "democrat": 1071068,
      "republican": 1594511,
      "other": 143026
  },
  {
      "name": "New Mexico",
      "democrat": 385234,
      "republican": 319667,
      "other": 93418
  },
  {
      "name": "Virginia",
      "democrat": 1981473,
      "republican": 1769443,
      "other": 231836
  },
  {
      "name": "Wisconsin",
      "democrat": 1382536,
      "republican": 1405284,
      "other": 188330
  }
]
var sliderVal;
var typeToggle = "interval";
var data = dataInterval;

function handleToggle(event, newToggleVal){
  typeToggle = newToggleVal;
  if(typeToggle === "interval"){
    data = dataInterval;
  }
  else{
    data = dataCategorical;
  }
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
  ReactDOM.render(
    sliderVal.toString()+ " x " + (Math.floor(sliderVal/2)).toString() + "px",
    document.getElementById('width')
  )
  if(typeToggle === "interval"){
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
        <ToggleButton value="categorical">categorical (state) x axis</ToggleButton>
        <ToggleButton value="interval">interval (year) x axis</ToggleButton>
      </ToggleButtonGroup>
      <Slider 
        onChange={onSliderChange}
      />
      <div id='title'>
      
      </div>
      <div id='chart1div'>
      <Chart
        data={data}
        width={800}
        type={typeToggle}
      />
      </div>
      <div id='width'>
        800 x 400px
      </div>
    </div>
  );
}

export default App;
