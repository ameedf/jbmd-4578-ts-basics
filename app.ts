interface Person {
  name: string;
  saySomething(): string;
}

class Student implements Person {
  name: string = '';
  saySomething(): string {
    console.log(this.name);
    return '';
  }

}


interface CanFly {
  fly(): void;
}

class Airplain implements CanFly {
  fly(): void {
    console.log("Airplain");
  }
}

class Bird implements CanFly {
  fly(): void {
    console.log("Bird");

  }
}

function start2() {
  let f: CanFly = new Airplain();
  f.fly();
  f = new Bird();
  f.fly();
}


abstract class Employee {
  constructor(
    public name: string,
    public salary: number
  ) {
  }
  toHtml(): string {
    // <div>avi</div>
    return `<${this.elementName()}>${this.name}</${this.elementName()}>`;
  }

  abstract elementName(): string;
}

class Programmer extends Employee {
  constructor(
    firstName: string,
    lastName: string,
    s: number,
    public linesOfCode: number
  ) {
    super(`${firstName} ${lastName}`, s);
  }
  addLine(line: string): void {
    this.linesOfCode++;
  }
  elementName(): string {
    return "button";
  }
}

class TeamLeader extends Programmer {
  public programmers: Programmer[] = [];

  addLine(line: string): void {
    super.addLine(line);
    super.addLine("//" + line);
  }

  addProgrammer(newProgrammer: Programmer) {
    this.programmers.push(newProgrammer);
  }
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

function start() {
  //const e = new Employee("a", 5);
  const p = new Programmer("avi", "cohen", 100, 800);
  const p1 = new Programmer("avi1", "cohen", 100, 800);
  const p2 = new Programmer("avi2", "cohen", 100, 800);

  const t = new TeamLeader("dani", "din", 30000, 23);
  t.addProgrammer(p);
  t.addProgrammer(p1);
  t.addProgrammer(p2);
  t.addLine("bla bla");

  const container = document.getElementById("container")!;
  container.innerHTML = p.toHtml();
  console.log(t);
}