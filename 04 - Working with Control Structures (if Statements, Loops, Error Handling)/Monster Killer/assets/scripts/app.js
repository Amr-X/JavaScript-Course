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
let lastLoggedEntry;

// Input for the chosenMax Life
function getMaxLifeValue() {
    const enteredValue = prompt('Maximum life for you and the monster.', '100');
    const parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw {message: 'Invalid Number!'}
    }
    return parsedValue;
}

let chosenMaxLife;
try {
    chosenMaxLife = getMaxLifeValue()
} catch (error) {
    console.log(error);
    chosenMaxLife = 100;
    alert("You entered something wrong!")
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
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    // How the bonus works
    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        setPlayerHealth(initialPlayerHealth);
        currentPlayerHealth = initialPlayerHealth;
        alert('You have been saved!');
    }

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
    //Ternary Operator
    let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    let logEvent = mode === MODE_STRONG_ATTACK ? LOG_EVENT_STRONG_PLAYER_ATTACK : LOG_EVENT_PLAYER_ATTACK;
    // if (mode === MODE_ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === MODE_STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_STRONG_PLAYER_ATTACK;
    // }
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

function healPlayerHandler() {
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
    // FOR lOOP
    // for (let i =0; i<battleLog.length; i++)
    // console.log(battleLog[i]);\

    //FOR OF used for arrays
    // Every time the logEntry variable is different based on the array
    // no access for the index here and a bit slow
    // for (const logEntry of battleLog) {
    //     console.log(logEntry);
    // }


    console.log('--------------------')
    let i = 0;
    for (const logEntry of battleLog) {
        if ((!lastLoggedEntry && lastLoggedEntry !== 0) || lastLoggedEntry < i) {


            console.log(`#${i}`);
            for (const key in logEntry) {
                console.log(`${key}=> ${logEntry[key]}`);

            }
            lastLoggedEntry = i;
            break;
        }
        i++
    }

}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', showLogHandler);