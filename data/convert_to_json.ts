import * as fs from 'fs';

const data = fs.readFileSync('./data/countryInfo.txt', 'utf8');
const lines = data.split("\n");
const headers = lines[0].split("\t");

type Item = {
    [key: string]: string
}

const lineToItem = (line: string): any => {
    const tokens = line.split("\t");
    let item: Item = {};
    for (let i = 0; i < headers.length; ++i) {
        item[headers[i]] = tokens[i] || "Not available";
    }
    return item;
};

let countries = [];
for (let line of lines.splice(1)) {
    countries.push(lineToItem(line));
}

const json = JSON.stringify(countries);
fs.writeFileSync('./data/countryInfo.json', json);
console.log("Convertion to JSON is complete.");
