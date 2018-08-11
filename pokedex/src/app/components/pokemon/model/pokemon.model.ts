export class Pokemon {
  id: number;
  name: string;
  height: number;
  image: string;
  types: string[];
  status: string;

  constructor (id: number, name: string, height: number, image: string, types: string[], status: string) {
      this.id = id || null;
      this.name = name || null;
      this.height = height || null;
      this.image = image || null;
      this.types = types || null;
      this.status = status || null;
  }
}
