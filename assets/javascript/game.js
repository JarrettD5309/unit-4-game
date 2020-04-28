$(document).ready(function() {

var characterSelect = $("#character-select");
var yourCharacter = $("#your-character");
var yourCharacterHolder;
var enemiesHolder;
var yourEnemyHolder;
var attacker;
var defender;
var oppSelect = $("#opp-select");
var opp = $("#opp");
var phaseCounter = 0;

var krsOne = {
    name: "KRS-One",
    id: "krs-one",
    healthId: "krs-one-health",
    image: "assets/images/krs-one.jpg",
    healthPoints: 110,
    attackPower: 10,
    counterAttackPower: 20,
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
    healthPoints: 100,
    attackPower: 5,
    counterAttackPower: 30,
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
    attackPower: 20,
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
    healthPoints: 90,
    attackPower: 15,
    counterAttackPower: 15,
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

krsOne.pic(characterSelect);
llCoolJ.pic(characterSelect);
koolMoeDee.pic(characterSelect);
iceCube.pic(characterSelect);

$(".img-box").on("click", function (event) {
    if (phaseCounter===0) {
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
    } else if (phaseCounter===1) {
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
    defender.healthPoints = defender.healthPoints - attacker.attackPower;
    attacker.attackPower = attacker.attackPower*2;
    attacker.healthPoints = attacker.healthPoints-defender.counterAttackPower;
    $("#attacker").html("Health Points: " + attacker.healthPoints);
    $("#defender").html("Health Points: " + defender.healthPoints);
}

$(".button").on("click", function(event) {
    if (phaseCounter===2) {
        attack ();

    }

});







});
