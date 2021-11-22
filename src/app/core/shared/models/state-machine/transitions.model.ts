import { EqualityHelper } from 'src/app/helpers/equality.helper';

export class Transitions<Key, Value> {
  private _map: Array<{ key: Key; value: Value }> = [];

  constructor(e?: Array<{ key: Key; value: Value }>) {
    this._map = e || [];
  }

  private findByKey(key: Key) {
    return this._map.find(EqualityHelper.equals(key));
  }

  public set(key: Key, value: Value) {
    this._map.push({
      key: key,
      value: value
    });

    return this;
  }

  public get(key: Key): Value {
    const obj = this.findByKey(key);
    if (obj) {
      return obj.value;
    }

    throw new Error(`Key '${key}' not found!`);
  }
}
