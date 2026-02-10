import "./style.css";
import confetti from "canvas-confetti";

// =============================================================
// WORKSHOP 2: POKEMON KART REFACTOR
// =============================================================

// --- 1. THE CLASSES (Inheritance) ---

type RaceState = "idle" | "racing" | "finished";
type MapName = "Rainbow Road" | "Choco Mountain";

type Mushroom = {
  type: "mushroom";
  speedBoost: number;
};

type Coin = {
  type: "coin";
  points: number;
};

type Item = Coin | Mushroom;
type ItemType = Item["type"];

interface IRacer {
  name: string;
  position: number;
  move(): void;
}

abstract class Driver implements IRacer {
  name: string;
  spriteUrl: string;
  laneId: number;
  position: number = 0;
  points: number = 0;
  speed: number = Math.random() * 0.5 + 0.2;
  state: RaceState = "idle";
  element: HTMLElement;
  inventory: Item | null;

  constructor(name: string, spriteUrl: string, laneId: number) {
    this.name = name;
    this.spriteUrl = spriteUrl;
    this.laneId = laneId;

    this.state = "idle";
    this.inventory = null;

    // DOM Setup
    this.element = document.createElement("div");
    this.element.className = "kart";
    this.element.style.backgroundImage = `url('${spriteUrl}')`;
    document.getElementById(`lane-${laneId}`)?.appendChild(this.element);
  }

  assignItem() {
    // Assign an item
    const itemTypes: ItemType[] = ["coin", "mushroom"];
    const randomType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    if (randomType === "coin") {
      this.inventory = { type: "coin", points: 10 };
    } else {
      this.inventory = { type: "mushroom", speedBoost: 0.3 };
    }
  }

  useItem() {
    const item = this.inventory;
    if (!item) return;

    if (item.type === "mushroom") {
      console.log(`${this.name} used a Mushroom!`);
      this.speed += item.speedBoost;
    } else if (item.type === "coin") {
      console.log(`${this.name} used a Coin!`);
      this.points += item.points;
    }

    // Remove from inventory
    this.inventory = null;
    const laneItem = document.getElementById(`item-lane-${this.laneId}`);
    if (laneItem) {
      laneItem.classList.add("used");
      setTimeout(() => {
        laneItem.innerText = "";
        laneItem.classList.remove("used");
      }, 1000);
    }
  }

  move() {
    if (this.state !== "racing") return;

    this.position += this.speed;
    this.element.style.left = `${this.position}%`;

    // Win Condition (Finish line is at 90%)
    if (this.position >= 90) {
      this.state = "finished";
      finishRace(this);
    }
  }
}

class Pikachu extends Driver {
  constructor(lane: number) {
    super(
      "Pikachu",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      lane,
    );
  }

  // Special Ability
  useStar() {
    console.log("Pikachu used a Star!");
    this.speed += 0.5;
    this.element.classList.add("blink");
    setTimeout(() => this.element.classList.remove("blink"), 2000);
  }
}

class Charizard extends Driver {
  constructor(lane: number) {
    super(
      "Charizard",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      lane,
    );
  }

  // Special Ability
  roar() {
    console.log("Charizard Roars!");
    this.element.classList.add("big");
    setTimeout(() => this.element.classList.remove("big"), 2000);
  }
}

class Jigglypuff extends Driver {
  constructor(lane: number) {
    super(
      "Jigglypuff",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      lane,
    );
  }

  // Special ability
  ballRoll() {
    console.log("Jigglypuff ball roll!");
    this.element.classList.add("spin");
    setTimeout(() => this.element.classList.remove("spin"), 2000);

    this.speed += 0.3;
  }
}

class Bulbasaur extends Driver {
  constructor(lane: number) {
    super(
      "Bulbasaur",
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      lane,
    );
  }

  useVineWhip() {
    console.log("Bulbasaur used Vine Whip!");

    this.element.classList.add("lunge");
    setTimeout(() => this.element.classList.remove("lunge"), 300);

    this.position += 5;
    this.element.style.left = `${this.position}%`;
  }
}

// --- 2. GAME SETUP ---

// Untyped Array (Union Type opportunity)
const drivers = [
  new Pikachu(0),
  new Charizard(1),
  new Jigglypuff(2),
  new Bulbasaur(3),
];

// Map logic (Literal Type opportunity)
let currentMap: MapName = "Rainbow Road";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function startRace() {
  const overlay = document.getElementById("overlay") as HTMLDivElement;
  const counter = document.getElementById("counter-text") as HTMLDivElement;
  const btn = document.getElementById("start-btn") as HTMLButtonElement;
  const scoreboard = document.getElementById("scoreboard") as HTMLDivElement;

  if (btn !== null) {
    btn.disabled = true;
  }

  scoreboard.innerText = "Race Starting...";
  drivers.forEach((d) => {
    d.position = 0;
    d.element.style.left = "0%";

    d.assignItem();

    // Display items each driver has
    if (d.inventory) {
      console.log(`${d.name} starts with a ${d.inventory.type}.`);
      const laneItem = document.getElementById(`item-lane-${d.laneId}`);
      if (laneItem) {
        laneItem.innerText = d.inventory.type === "coin" ? "🪙" : "🍄";
      }
    }
  });

  // 2. Start Countdown
  overlay.classList.remove("hidden"); // Show overlay

  counter.innerText = "3";
  await sleep(1000);

  counter.innerText = "2";
  await sleep(1000);

  counter.innerText = "1";
  await sleep(1000);

  counter.innerText = "GO!";
  counter.style.color = "gold"; // Flash gold
  await sleep(500);

  // 3. Start The Logic
  overlay.classList.add("hidden"); // Hide overlay

  drivers.forEach((d) => {
    d.state = "racing";
    d.speed = Math.random() * 0.5 + 0.2;
  });

  requestAnimationFrame(gameLoop);
  btn.disabled = false;
}

// --- 3. THE LOOP ---

function gameLoop() {
  let isRaceOn = false;

  drivers.forEach((driver) => {
    if (driver.state === "racing") {
      isRaceOn = true;
      driver.move();

      // Item usage logic (10% chance per frame)
      if (Math.random() < 0.1) {
        driver.useItem();
      }

      // Randomly trigger special abilities (1% chance per frame)
      if (Math.random() < 0.01) {
        // TYPE NARROWING CHALLENGE:
        // JS just works. TS will complain: "Property useStar does not exist on type Driver"
        if (driver instanceof Pikachu) {
          driver.useStar();
        } else if (driver instanceof Charizard) {
          driver.roar();
        } else if (driver instanceof Jigglypuff) {
          driver.ballRoll();
        } else if (driver instanceof Bulbasaur) {
          driver.useVineWhip();
        }
      }
    }
  });

  if (isRaceOn) {
    requestAnimationFrame(gameLoop);
  }
}

function finishRace(winner: Driver) {
  const scoreboard = document.getElementById("scoreboard") as HTMLDivElement;
  // Prevent multiple logs
  if (scoreboard.innerText.includes("Winner")) return;

  const message = `Winner: ${winner.name} on ${currentMap}!`;
  scoreboard.innerText = message;

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#FFD700", "#FF0000", "#00FF00", "#0000FF"],
  });
}

// Wire up the button
document.getElementById("start-btn")?.addEventListener("click", startRace);
