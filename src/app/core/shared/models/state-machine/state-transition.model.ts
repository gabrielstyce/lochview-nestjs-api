import { Equality } from '../equality.model';

export class StateTransition<ProcessState, Command> extends Equality {
  private _currentState: ProcessState;
  private _command: Command;

  public get currentState(): ProcessState {
    return this._currentState;
  }

  public get command(): Command {
    return this._command;
  }

  constructor(currentState: ProcessState, command: Command) {
    super();

    this._currentState = currentState;
    this._command = command;
  }

  public equals(obj: StateTransition<ProcessState, Command>): boolean {
    return obj && this.currentState === obj.currentState && this.command === obj.command;
  }
}
