import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/countriesAPI';
import { countriesListMarkup } from './js/countriesMarkup';

const DEBOUNCE_DELAY = 300;
const refCountryList = document.querySelector('.country-list');

fetchCountries('ukr').then(resp => {
  console.log(resp);
  refCountryList.innerHTML = countriesListMarkup(resp);
});
