$(document).ready(function() {

var characterSelect = $("#character-select");
var yourCharacter = $("#your-character");
var instructions = $("#instructions");
var yourCharacterHolder;
var enemiesHolder;
var yourEnemyHolder;
var attacker;
var defender;
var oppSelect = $("#opp-select");
var opp = $("#opp");
var phaseCounter = -1;

var krsOne = {
    name: "KRS-One",
    id: "krs-one",
    healthId: "krs-one-health",
    image: "assets/images/krs-one.jpg",
    healthPoints: 60,
    attackPower: 4,
    currentAttackPower: 4,
    counterAttackPower: 2,
    pic: function(location) {
        var imgBoxDiv = $("<div>");
        imgBoxDiv.addClass("img-box");
        location.append(imgBoxDiv);
        var newImg = $("<img>");
        newImg.attr("src", this.image);
        newImg.addClass("mc-pic");
        newImg.attr("id", this.id);
        newImg.attr("alt", this.name + " Picture");
        var nameDiv = $("<p>");
        nameDiv.text(this.name);
        nameDiv.addClass("name-text");
        var healthDiv = $("<p>");
        healthDiv.attr("id",this.healthId);
        healthDiv.text("Health Points: " + this.healthPoints);
        healthDiv.addClass("health-text");
        imgBoxDiv.append(newImg);
        imgBoxDiv.append(nameDiv);
        imgBoxDiv.append(healthDiv);
    }
}

var llCoolJ = {
    name: "LL Cool J",
    id: "ll-cool-j",
    healthId: "ll-cool-j-health",
    image: "assets/images/ll-cool-j.jpg",
    healthPoints: 70,
    attackPower: 3,
    currentAttackPower: 3,
    counterAttackPower: 1,
    pic: function(location) {
        var imgBoxDiv = $("<div>");
        imgBoxDiv.addClass("img-box");
        location.append(imgBoxDiv);
        var newImg = $("<img>");
        newImg.attr("src", this.image);
        newImg.addClass("mc-pic");
        newImg.attr("id", this.id);
        newImg.attr("alt", this.name + " Picture");
        var nameDiv = $("<p>");
        nameDiv.text(this.name);
        nameDiv.addClass("name-text");
        var healthDiv = $("<p>");
        healthDiv.attr("id",this.healthId);
        healthDiv.text("Health Points: " + this.healthPoints);
        healthDiv.addClass("health-text");
        imgBoxDiv.append(newImg);
        imgBoxDiv.append(nameDiv);
        imgBoxDiv.append(healthDiv);
    }
}

var koolMoeDee = {
    name: "Kool Moe Dee",
    id: "kool-moe-dee",
    healthId: "kool-moe-dee-health",
    image: "assets/images/kool-moe-dee.jpg",
    healthPoints: 80,
    attackPower: 2,
    currentAttackPower: 2,
    counterAttackPower: 5,
    pic: function(location) {
        var imgBoxDiv = $("<div>");
        imgBoxDiv.addClass("img-box");
        location.append(imgBoxDiv);
        var newImg = $("<img>");
        newImg.attr("src", this.image);
        newImg.addClass("mc-pic");
        newImg.attr("id", this.id);
        newImg.attr("alt", this.name + " Picture");
        var nameDiv = $("<p>");
        nameDiv.text(this.name);
        nameDiv.addClass("name-text");
        var healthDiv = $("<p>");
        healthDiv.attr("id",this.healthId);
        healthDiv.text("Health Points: " + this.healthPoints);
        healthDiv.addClass("health-text");
        imgBoxDiv.append(newImg);
        imgBoxDiv.append(nameDiv);
        imgBoxDiv.append(healthDiv);
    }
}

var iceCube = {
    name: "Ice Cube",
    id: "ice-cube",
    healthId: "ice-cube-health",
    image: "assets/images/ice-cube.jpg",
    healthPoints: 65,
    attackPower: 1,
    currentAttackPower: 1,
    counterAttackPower: 10,
    pic: function(location) {
        var imgBoxDiv = $("<div>");
        imgBoxDiv.addClass("img-box");
        location.append(imgBoxDiv);
        var newImg = $("<img>");
        newImg.attr("src", this.image);
        newImg.addClass("mc-pic");
        newImg.attr("id", this.id);
        newImg.attr("alt", this.name + " Picture");
        var nameDiv = $("<p>");
        nameDiv.text(this.name);
        nameDiv.addClass("name-text");
        var healthDiv = $("<p>");
        healthDiv.attr("id",this.healthId);
        healthDiv.text("Health Points: " + this.healthPoints);
        healthDiv.addClass("health-text");
        imgBoxDiv.append(newImg);
        imgBoxDiv.append(nameDiv);
        imgBoxDiv.append(healthDiv);
    }
}

var instText = ["To win you must defeat all 3 opposing MCs.","The order that you choose your opponents is important!","You gain experience as you battle.","If at any point your health points dip to zero you lose.","Choose your MC to begin!"]



function runInstructions() {
    var instDiv1 = $("<p>");
    instDiv1.text("To win you must defeat all 3 opposing MCs.");
    instructions.append(instDiv1);
    setTimeout(function() {
        instructions.empty();
        var instDiv2 = $("<p>");
        instDiv2.text("The order that you choose your opponents is important!");
        instructions.append(instDiv2);
    }, 3000);
    setTimeout(function() {
        instructions.empty();
        var instDiv3 = $("<p>");
        instDiv3.text("You gain experience as you battle.");
        instructions.append(instDiv3);
    }, 6000);
    setTimeout(function() {
        instructions.empty();
        var instDiv4 = $("<p>");
        instDiv4.text("If at any point your health points dip to zero you lose.");
        instructions.append(instDiv4);
    }, 9000);
    setTimeout(function() {
        instructions.empty();
        var instDiv5 = $("<p>");
        instDiv5.text("Choose your MC to begin!");
        instructions.append(instDiv5);
        phaseCounter++;
    }, 12000);
    
    
}


runInstructions();
krsOne.pic(characterSelect);
llCoolJ.pic(characterSelect);
koolMoeDee.pic(characterSelect);
iceCube.pic(characterSelect);


$(".img-box").on("click", function (event) {
    if (phaseCounter===0) {
        instructions.empty();
        $(event.currentTarget).children(".health-text").attr("id", "attacker");
        yourCharacterHolder = $(event.currentTarget).detach();
        $(event.currentTarget).removeClass("img-box");
        $(event.currentTarget).addClass("img-box2");
        yourCharacter.append(yourCharacterHolder);
        enemiesHolder = characterSelect.detach();
        oppSelect.append(enemiesHolder);
        if ($(event.currentTarget).children("img").attr("id")==="krs-one") {
            attacker = krsOne;
        } else if ($(event.currentTarget).children("img").attr("id")==="ll-cool-j") {
            attacker = llCoolJ;
        } else if ($(event.currentTarget).children("img").attr("id")==="kool-moe-dee") {
            attacker = koolMoeDee;
        } else if ($(event.currentTarget).children("img").attr("id")==="ice-cube") {
            attacker = iceCube;
        } 
        phaseCounter++;
    } else if (phaseCounter===1 || phaseCounter===3 || phaseCounter===5) {
        $(event.currentTarget).children(".health-text").attr("id", "defender")
        yourEnemyHolder = $(event.currentTarget).detach();
        $(".img-box").addClass("img-box2");
        $(".img-box").removeClass("img-box");
        opp.append(yourEnemyHolder);
        if ($(event.currentTarget).children("img").attr("id")==="krs-one") {
            defender = krsOne;
        } else if ($(event.currentTarget).children("img").attr("id")==="ll-cool-j") {
            defender = llCoolJ;
        } else if ($(event.currentTarget).children("img").attr("id")==="kool-moe-dee") {
            defender = koolMoeDee;
        } else if ($(event.currentTarget).children("img").attr("id")==="ice-cube") {
            defender = iceCube;
        }
        phaseCounter++;
    } 
});

function attack () {
    console.log(attacker.currentAttackPower);
    defender.healthPoints = defender.healthPoints - attacker.currentAttackPower;
    attacker.currentAttackPower = attacker.currentAttackPower+attacker.attackPower;
    attacker.healthPoints = attacker.healthPoints-defender.counterAttackPower;
    $("#attacker").html("Health Points: " + attacker.healthPoints);
    $("#defender").html("Health Points: " + defender.healthPoints);
}

$(".button").on("click", function(event) {
    if (phaseCounter===2 || phaseCounter===4 || phaseCounter===6) {
        attack ();
        if (attacker.healthPoints<=0 && defender.healthPoints<=0) {
            alert("both lose");
            
        } else if (defender.healthPoints<=0) {
            alert("You have defeated " + defender.name);
            alert("pick a new opponent");
            $("#opp").empty();
            phaseCounter++;
        } else if (attacker.healthPoints<=0) {
            alert("game over");
        }

    }

});







});
