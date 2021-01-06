export class Hello {
  constructor(private _name: string) {
  }

  get name(): string {
    return this._name.trim();
  }

  set name(value: string) {
    this._name = value + '!  ';
  }
}
