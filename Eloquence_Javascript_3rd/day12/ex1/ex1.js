const MOUNTAINS = [
    { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
    { name: "Everest", height: 8848, place: "Nepal" },
    { name: "Mount Fuji", height: 3776, place: "Japan" },
    { name: "Vaalserberg", height: 323, place: "Netherlands" },
    { name: "Denali", height: 6168, place: "United States" },
    { name: "Popocatepetl", height: 5465, place: "Mexico" },
    { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

// Your code here
let table = document.getElementById('container');

function createTable(data) {
    for (let i = 0; i < data.length; i++) {
        row = ` <tr>
        <td>${data[i].name}</td>
        <td>${data[i].height}</td>
        <td>${data[i].place}</td>
        </tr>`
        table.innerHTML += row;
    }
}

console.log(createTable(MOUNTAINS));