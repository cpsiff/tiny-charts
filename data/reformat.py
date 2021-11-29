"""
reformat 1976-2020-president.csv to 51 separate csv files, one for each state
each of which are in the right format for recharts to use for a stacked bar chart
"""

import pandas as pd
import json

STATE = "WI"

data = pd.read_csv("/home/carter/repos/tiny-charts/data/1976-2020-president.csv")

data = data[data['state_po'] == STATE]

output = []

for year in range(1976, 2020, 4):
    df = data[data['year'] == year]
    dem_votes = df[df['party_simplified'] == 'DEMOCRAT']['candidatevotes'].values[0]
    rep_votes = df[df['party_simplified'] == 'REPUBLICAN']['candidatevotes'].values[0]
    other_votes = sum(df[(df['party_simplified'] != 'DEMOCRAT') & (df['party_simplified'] != 'REPUBLICAN')]['candidatevotes'].values)

    datapoint = {
        "name": year,
        "democrat": int(dem_votes),
        "republican": int(rep_votes),
        "other": int(other_votes)
    }

    output.append(datapoint)

with open(f"data_{STATE}.json", "w") as f:
    json.dump(output, f, indent=4)
