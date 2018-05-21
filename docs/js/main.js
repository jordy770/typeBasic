"use strict";
var Car = (function () {
    function Car() {
        this.x = 0;
        console.log("car created");
        this.htmlElement = document.createElement("car");
        document.body.appendChild(this.htmlElement);
    }
    Car.prototype.update = function () {
        console.log("vrooom!");
        this.x = this.x + 10;
        this.htmlElement.style.left = this.x + "px";
    };
    return Car;
}());
var Game = (function () {
    function Game() {
        console.log("new game created!");
        var c = new Car();
        c.update();
        this.update();
    }
    Game.prototype.update = function () {
        var _this = this;
        setTimeout(function () { return _this.update; }, 1000);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map