// Wait
var wait = (ms) => {
  const start = Date.now();
  let now = start;
  while (now - start < ms) {
    now = Date.now();
  }
};

// Display Stats
var health = 8;
gold = 5;
// Display Stats - Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  stats();
});
document.getElementById("btns").addEventListener("click", stats);

// Display Stats - function
function stats() {
  document.getElementById("gold").innerHTML = gold;
  document.getElementById("health").innerHTML = health;
}

// Enemy Health
document.addEventListener("DOMContentLoaded", function () {
  enemyhealthpoint();
});
function enemyhealthpoint() {
  enemyhealth = 8;
  document.getElementById("enemyhealth").innerHTML = enemyhealth;
}

//Fight
document.getElementById("fightbtn1").addEventListener("click", dodamage);

function dodamage() {
  const damnum = Math.floor(Math.random() * 3) + 0; // Calculate Damage To Enemy
  let newenemyhealth = enemyhealth - damnum;
  enemyhealth = newenemyhealth;
  document.getElementById("enemyhealth").innerHTML = enemyhealth;
  if (enemyhealth <= 0) {
    wait(350);
    document.getElementById("words2").innerHTML = "You Have Succesfully Defeated The Carrot";
    wait(750);
    window.location.href = "continue.html"; // Redirect To Continue Screen
  } else {
    // Enemy Turn
    document.getElementById("words2").innerHTML = `You Attack The Carrot For ${damnum} Damage!`;
    enemydamage = Math.floor(Math.random() * 3) + 0;
    let newhealth = health - enemydamage;
    health = newhealth;
    setTimeout(function () {
      showenemymessage(`The Carrot Attacks You For ${enemydamage} Damage!`);
    }, 3500);
    if (health < 1) {
      window.location.href = "dead.html";
    }
  }
  function showenemymessage() {
    if (enemydamage === 0) {
      document.getElementById("words2").innerHTML = `The Carrot Attacks You, but misses!`;
    }
    document.getElementById("words2").innerHTML = `The Carrot Attacks You For ${enemydamage} Damage!`;
  }
}

// Bribe Button
document.getElementById("bribebtn1").addEventListener("click", bribe);
// Bribe Function
let works = Math.random();
function bribe() {
  if (gold < 2 || works < 0.5) {
    document.getElementById("words2").innerHTML = "The carrot does not accept your bribe";
  } else {
    document.getElementById("words2").innerHTML = "You Successfully Bribe The Carrot";
    newgold = gold - 2;
    gold = newgold;
  }
}

// Flee Button

document.getElementById("runbtn1").addEventListener("click", flee);

function flee() {
  let chance = Math.random();
  if (chance <= 0.65) {
    document.getElementById("words2").innerHTML = "You successfully escape the carrot";
  } else {
    document.getElementById("words2").innerHTML = "You fail to escape the carrot";
    enemydamage = Math.floor(Math.random() * 3) + 0;
    let newhealth = health - enemydamage;
    health = newhealth;
    setTimeout(function () {
      showenemymessage(`The Carrot Attacks You For ${enemydamage} Damage!`);
    }, 3500);
    if (health < 1) {
      window.location.href = "dead.html";
    }
  }
  function showenemymessage() {
    document.getElementById("words2").innerHTML = `The Carrot Attacks You For ${enemydamage} Damage!`;
    if (health < 1) {
      window.location.href = "dead.html";
    }
  }
}

//   window.location.href = "continue.html"; // Redirect To Continue Screen
