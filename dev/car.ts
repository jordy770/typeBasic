class Car {

   private _speed:number = 0
//    private drive:number
//    private stop:number


    constructor() {
     this._speed = 0
    //  this.drive = 0
    //  this.stop = 0
    }

    public drive(){
        this._speed = 100
    }

    public stop(){
        this._speed = 0
    }

    public update() {
        console.log("snelheid =" + this._speed)
    }


    public get speed():number {
        return this._speed
    }

    public set speed(newSpeed:number){
        if(newSpeed > 130){
            this._speed = 130
        } else {
            this.speed = newSpeed
        }
    }
}
