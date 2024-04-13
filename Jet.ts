/*
* The Jet class.
*
* @author  Curtis Edwards
* @version 1.0
* @since   2024-04-13
*/

import Airplane from "./Airplane"

/**
* This is the jet class.
*/
export class Jet extends Airplane {
    /** Jet speed change multiplier. */
    private MULTIPLIER: number = 2

    /**
     * Constructs a new Jet object.
     */
    public Jet() {
        // super()
    }

    /**
     * Sets the speed of the jet.
     */
    public setSpeed(speed: number) {
        super.setSpeed(speed * this.MULTIPLIER)
    }

    /**
     * Accelerates the jet.
     */
    public accelerate() {
        super.setSpeed(super.getSpeed() * 2)
    }
}
