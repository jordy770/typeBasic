class Game {

    constructor(){
        console.log("new game created!")

        let c = new Car()
        
        c.drive()
        c.update()

        console.log(c.speed)
    }
}

window.addEventListener("load", () => new Game())
