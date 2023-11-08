import {Country} from '../domain/country.js';
import {CountryList} from '../domain/countrylist.js';

const btnAdd = document.getElementById('btn-add');
const inpName = document.getElementById('inp-name');
const inpCapital = document.getElementById('inp-capital');
const inpFoto = document.getElementById('inp-image');
let foto = null;

const mainCountryList = new CountryList();

inpFoto.addEventListener('change', (e) => {
  uploadImage(e);
});

btnAdd.addEventListener('click', () => {
  const newCountry = new Country(inpName.value);
  // eslint-disable-next-line max-len
  const countriesErrorContainer = document.getElementById('add-countries-error');
  const countriesError = document.getElementById('add-countries-error-msg');

  newCountry.setCapital(inpCapital.value);
  newCountry.setFoto(foto);
  try {
    mainCountryList.add(newCountry);
    clearInputs();
    countriesErrorContainer.classList.add('d-none');
    loadCountryList(newCountry);
  } catch (error) {
    countriesErrorContainer.classList.remove('d-none');
    countriesError.innerText = error;
  }
});

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};

const uploadImage = async (event) => {
  const file = event.target.files[0];
  const base64 = await convertBase64(file);
  foto = base64;
};

function clearInputs() {
  inpName.value = '';
  inpCapital.value = '';
  inpFoto.value = '';
}

function loadCountryList(newCountry) {
  const countriesList = document.getElementById('countries-list');
  const countriesContainer = document.getElementById('countries');
  const emptyList = document.getElementById('empty-list');

  emptyList.classList.add('d-none');
  countriesContainer.classList.remove('d-none');
  const li = document.createElement('li');
  li.classList.add('list-group-item');
  li.innerText = newCountry.toString();
  countriesList.appendChild(li);
  const foto = document.createElement('img');
  foto.src = newCountry.getFoto();
  foto.style.width = '150px';
  countriesList.appendChild(foto);
}

inpCapital.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    btnAdd.click();
  }
});
