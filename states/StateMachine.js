import { EventEmitter } from 'events'
import { IdleState } from './IdleState';

class StateMachine extends EventEmitter {
    constructor(initialState = new IdleState()) {
        this.state = initialState
        this.on('minecraft_event', this.pipeEvent)
    }

    pipeEvent(eventName, eventData) {
        this.state.emit(eventName, ...eventData);
    }


}

export default StateMachine