import { StateTransition } from './state-transition.model';
import { Transitions } from './transitions.model';

export class StateMachine<ProcessState, Events> {
  private _transitions: Transitions<StateTransition<ProcessState, Events>, ProcessState>;
  public get transitions(): Transitions<StateTransition<ProcessState, Events>, ProcessState> {
    return this._transitions;
  }

  private _currentState: ProcessState;

  public get currentState(): ProcessState {
    return this._currentState;
  }

  constructor(initialState: ProcessState, transitions: Transitions<StateTransition<ProcessState, Events>, ProcessState>) {
    this._currentState = initialState;
    this._transitions = transitions;
  }

  public getNext(commnd: Events): ProcessState {
    const trasition = new StateTransition<ProcessState, Events>(this.currentState, commnd);
    const nextState = this.transitions.get(trasition);

    if (nextState) {
      return nextState;
    }

    throw new Error(`Invalid transition: ${this.currentState} -> ${commnd}`);
  }

  public next(command: Events): ProcessState {
    return (this._currentState = this.getNext(command));
  }
}
