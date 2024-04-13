/*
 * Airplane class.
 *
 * @author  Curtis Edwards
 * @version 1.0
 * @since   2024-04-13
 */

export class Airplane {
    private _speed: number
  
    /*
    * constructor
    */
    constructor() {
      this._speed = 0
    }
  
    /*
    * This method sets the speed
    */
    public set setSpeed(newSpeed: number) {
        this._speed = newSpeed
    }

    /*
    * This method gets the speed
    */
    public get getSpeed(): number {
      return this._speed
    }
}
