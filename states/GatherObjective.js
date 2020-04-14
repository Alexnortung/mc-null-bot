import {Objective} from './Objective.js'

class GatherObjective extends Objective {
    constructor(resources, callback) {
        super(callback)
        this.goal = resources
        // make a copy of resources for the remaining resources
        this.remaining = Object.assign({}, resources)
    }

    IsGoalReached() {
        for (const itemType in this.remaining) {
            if (this.remaining[itemType] > 0)
                return false
        }
        return true
    }

    OnGatherItem(itemType, amount = 1) {
        if (typeof this.remaining[itemType] != undefined) {
            this.remaining[itemType] -= amount
        }
    }
}

export default GatherObjective
