$(document).ready(function() {

var characterSelect = $("#character-select");
var yourCharacter = $("#your-character");
var yourCharacterHolder;
var enemiesHolder;
var yourEnemyHolder;
var oppSelect = $("#opp-select");
var opp = $("#opp");
var selectPhase = 0;

var krsOne = {
    name: "KRS-One",
    id: "krs-one",
    image: "assets/images/krs-one.jpg",
    healthPoints: 110,
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
    image: "assets/images/ll-cool-j.jpg",
    healthPoints: 100,
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
    image: "assets/images/kool-moe-dee.jpg",
    healthPoints: 80,
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
    image: "assets/images/ice-cube.jpg",
    healthPoints: 90,
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
    if (selectPhase===0) {
        console.log(event.currentTarget);
        yourCharacterHolder = $(event.currentTarget).detach();
        $(event.currentTarget).removeClass("img-box");
        $(event.currentTarget).addClass("img-box2");
        yourCharacter.append(yourCharacterHolder);
        enemiesHolder = characterSelect.detach();
        oppSelect.append(enemiesHolder);
        selectPhase++;
    } else if (selectPhase===1) {
        yourEnemyHolder = $(event.currentTarget).detach();
        $(".img-box").addClass("img-box2");
        $(".img-box").removeClass("img-box");
        opp.append(yourEnemyHolder);
        selectPhase++;
    }
});

// $(".mc-pic").on("click", function (event) {
//     if (selectPhase===0) {
//         yourCharacterHolder = $(event.target).detach();
//         $(event.target).removeClass("mc-pic");
//         $(event.target).addClass("mc-pic2");
//         yourCharacter.append(yourCharacterHolder);
//         enemiesHolder = characterSelect.detach();
//         oppSelect.append(enemiesHolder);
//         selectPhase++;
//     } else if (selectPhase===1) {
//         yourEnemyHolder = $(event.target).detach();
//         $(".mc-pic").addClass("mc-pic2");
//         $(".mc-pic").removeClass("mc-pic");
//         opp.append(yourEnemyHolder);
//         selectPhase++;
//     }
// });

});
