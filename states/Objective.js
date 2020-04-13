class Objective {
    constructor(callback) {
        this.resolved = false;
    }

    resolve() {
        callback()
    }
}

export default Objective
