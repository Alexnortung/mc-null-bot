import { State } from './State'
import { GatherObjective } from './GatherObjective'

class MiningState extends State {
    constructor(objective = new GatherObjective()) {
        super(objective)
    }
}

export default MiningState