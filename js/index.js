const get = id => document.getElementById(id);

const user = get('user');
const userBlock = get('user__block');

const realTime = get('realtime-head');
const realTimeItem = get('realtime-item');

const nav = get('nav');
const openNav = get('open-nav');
const closeNav = get('close-nav');

// User Toggle
user.addEventListener('click', function () {
    userBlock.classList.toggle('user__block--open');
});

// Menu Item Toggle
realTime.addEventListener('click', function () {
    realTimeItem.classList.toggle('item--open');
});

// Navigation Toggle
openNav.addEventListener('click', function () {
    nav.classList.add('sidebar__nav--open');
});
closeNav.addEventListener('click', function () {
    nav.classList.remove('sidebar__nav--open');
});




/* Chart.JS */
// Fake Data - Total 46946
let dataset = [
    { label: "Mobile", count: 18778, color: "#72bbe1" },
    { label: "Desktop", count: 28168, color: "#3ea6dd" }
];

const dataTotal = dataset.reduce((acc, data) => (acc += data.count), 0);
const mobileCalculate = (dataset[0].count / dataTotal) * 100;
const desktopCalculate = (dataset[1].count / dataTotal) * 100;
const mobilePercentage = `${mobileCalculate.toFixed(1)}%`;
const desktopPercentage = `${desktopCalculate.toFixed(1)}%`;

// Top Counter
const total = get("counterTotal");
total.innerHTML = `${dataTotal}`;
// Percentage Mobile
const percentageMobile = get("percentage_mobile");
percentageMobile.innerHTML = mobilePercentage;
// Percentage Desktop
const percentageDesktop = get("percentage_desktop");
percentageDesktop.innerHTML = desktopPercentage;
// Legend Mobile
const legendCircleMobile = get("circle__mobile");
legendCircleMobile.style.backgroundColor = dataset[0].color;
// Legend Desktop
const legendCircleDesktop = get("circle__desktop");
legendCircleDesktop.style.backgroundColor = dataset[1].color;


// Chart JS Initialize
var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: [dataset[0].label.toUpperCase(), dataset[1].label.toUpperCase()],
        datasets: [
            {
                data: [dataset[0].count, dataset[1].count],
                backgroundColor: [dataset[0].color, dataset[1].color],
                borderWidth: 1
            }
        ]
    },
    options: {
        tooltips: {
            callbacks: {
                label: function (tooltipItem, data) {
                    let allData = data.datasets[tooltipItem.datasetIndex].data;
                    let sumData = allData.reduce((memo, data) => (memo += data), 0);

                    let tooltipLabel = data.labels[tooltipItem.index];
                    let tooltipData = allData[tooltipItem.index];
                    let tooltipPercentageCalc = (tooltipData / sumData) * 100;
                    let tooltipPercentage = `${tooltipPercentageCalc.toFixed(1)}%`;

                    return `${tooltipLabel} : ${tooltipData} (${tooltipPercentage})`;
                }
            }
        },
        legend: {
            display: false
        }
    }
});