"use strict";
var Car = (function () {
    function Car() {
        this._speed = 0;
        this._speed = 0;
    }
    Car.prototype.drive = function () {
        this._speed = 100;
    };
    Car.prototype.stop = function () {
        this._speed = 0;
    };
    Car.prototype.update = function () {
        console.log("snelheid =" + this._speed);
    };
    Object.defineProperty(Car.prototype, "speed", {
        get: function () {
            return this._speed;
        },
        set: function (newSpeed) {
            if (newSpeed > 130) {
                this._speed = 130;
            }
            else {
                this.speed = newSpeed;
            }
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
var Game = (function () {
    function Game() {
        this.player = new Player();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.player.update();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Player = (function () {
    function Player() {
        var _this = this;
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.upSpeed = 0;
        this.downSpeed = 0;
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.leftkey = 65;
        this.rightkey = 68;
        this.upkey = 87;
        this.downkey = 83;
        this.x = 100;
        this.y = 100;
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
    }
    Player.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Player.prototype.onKeyDown = function (e) {
        switch (e.keyCode) {
            case this.leftkey:
                this.leftSpeed = 5;
                break;
            case this.rightkey:
                this.rightSpeed = 5;
                break;
            case this.upkey:
                this.upSpeed = 25;
                break;
            case this.downkey:
                this.downSpeed = 10;
                break;
        }
    };
    Player.prototype.onKeyUp = function (e) {
        switch (e.keyCode) {
            case this.leftkey:
                this.leftSpeed = 0;
                break;
            case this.rightkey:
                this.rightSpeed = 0;
                break;
            case this.upkey:
                this.upSpeed = 0;
                break;
            case this.downkey:
                this.downSpeed = 10;
                break;
        }
    };
    Player.prototype.update = function () {
        var newX = this.x - this.leftSpeed + this.rightSpeed;
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newX > 0 && newX + 100 < window.innerWidth)
            this.x = newX;
        if (newY > 0 && newY + 200 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Player;
}());
//# sourceMappingURL=main.js.map