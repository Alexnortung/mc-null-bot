class Objective {
    constructor(callback) {
        this.callback = callback
        this.resolved = false
    }

    isGoalReached() {
        return false
    }

    resolve() {
        this.callback()
    }
}

export default Objective
