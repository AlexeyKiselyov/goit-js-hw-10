import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/countriesAPI';
import { countriesListMarkup } from './js/countriesMarkup';
import { countriesInfoMarkup } from './js/countriesMarkup';

const DEBOUNCE_DELAY = 300;
const refCountryList = document.querySelector('.country-list');
const refCountryInfo = document.querySelector('.country-info');
const refInput = document.querySelector('#search-box');

refInput.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

Notiflix.Notify.info('Please enter a name of country.');

function onInputSearch(e) {
  let name = '';
  name = e.target.value.trim();
  if (!name) {
    infoReset();
    return Notiflix.Notify.info('Please enter a name of country.');
  }
  fetchCountries(name)
    .then(resp => {
      if (resp.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        infoReset();
      }
      if (resp.length <= 10 && resp.length > 2) {
        refCountryList.innerHTML = countriesListMarkup(resp);
        refCountryInfo.innerHTML = '';
      }
      if (resp.length === 1) {
        refCountryInfo.innerHTML = countriesInfoMarkup(resp);
        refCountryList.innerHTML = '';
      }
    })
    .catch(err => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}

function infoReset() {
  refCountryInfo.innerHTML = '';
  refCountryList.innerHTML = '';
}
