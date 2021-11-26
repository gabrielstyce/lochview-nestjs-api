import { EqualityHelper } from 'src/app/helpers/equality.helper';
import { TransitionItem } from './transitions.type';

export class Transitions<Key, Value> {
  private _map: Array<TransitionItem<Key, Value>> = [];

  constructor(e?: Array<TransitionItem<Key, Value>>) {
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
