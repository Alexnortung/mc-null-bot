import { State } from './State';
import { UnresolvableObjective } from './UnresolvableObjective';

class IdleState extends State {
    constructor() {
        const objective = new UnresolvableObjective();
        super(objective);
    }
}

export default IdleState