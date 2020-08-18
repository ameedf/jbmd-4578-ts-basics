"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
        this.name = '';
    }
    Student.prototype.saySomething = function () {
        console.log(this.name);
        return '';
    };
    return Student;
}());
var Airplain = /** @class */ (function () {
    function Airplain() {
    }
    Airplain.prototype.fly = function () {
        console.log("Airplain");
    };
    return Airplain;
}());
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.fly = function () {
        console.log("Bird");
    };
    return Bird;
}());
function start2() {
    var f = new Airplain();
    f.fly();
    f = new Bird();
    f.fly();
}
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.toHtml = function () {
        // <div>avi</div>
        return "<" + this.elementName() + ">" + this.name + "</" + this.elementName() + ">";
    };
    return Employee;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(firstName, lastName, s, linesOfCode) {
        var _this = _super.call(this, firstName + " " + lastName, s) || this;
        _this.linesOfCode = linesOfCode;
        return _this;
    }
    Programmer.prototype.addLine = function (line) {
        this.linesOfCode++;
    };
    Programmer.prototype.elementName = function () {
        return "button";
    };
    return Programmer;
}(Employee));
var TeamLeader = /** @class */ (function (_super) {
    __extends(TeamLeader, _super);
    function TeamLeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.programmers = [];
        return _this;
        // toHtml(): string {
        //   let html = `<h1>${this.name}:</h1>`;
        //   html += "<ul>";
        //   for(let p of this.programmers) {
        //     html += p.toHtml();
        //   }
        //   html += "</ul>";
        //   console.log(html);
        //   return html;
        // }
    }
    TeamLeader.prototype.addLine = function (line) {
        _super.prototype.addLine.call(this, line);
        _super.prototype.addLine.call(this, "//" + line);
    };
    TeamLeader.prototype.addProgrammer = function (newProgrammer) {
        this.programmers.push(newProgrammer);
    };
    return TeamLeader;
}(Programmer));
function start() {
    //const e = new Employee("a", 5);
    var p = new Programmer("avi", "cohen", 100, 800);
    var p1 = new Programmer("avi1", "cohen", 100, 800);
    var p2 = new Programmer("avi2", "cohen", 100, 800);
    var t = new TeamLeader("dani", "din", 30000, 23);
    t.addProgrammer(p);
    t.addProgrammer(p1);
    t.addProgrammer(p2);
    t.addLine("bla bla");
    var container = document.getElementById("container");
    container.innerHTML = p.toHtml();
    console.log(t);
}
