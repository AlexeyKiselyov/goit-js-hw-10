export function countriesListMarkup(arr) {
  const markup = arr.reduce(
    (acc, { flags, name }) =>
      acc +
      `<li class="country-item">
      <img src=${flags.svg} alt="flag of the country" width="60">
      <h3>${name.official}</h3>
      </li>`,
    ''
  );
  return markup;
}
