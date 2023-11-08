import {Country} from '../country';

describe('Country class tests', () => {
  test('Create a country', () =>{
    const country = new Country('Uruguay');
    const countryName = country.getNombre();
    const expectedName = 'Uruguay';
    expect(countryName).toBe(expectedName);
  });

  test('Invalid null country name', () =>{
    const country = new Country(null);
    const expectedErrorMessage = 'El nombre del país no puede ser vacío';
    expect(() => country.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid undefined country name', () =>{
    const country = new Country(undefined);
    const expectedErrorMessage = 'El nombre del país no puede ser vacío';
    expect(() => country.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty country name', () =>{
    const country = new Country('');
    const expectedErrorMessage = 'El nombre del país no puede ser vacío';
    expect(() => country.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid null country capital', () =>{
    const country = new Country('Uruguay');
    country.setCapital(null);
    const expectedErrorMessage = 'La capital del país no puede ser vacía';
    expect(() => country.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid undefined country capital', () =>{
    const country = new Country('Uruguay');
    country.setCapital(undefined);
    const expectedErrorMessage = 'La capital del país no puede ser vacía';
    expect(() => country.isValid()).toThrow(expectedErrorMessage);
  });

  test('Invalid empty country capital', () =>{
    const country = new Country('Uruguay');
    country.setCapital('');
    const expectedErrorMessage = 'La capital del país no puede ser vacía';
    expect(() => country.isValid()).toThrow(expectedErrorMessage);
  });

  test('Valid country', () =>{
    const country = new Country('Uruguay');
    country.setCapital('Montevideo');
    expect(country.isValid()).toBe(true);
  });

  test('ToString country', () =>{
    const country = new Country('Uruguay');
    country.setCapital('Montevideo');
    const expectedString = 'País: Uruguay - capital: Montevideo';
    expect(country.toString()).toBe(expectedString);
  });
});
