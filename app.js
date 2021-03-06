let xlabels = [];
let ytemps = [];
chartit();
async function chartit(){
  await getdata();
let ctx = document.getElementById('chart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: xlabels,
        datasets: [{
            label: 'global average temperatures',
            data: ytemps,
            fill:false,
            backgroundColor:
                'rgba(255, 99, 132, 0.2)',


            borderColor:
              'rgba(255, 99, 132, 1)',


             borderWidth: 1
         }]
     },


});
};


async function getdata(){
  let response = await fetch("ZonAnn.Ts+dSST.csv");
  let data = await response.text();
  console.log(data);
  let rows = data.split('\n').slice(1);
  console.log(rows);
  rows.forEach(it => {
    let row = it.split(",");
    let year = row[0];
    xlabels.push(year);
    let temp = row[1];
    ytemps.push(parseFloat(temp) + 14);
    console.log(year,temp);
  });
};
