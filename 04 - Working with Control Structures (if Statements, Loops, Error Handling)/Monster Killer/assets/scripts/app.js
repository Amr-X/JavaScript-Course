const ATTACK_VALUE=10;
const STRONG_ATTACK_VALUE =15;
//---------------------------------------------
const MONSTER_ATTACK_VALUE=10;
//they now have the same value, Fair Now
const HEAL_VALUE = 20;
let chosenMaxLife=100;
let currentMonsterHealth =chosenMaxLife;
let currentPlayerHealth =chosenMaxLife;



adjustHealthBars(chosenMaxLife);

 function reset()
 {
     currentMonsterHealth =chosenMaxLife;
     currentPlayerHealth =chosenMaxLife;
     resetGame(chosenMaxLife);
 }

function endRound()
{
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    if(currentMonsterHealth<=0&&currentPlayerHealth>0){
        alert("You Won!");
        reset();
    }else if(currentMonsterHealth>0&&currentPlayerHealth<=0){
        alert("you Lost!");
        reset();
    }else if (currentMonsterHealth<=0&&currentPlayerHealth<=0){
        alert("you have a Draw!");
        reset();
    }
}
function AttackMode(mode){
    if (mode==='ATTACK'){
        maxDamage=ATTACK_VALUE;
    } else if(mode==='STRONG_ATTACK'){
        maxDamage=STRONG_ATTACK_VALUE;
    }
    const damage =dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    endRound();

}
 function attackHandler(){
     AttackMode("ATTACK");
 }
 function strongAttackHandler(){
     AttackMode("STRONG_ATTACK");

 }
 function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth>=chosenMaxLife-HEAL_VALUE){
        alert("You Can't heal to more that your max initial health.");
        healValue= chosenMaxLife- currentPlayerHealth;
    }else {
        healValue=HEAL_VALUE;
    }
    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth +=HEAL_VALUE;
     endRound();
 }
 attackBtn.addEventListener('click',attackHandler);
 strongAttackBtn.addEventListener('click',strongAttackHandler);
 healBtn.addEventListener('click',healPlayerHandler);