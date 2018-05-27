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
        this.platform = new Platform();
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.player.update();
        this.platform.update();
        var hit = this.checkCollision(this.player.getRectangle(), this.platform.getRectangle());
        if (hit || this.player.getRectangle() == this.platform.getRectangle()) {
            this.player.hitPlat();
        }
        else {
            this.player.gravity = 10;
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Level = (function () {
    function Level() {
    }
    return Level;
}());
var Platform = (function () {
    function Platform() {
        this.x = 800;
        this.y = 800;
        this.div = document.createElement("platform");
        document.body.appendChild(this.div);
    }
    Platform.prototype.update = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Platform.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Platform;
}());
var Player = (function () {
    function Player() {
        var _this = this;
        this.rightSpeed = 0;
        this.leftSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        this.leftkey = 65;
        this.rightkey = 68;
        this.upkey = 87;
        this.gravity = 10;
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
                this.leftSpeed = 10;
                break;
            case this.rightkey:
                this.rightSpeed = 10;
                break;
            case this.upkey:
                this.upSpeed = 25;
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
        }
    };
    Player.prototype.hitPlat = function () {
        this.upSpeed = 0;
        this.gravity = 0;
    };
    Player.prototype.normal = function () {
        this.gravity = 10;
    };
    Player.prototype.update = function () {
        var newX = this.x - this.leftSpeed + this.rightSpeed;
        var newY = this.y - this.upSpeed + this.gravity;
        if (newX > 0 && newX + 100 < window.innerWidth)
            this.x = newX;
        if (newY > 0 && newY + 200 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Player;
}());
//# sourceMappingURL=main.js.map