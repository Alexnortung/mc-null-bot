import { Objective } from './Objective'

class UnresolvableObjective extends Objective {
    constructor() {
        super(new Function())
    }

    isGoalReached() {
        return false
    }

}

export default UnresolvableObjective
