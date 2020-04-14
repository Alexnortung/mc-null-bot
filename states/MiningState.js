import { State } from './State'
import { GatherObjective } from './GatherObjective'

class MiningState extends State {
    constructor(objective = new GatherObjective()) {
        super(objective)
    }

    setupListeners() {
        // on block pickup, update objective
        this.on('playerCollect', this.onPlayerCollect);
    }

    onSelfCollect(collected) {
        console.log(collected)
    }

    onPlayerCollect(collector, collected) {
        if (collector.username === this.bot.username) {
            this.onSelfCollect(collected);
        }
    }
}

export default MiningState