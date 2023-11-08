export class Country {
  #nombre;
  #capital;
  #foto;

  constructor(aNombre) {
    this.#nombre = aNombre;
  }

  getNombre() {
    return this.#nombre;
  }

  setCapital(aCapital) {
    this.#capital = aCapital;
  }

  getFoto() {
    return this.#foto;
  }

  setFoto(aFoto) {
    this.#foto = aFoto;
  }

  toString() {
    return `País: ${this.#nombre} - Capital: ${this.#capital}`;
  }

  isValid() {
    // eslint-disable-next-line max-len
    if (this.#nombre === undefined || this.#nombre === null || this.#nombre === '') {
      throw new Error('El nombre del país no puede ser vacío');
    }
    // eslint-disable-next-line max-len
    if (this.#capital === undefined || this.#capital === null || this.#capital === '') {
      throw new Error('La capital del país no puede ser vacía');
    }
    if (this.#foto === undefined || this.#foto === null || this.#foto === '') {
      throw new Error('La foto del país no puede ser vacía');
    }
    return true;
  }
}
