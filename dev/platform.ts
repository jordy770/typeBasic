class Platform{

    private div: HTMLElement
    public x: number = 800
    public y: number = 800

    constructor(){
        this.div = document.createElement("platform")
        document.body.appendChild(this.div)

    }

    public update(){
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }

}