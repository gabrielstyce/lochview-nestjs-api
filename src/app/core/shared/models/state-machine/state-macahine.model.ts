import { StateTransition } from './state-transition.model';
import { Transitions } from './transitions.model';

export class StateMachine<ProcessState, Events> {
  private _transitions: Transitions<StateTransition<ProcessState, Events>, ProcessState>;
  public get transitions(): Transitions<StateTransition<ProcessState, Events>, ProcessState> {
    return this._transitions;
  }

  protected _currentState: ProcessState;

  public get currentState(): ProcessState {
    return this._currentState;
  }

  constructor(initialState: ProcessState, transitions: Transitions<StateTransition<ProcessState, Events>, ProcessState>, context?) {
    this._currentState = initialState;
    this._transitions = transitions;
  }

  public getNext(commnd: Events): ProcessState {
    const trasition = new StateTransition<ProcessState, Events>(this.currentState, commnd);
    try {
      const nextState = this.transitions.get(trasition);
      console.log(`StateMachine | getNext - nextState: ${nextState}`);
      if (nextState) {
        return nextState;
      }
    } catch (error) {}

    throw new Error(`Invalid transition: Trying change state '${this.currentState}' on -> '${commnd}' command `);
  }

  public next(event: Events, ...args): ProcessState {
    return (this._currentState = this.getNext(event));
  }
}
