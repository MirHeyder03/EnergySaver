// const container =fetch('https://lib.dia.edu.az/hackathon/municipalties/getall')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// console.log(container);
// fetch('https://lib.dia.edu.az/hackathon/cities/getall')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch('https://lib.dia.edu.az/hackathon/containers/containerdetails')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

/* ----------------------------------------------- */

// api url
async function getapi() {
  const municipalties =
    "https://lib.dia.edu.az/hackathon/containers/containerdetails";
  const response = await fetch(municipalties);
  var data2 = await response.json();
  show(data2);
}
getapi();
function show(data2) {
  console.log(data2);
  let tab = `
    <thead>
    <tr>
    <th>cityName</th>
    <th>weightOfPlastic</th>
    <th>weightOfBioPlastic</th>
    <th>municipalityName</th>
    </tr>
    </thead>
    `;
    for (let r of data2) {
      tab += `
      <tbody>
      <tr> 
      <td>${r.cityName}</td>
      <td>${r.weightOfPlastic}</td>
      <td>${r.weightOfBioPlastic}</td> 
      <td>${r.municipalityName}</td>          
      </tr>
      </tbody>`;
    }
    console.log(tab)
  document.getElementById("data2").innerHTML = tab;
}