import { UnresolvableObjective } from './UnresolvableObjective'
import { EventEmitter } from 'events'

class State extends EventEmitter {
    constructor(objective = new UnresolvableObjective()) {
        this.objective = objective
    }

    setupListeners(stateMachine) {

    }
}

export default State