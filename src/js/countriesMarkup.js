export function countriesListMarkup(arr) {
  const markup = arr.reduce(
    (acc, { flags, name }) =>
      acc +
      `<li class="country-list__item">
      <img src=${flags.svg} alt="flag of the country" width="100">
      <h3>${name.official}</h3>
      </li>`,
    ''
  );
  return markup;
}

export function countriesInfoMarkup(arr) {
  const markup = arr.reduce(
    (acc, { name, capital, population, flags, languages }) => {
      return (
        acc +
        ` <div class="">
      <div class="country-info__title">
        <img src="${
          flags.svg
        }" alt="flag of the country" width="40" height="30"/>
        <h2>${name.official}</h2>
      </div>
      <p class="coutry-info__item"><span class="country-info__focus">Capital: </span> ${capital}</p>
      <p class="coutry-info__item"><span class="country-info__focus">Population: </span>${population}</p>
      <p class="coutry-info__item"><span class="country-info__focus">Languages: </span>${Object.values(
        languages
      )}</p>
    </div>`
      );
    },
    ''
  );
  return markup;
}
