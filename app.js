// https://www.omnicalculator.com/conversion/pint-to-pound

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const weightRadio = document.getElementById('weightRadio');
const volumeRadio = document.getElementById('volumeRadio');

let weight;
let volume = v; 

// labels of the inpust
const variable = document.getElementById('variable');

weightRadio.addEventListener('click', function() {
  variable.textContent = 'volume';
  volume = v;
  result.textContent = '';
});

volumeRadio.addEventListener('click', function() {
  variable.textContent = 'weight';
  weight = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(weightRadio.checked)
    result.textContent = `weight = ${computeweight().toFixed(5)}`;

  else if(volumeRadio.checked)
    result.textContent = `volume = ${computevolume().toFixed(5)}`;
})

// calculation

function computeweight() {
  return Number(volume.value) * 1.0432;
}

function computevolume() {
  return Number(weight.value) / 1.0432;
}