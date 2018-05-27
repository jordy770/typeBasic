class Game {

    private player: Player
    // private level: Level
    private platform: Platform

    constructor() {

        this.player = new Player()
        this.platform = new Platform()
        // this.level = new Level()

        this.gameLoop()
    }

    private gameLoop(){
        this.player.update()
        this.platform.update()

        let hit = this.checkCollision(this.player.getRectangle(), this.platform.getRectangle())


        if( hit || this.player.getRectangle() == this.platform.getRectangle()){
            this.player.hitPlat()

        } else{
            this.player.gravity = 10
        }
   

  
        requestAnimationFrame(()=>this.gameLoop())
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }
}

window.addEventListener("load", () => new Game())
