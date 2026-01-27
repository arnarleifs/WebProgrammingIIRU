class Monster {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.hp = 50;
    this.x = 6;
    this.y = 6;
  }

  takeDamage(amount) {
    this.hp -= amount;

    this.element.classList.add("shake");
    this.element.innerText = "😖";

    setTimeout(() => {
      this.element.classList.remove("shake");
      if (this.hp <= 0) {
        this.element.innerText = "💀";
        this.element.style.opacity = "0.5";
      } else {
        this.element.innerText = "👹";
      }
    }, 500);

    console.log(`Monster took ${amount} damage! HP: ${this.hp}`);
  }

  attack(target) {
    if (this.hp <= 0) return;

    this.element.style.transform = "scale(1.2)";
    setTimeout(() => {
      target.takeDamage(10);
      this.element.style.transform = "scale(1)";
    }, 1500);
  }
}

class Warrior {
  constructor(selector) {
    this.element = document.querySelector(selector);
    
    this.x = 1;
    this.y = 1;
    this.hp = 100;

    this.queue = Promise.resolve();

    this.updatePosition();
  }

  _addToQueue(action, duration = 1500) {
    this.queue = this.queue.then(() => {
      return new Promise((resolve) => {
        action();
        setTimeout(resolve, duration);
      });
    });
  }

  updatePosition() {
    this.element.style.gridColumn = this.x;
    this.element.style.gridRow = this.y;
  }

  log(message) {
    const logEl = document.getElementById("log");
    logEl.innerText = `Status: ${message} (HP: ${this.hp})`;
    console.log(message);
  }

  // --- MOVEMENT METHODS ---

  moveRight() {
    this._addToQueue(() => {
      if (this.x < 10) this.x++;
      this.updatePosition();
      this.log("Moved Right");
    });
    return this; // Allows method chaining
  }

  moveLeft() {
    this._addToQueue(() => {
      if (this.x > 1) this.x--;
      this.updatePosition();
      this.log("Moved Left");
    });
    return this;
  }

  moveDown() {
    this._addToQueue(() => {
      if (this.y < 10) this.y++;
      this.updatePosition();
      this.log("Moved Down");
    });
    return this;
  }

  moveUp() {
    this._addToQueue(() => {
      if (this.y > 1) this.y--;
      this.updatePosition();
      this.log("Moved Up");
    });
    return this;
  }

  // --- ACTION METHODS ---

  takeDamage(amount) {
    this.hp -= amount;
    this.log(`Ouch! Took ${amount} damage.`);
    this.element.style.backgroundColor = "red";
    setTimeout(
      () => (this.element.style.backgroundColor = "transparent"),
      1500
    );
  }

  attack(target) {
    this._addToQueue(() => {
      const distanceX = Math.abs(this.x - target.x);
      const distanceY = Math.abs(this.y - target.y);
      const isAdjacent = distanceX + distanceY <= 1;

      this.element.style.transform = "scale(1.5) rotate(20deg)";

      if (isAdjacent) {
        this.log("HYAH! (Hit)");
        target.takeDamage(20);

        if (target.hp > 0) {
          setTimeout(() => target.attack(this), 1500);
        }
      } else {
        this.log("Miss! (Too far away)");
      }

      setTimeout(() => {
        this.element.style.transform = "scale(1) rotate(0deg)";
      }, 200);
    });
    return this;
  }

  // --- ASYNC METHOD ---

  drinkPotion() {
    this._addToQueue(async () => {
      this.log("Drinking Potion... (Fetching API)");
      this.element.innerText = "🧪"; // Change emoji to potion

      try {
        // Fetch a random "beer" as our potion
        const res = await fetch("https://the-chained-warrior-beers-464b79ebd5f9.herokuapp.com/beers");
        const data = await res.json();

        // Determine effect based on alcohol content
        const alcohol = parseFloat(data.alcohol);
        if (alcohol > 5) {
          this.hp -= 10;
          this.log(`Oof! Strong potion (${data.name}). HP -10`);
          this.element.style.filter = "hue-rotate(90deg)"; // Turn green (sick)
        } else {
          this.hp += 20;
          this.log(`Refreshing! (${data.name}). HP +20`);
          this.element.style.filter = "brightness(1.5)"; // Glow
        }
      } catch (err) {
        this.log("The potion was empty...");
      }

      // Reset visual after a bit
      setTimeout(() => {
        this.element.innerText = "🧝";
        this.element.style.filter = "none";
      }, 1000);
    }, 1500); // Give it extra time for the fetch
    return this;
  }
}

// --- PROTOTYPE CHALLENGE (Part of Workshop) ---
// Task: Add a 'spin' move using prototype
Warrior.prototype.spin = function () {
  this._addToQueue(() => {
    this.element.style.transition = "transform 0.5s";
    this.element.style.transform = "rotate(360deg)";
    this.log("Spinning!");
    setTimeout(() => {
      this.element.style.transform = "rotate(0deg)";
    }, 500);
  });
  return this;
};
