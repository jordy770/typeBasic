class Player{

    private div: HTMLElement
    public x: number
    public y: number

    private leftkey: number
    private rightkey: number
    private upkey: number
    //private downkey: number
    
    public gravity: number

    private rightSpeed: number = 0
    private leftSpeed: number = 0
    private upSpeed: number = 0
   // public downSpeed: number = 0

    constructor() {
        this.div = document.createElement("player")
        document.body.appendChild(this.div)

        this.leftkey = 65
        this.rightkey = 68
        this.upkey = 87
       // this.downkey = 83
        this.gravity = 10


        this.x = 100
        this.y = 100
    

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftkey:
                this.leftSpeed = 10
                break
            case this.rightkey:
                this.rightSpeed = 10
                break
            case this.upkey:
                this.upSpeed = 25
                break
            // case this.downkey:
            //     this.downSpeed = this.gravity
            //     break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftkey:
                this.leftSpeed = 0
                break
            case this.rightkey:
                this.rightSpeed = 0
                break
            case this.upkey:
                this.upSpeed = 0
                break
            // case this.downkey:
            //     this.downSpeed = this.gravity
            //     break
        }
    }

    public hitPlat(){
        // this.downSpeed = 0
         this.upSpeed = 0
         this.gravity = 0
     }

     public normal(){
         this.gravity = 10
     }

    public update() {
    
        let newX = this.x - this.leftSpeed + this.rightSpeed
        let newY = this.y - this.upSpeed + this.gravity

        // check of de paddle binnen beeld blijft
        if (newX > 0 && newX + 100 < window.innerWidth) this.x = newX
        if (newY > 0 && newY + 200 < window.innerHeight) this.y = newY

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}