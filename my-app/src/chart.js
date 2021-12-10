import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Chart = ( { data, width } ) => {
    var chart;

    if(width < 350){
        chart =
        <BarChart
            width={width}
            height={width/2}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" hide={true}/>
            <YAxis hide={true}/>
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey="democrat" stackId="a" fill="#377eb8" />
            <Bar dataKey="republican" stackId="a" fill="#e41a1c" />
            <Bar dataKey="other" stackId="a" fill="#e0cf1a" />
        </BarChart>
    }
    else if(width < 415){
        chart =
        <BarChart
            width={width}
            height={width/2}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="name"
                hide={true}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="democrat" stackId="a" fill="#377eb8" />
            <Bar dataKey="republican" stackId="a" fill="#e41a1c" />
            <Bar dataKey="other" stackId="a" fill="#e0cf1a" />
        </BarChart>
    }
    else if(width <= 566){
        chart =
        <BarChart
            width={width}
            height={width/2}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="name"
                angle={-90}
                interval={0}
                tickMargin={20} //TODO can I make mirror={true} work to display the ticks inside?
                height={50}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="democrat" stackId="a" fill="#377eb8" />
            <Bar dataKey="republican" stackId="a" fill="#e41a1c" />
            <Bar dataKey="other" stackId="a" fill="#e0cf1a" />
        </BarChart>
    }
    else{
        chart =
        <BarChart
            width={width}
            height={width/2}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="democrat" stackId="a" fill="#377eb8" />
            <Bar dataKey="republican" stackId="a" fill="#e41a1c" />
            <Bar dataKey="other" stackId="a" fill="#e0cf1a" />
        </BarChart>
    }
    return(chart);
};
export default Chart;