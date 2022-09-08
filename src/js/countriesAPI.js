import Notiflix from 'notiflix';

const BACE_URL = 'https://restcountries.com/v3.1/name/';

export function fetchCountries(name) {
  return fetch(
    `${BACE_URL}${name}?fields=name,capital,population,flags,languages`
  )
    .then(data => {
      if (!data.ok) {
        throw new Error();
      }
      return data.json();
    })
    .catch(err => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
