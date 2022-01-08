// player attributes
var playerName = window.prompt("what is yourt robot's name?")
var playerHealth = 100;
var playerAttack = 10;

//enemies attributes
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
  console.log(
      playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining "
  );

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
  playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
  enemyName + " attacked " + playerName + " now has "  + playerHealth + " health remainig "
};

fight();

 console.log(playerName);
 console.log("Our robot's name is " + playerName);
 fight()
 console.log(
    playerName + " attacked " + enemyName + " now has " + enemyHealth + " health remaining. "
);

if (enemyHealth <= 0) {
    window.alert( enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left ");
}
