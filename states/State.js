import { UnresolvableObjective } from './UnresolvableObjective'
import { EventEmitter } from 'events'

class State extends EventEmitter {
    constructor(objective = new UnresolvableObjective()) {
        this.objective = objective
        this.subState = null
    }

    setupListeners() {

    }
}

export default State