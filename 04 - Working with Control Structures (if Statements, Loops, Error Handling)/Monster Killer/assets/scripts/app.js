const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
//they now have the same value, Fair Now
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_STRONG_PLAYER_ATTACK = 'STRONG_PLAYER_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

// Input for the chosenMax Life
const enteredValue = prompt('Maximum life for you and the monster.', '100');
let chosenMaxLife = parseInt(enteredValue);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    alert('Entered Value is invalid! Your initial value is 100.')
    chosenMaxLife = 100;
}
let battleLog = [];
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true
//----------------------------------------------------------------
adjustHealthBars(chosenMaxLife);

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry;
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "Monster",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth

        };
    } else if (ev === LOG_EVENT_STRONG_PLAYER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "Monster",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth

        };
    } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "Player",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth

        };
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth

        };
    } else if (ev === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth

        };
    }
    battleLog.push(logEntry);
}

function endRound() {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You Won!");
        writeToLog(LOG_EVENT_GAME_OVER, "Player Won", currentMonsterHealth, currentPlayerHealth);
        reset();

    } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
        alert("you Lost!");
        writeToLog(LOG_EVENT_MONSTER_ATTACK, "Monster Won", currentMonsterHealth, currentPlayerHealth);
        reset();
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert("you have a Draw!");
        writeToLog(LOG_EVENT_MONSTER_ATTACK, "Draw", currentMonsterHealth, currentPlayerHealth);

        reset();
    }
}

function AttackMode(mode) {
    let maxDamage;
    let logEvent;
    if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_STRONG_PLAYER_ATTACK;
    }
    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    endRound();

}

function attackHandler() {
    AttackMode("ATTACK");

}

function strongAttackHandler() {
    AttackMode("STRONG_ATTACK");
}

function healPlayerHandler() { //////?????????/////??///??//
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You Can't heal to more that your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);

    endRound();
}

function showLogHandler() {
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', showLogHandler);