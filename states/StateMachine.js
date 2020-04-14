import { IdleState } from './IdleState';

class StateMachine {
    constructor(initialState = new IdleState()) {
        this.state = initialState
    }

    pipeEvent(eventName = '', eventData = []) {
        this.state.emit(eventName, ...eventData);
    }


}

export default StateMachine