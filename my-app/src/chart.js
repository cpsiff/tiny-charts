import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList, Customized } from 'recharts';
const Chart = ( { data, width, type } ) => {
    var chart;
    if(type === "interval"){
        if (width < 230){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
                barCategoryGap={-1}
                >
                <XAxis
                    dataKey="name"
                    tick={false}
                    height={0}
                />
                <YAxis
                    tickFormatter={toMillions}
                    tick={false}
                    width={1}
                />
                <Tooltip />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }

        else if (width < 330){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 5,
                    right: 5,
                    left: 0,
                    bottom: 0,
                }}
                barCategoryGap={-1}
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis
                    dataKey="name"
                    tickFormatter={shortenYear}
                    interval={9}
                    label={{
                        value: 'Year',
                        position: 'bottom',
                        offset: -18
                    }}
                />
                <YAxis 
                    label={{
                        value: 'Votes',
                        angle: -90,
                        position: 'outsideLeft'
                    }}
                    tickFormatter={toMillions}
                    tick={false}
                    width={20}
                />
                <Tooltip />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }

        else if (width < 420){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 14,
                    right: 5,
                    left: 0,
                    bottom: 5,
                }}
                barCategoryGap={2}
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                <XAxis
                    dataKey="name"
                    tickFormatter={shortenYear}
                    interval={9}
                    label={{
                        value: 'Year',
                        position: 'bottom',
                        offset: -18
                    }}
                />
                <YAxis 
                    label={{
                        value: 'Votes',
                        angle: -90,
                        position: 'outsideLeft'
                    }}
                    tickFormatter={toMillions}
                    interval={3}
                    width={50}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }
        else if (width < 520){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 14,
                    right: 5,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    tickFormatter={shortenYear}

                />
                <YAxis 
                    label={{
                        value: 'Votes',
                        angle: -90,
                        position: 'left',
                        offset: 0
                    }}
                    tickFormatter={toMillions}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }
        else if (width < 580){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 5,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    tickFormatter={shortenYear}
                    label={{
                        value: 'Year',
                        position: 'bottom',
                        offset: -20
                    }}
                    height={50}
                />
                <YAxis 
                    label={{
                        value: 'Votes',
                        angle: -90,
                        position: 'left',
                        offset: 0
                    }}
                    tickFormatter={toMillions}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }
        else if (width < 750){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 5,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    label={{
                        value: 'Year',
                        position: 'bottom',
                        offset: -20
                    }}
                    height={50}
                />
                <YAxis 
                    label={{
                        value: 'Votes',
                        angle: -90,
                        position: 'left',
                        offset: 0
                    }}
                    tickFormatter={toMillions}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }
        else{
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 5,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    label={{
                        value: 'Year',
                        position: 'bottom',
                        offset: -20
                    }}
                    height={50}
                />
                <YAxis 
                    label={{
                        value: 'Votes',
                        angle: -90,
                        position: 'left',
                        offset: 0
                    }}
                    tickFormatter={toMillions}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                    <LabelList dataKey="democrat" position="insideMiddle" formatter={toMillions}/>
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                    <LabelList dataKey="republican" position="insideMiddle" formatter={toMillions}/>
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                    <LabelList dataKey="other" position="top" formatter={toMillions}/>
                </Bar>
            </BarChart>
        }
    }
    else if(type === "categorical"){
        if(false){
            
        }
        else if (width < 185){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 5,
                    right: 5,
                    left: 5,
                    bottom: 5,
                }}
                layout="vertical"
                >
                <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                <YAxis
                    type="category"
                    dataKey="name"
                    width={1}
                    tick={false}
                />
                <XAxis
                    type="number"
                    tickFormatter={toMillions}
                    height={1}
                    tick={false}
                    interval={3}
                />
                <Tooltip />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }

        else if (width < 270){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: 0,
                    bottom: 5,
                }}
                layout="vertical"
                >
                <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                <YAxis
                    type="category"
                    dataKey="name"
                    width={30}
                    tick={false}
                    label={{
                        value: 'State',
                        angle: -90,
                        position: 'outsideLeft',
                        offset: 0
                    }}
                />
                <XAxis
                    type="number"
                    tickFormatter={toMillions}
                    height={30}
                    label={{
                        value: 'Votes',
                        angle: 0,
                        position: 'bottom',
                        offset: -20
                    }}
                    interval={3}
                />
                <Tooltip />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }
        else if (width < 350){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    left: 20,
                    bottom: 5,
                }}
                layout="vertical"
                >
                <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                <YAxis
                    type="category"
                    dataKey="name"
                    width={85}
                    interval={0}
                />
                <XAxis
                    type="number"
                    tickFormatter={toMillions}
                    height={30}
                    label={{
                        value: 'Votes',
                        angle: 0,
                        position: 'bottom',
                        offset: -20
                    }}
                    interval={3}
                />
                <Tooltip />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }

        else if (width < 395){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 20,
                    bottom: 5,
                }}
                layout="vertical"
                >
                <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                <YAxis
                    type="category"
                    dataKey="name"
                    label={{
                        value: 'State',
                        angle: -90,
                        position: 'left',
                        offset: 8
                    }}
                    width={110}
                    interval={0}
                />
                <XAxis
                    type="number"
                    tickFormatter={toMillions}
                    height={30}
                    label={{
                        value: 'Votes',
                        angle: 0,
                        position: 'bottom',
                        offset: -20
                    }}
                    interval={3}
                />
                <Tooltip />
                <Legend 
                    layout="vertical"
                    verticalAlign="top"
                    align="right"
                    margin={{
                        left: 100, //TODO doesn't work :(
                    }}
                />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }

        else if (width < 426){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 20,
                    bottom: 5,
                }}
                layout="vertical"
                >
                <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                <YAxis
                    type="category"
                    dataKey="name"
                    label={{
                        value: 'State',
                        angle: -90,
                        position: 'left',
                        offset: 8
                    }}
                    width={110}
                />
                <XAxis
                    type="number"
                    tickFormatter={toMillions}
                    height={30}
                    label={{
                        value: 'Votes',
                        angle: 0,
                        position: 'bottom',
                        offset: -20
                    }}
                    interval={3}
                />
                <Tooltip />
                <Legend 
                    layout="vertical"
                    verticalAlign="top"
                    align="right"
                    margin={{
                        left: 100, //TODO doesn't work :(
                    }}
                />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }

        else if (width < 695){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 0,
                    left: 20,
                    bottom: 5,
                }}
                layout="vertical"
                >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis
                    type="category"
                    dataKey="name"
                    label={{
                        value: 'State',
                        angle: -90,
                        position: 'left',
                        offset: 8
                    }}
                    width={110}
                />
                <XAxis
                    type="number"
                    tickFormatter={toMillions}
                    height={50}
                    label={{
                        value: 'Votes',
                        angle: 0,
                        position: 'bottom',
                        offset: -20
                    }}
                />
                <Tooltip />
                <Legend 
                    layout="vertical"
                    verticalAlign="top"
                    align="right"
                    margin={{
                        left: 100, //TODO doesn't work :(
                    }}
                />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }
        else if (width < 750){
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 5,
                    left: 20,
                    bottom: 5,
                }}
                layout="vertical"
                >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis
                    type="category"
                    dataKey="name"
                    label={{
                        value: 'State',
                        angle: -90,
                        position: 'left',
                        offset: 8
                    }}
                    width={110}
                />
                <XAxis
                    type="number"
                    tickFormatter={toMillions}
                    height={50}
                    label={{
                        value: 'Votes',
                        angle: 0,
                        position: 'bottom',
                        offset: -20
                    }}
                />
                <Tooltip />
                <Legend 
                    layout="vertical"
                    verticalAlign="top"
                    align="right"
                    margin={{
                        left: 100, //TODO doesn't work :(
                    }}
                />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                    <LabelList dataKey="democrat" position="insideMiddle" formatter={toMillions}/>
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                    <LabelList dataKey="republican" position="insideMiddle" formatter={toMillions}/>
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                </Bar>
            </BarChart>
        }
        else{
            chart =
            <BarChart id="chart"
                width={width}
                height={width/2}
                data={data}
                margin={{
                    top: 20,
                    right: 5,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey="name"
                    label={{
                        value: 'Year',
                        position: 'bottom',
                        offset: -20
                    }}
                    height={50}
                />
                <YAxis 
                    label={{
                        value: 'Votes',
                        angle: -90,
                        position: 'left',
                        offset: 0
                    }}
                    tickFormatter={toMillions}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="democrat" stackId="a" fill="#377eb8" name="Democrat">
                    <LabelList dataKey="democrat" position="insideMiddle" formatter={toMillions}/>
                </Bar>
                <Bar dataKey="republican" stackId="a" fill="#e41a1c" name="Republican">
                    <LabelList dataKey="republican" position="insideMiddle" formatter={toMillions}/>
                </Bar>
                <Bar dataKey="other" stackId="a" fill="#e0cf1a" name="Other">
                    <LabelList dataKey="other" position="top" formatter={toMillions}/>
                </Bar>
            </BarChart>
        }
    }
    return(chart);
};

function toMillions(val){
    return((Math.round(val/10000)/100).toString() + "M");
}

function shortenYear(val){
    return("'" + val.toString().slice(-2));
}

export default Chart;