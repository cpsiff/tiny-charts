"""
reformat 1976-2020-president.csv to 51 separate csv files, one for each state
each of which are in the right format for recharts to use for a stacked bar chart
"""

import pandas as pd
import json

"""
CREATE DATA FOR INTERVAL X AXIS
"""
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

"""
CREATE DATA FOR CATEGORICAL X AXIS
"""
STATES = ['AL', 'CO', 'MO', 'NM', 'VA', 'WI']

data = pd.read_csv("/home/carter/repos/tiny-charts/data/1976-2020-president.csv")

data = data[data['year'] == 2016]

output = []
for state in STATES:
    df = data[data['state_po'] == state]
    dem_votes = df[df['party_simplified'] == 'DEMOCRAT']['candidatevotes'].values[0]
    rep_votes = df[df['party_simplified'] == 'REPUBLICAN']['candidatevotes'].values[0]
    other_votes = sum(df[(df['party_simplified'] != 'DEMOCRAT') & (df['party_simplified'] != 'REPUBLICAN')]['candidatevotes'].values)

    datapoint = {
        "name": state,
        "democrat": int(dem_votes),
        "republican": int(rep_votes),
        "other": int(other_votes)
    }

    output.append(datapoint)

with open(f"data_categorical.json", "w") as f:
    json.dump(output, f, indent=4)