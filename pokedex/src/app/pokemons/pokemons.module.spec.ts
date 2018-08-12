import { PokemonsModule } from './pokemons.module';

describe('PokemonsModule', () => {
  let pokemonsModule: PokemonsModule;

  beforeEach(() => {
    pokemonsModule = new PokemonsModule();
  });

  it('should create an instance', () => {
    expect(pokemonsModule).toBeTruthy();
  });
});
