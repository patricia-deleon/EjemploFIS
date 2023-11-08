import {Country} from '../country';
import {CountryList} from '../countrylist';

describe('CountryList class tests', () => {
  test('Create an empty country list', () =>{
    const countryList = new CountryList();
    const expectedLength = 0;
    expect(countryList.getCountries().length).toBe(expectedLength);
  });

  test('Add a country to the list', () =>{
    const countryList = new CountryList();
    const country = new Country('Uruguay');
    country.setCapital('Montevideo');
    countryList.add(country);
    const expectedLength = 1;
    expect(countryList.getCountries().length).toBe(expectedLength);
  });

  test('Add a repeated country to the list', () =>{
    const countryList = new CountryList();
    const country = new Country('Uruguay');
    country.setCapital('Montevideo');
    countryList.add(country);
    // eslint-disable-next-line max-len
    const expectedErrorMessage = 'No se pudo agregar. Uruguay ya está en la lista.';
    expect(() => countryList.add(country)).toThrow(expectedErrorMessage);
  });

  test('Add an invalid country to the list', () =>{
    const countryList = new CountryList();
    const country = new Country('');
    const expectedErrorMessage = 'El nombre del país no puede ser vacío';
    expect(() => countryList.add(country)).toThrow(expectedErrorMessage);
  });
});
