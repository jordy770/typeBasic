class Player{

    private div: HTMLElement
    private x: number
    private y: number

    private leftkey: number
    private rightkey: number

    private downSpeed: number = 0
    private upSpeed: number = 0

    constructor() {
        this.div = document.createElement("player")
        document.body.appendChild(this.div)

        this.leftkey = 65
        this.rightkey = 68

        this.x = 0
        this.y = 1080 - 200
    

        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }

    private onKeyDown(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftkey:
                this.upSpeed = 5
                break
            case this.rightkey:
                this.downSpeed = 5
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        switch (e.keyCode) {
            case this.leftkey:
                this.upSpeed = 0
                break
            case this.rightkey:
                this.downSpeed = 0
                break
        }
    }

    public update() {
        let newX = this.x - this.upSpeed + this.downSpeed

        // check of de paddle binnen beeld blijft
        if (newX > 0 && newX + 100 < window.innerWidth) this.x = newX

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}