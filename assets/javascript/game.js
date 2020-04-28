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
    pic: function(location) {
        var newImg = $("<img>");
        newImg.attr("src", this.image);
        newImg.addClass("mc-pic");
        newImg.attr("id", this.id);
        newImg.attr("alt", this.name + " Picture");
        location.append(newImg);
    }
}

var llCoolJ = {
    name: "LL Cool J",
    id: "ll-cool-j",
    image: "assets/images/ll-cool-j.jpg",
    pic: function(location) {
        var newImg = $("<img>");
        newImg.attr("src", this.image);
        newImg.addClass("mc-pic");
        newImg.attr("id", this.id);
        newImg.attr("alt", this.name + " Picture");
        location.append(newImg);
    }
}

var koolMoeDee = {
    name: "Kool Moe Dee",
    id: "kool-moe-dee",
    image: "assets/images/kool-moe-dee.jpg",
    pic: function(location) {
        var newImg = $("<img>");
        newImg.attr("src", this.image);
        newImg.addClass("mc-pic");
        newImg.attr("id", this.id);
        newImg.attr("alt", this.name + " Picture");
        location.append(newImg);
    }
}

var iceCube = {
    name: "Ice Cube",
    id: "ice-cube",
    image: "assets/images/ice-cube.jpg",
    pic: function(location) {
        var newImg = $("<img>");
        newImg.attr("src", this.image);
        newImg.addClass("mc-pic");
        newImg.attr("id", this.id);
        newImg.attr("alt", this.name + " Picture");
        location.append(newImg);
    }
}

krsOne.pic(characterSelect);
llCoolJ.pic(characterSelect);
koolMoeDee.pic(characterSelect);
iceCube.pic(characterSelect);



$(".mc-pic").on("click", function (event) {
    if (selectPhase===0) {
        yourCharacterHolder = $(event.target).detach();
        $(event.target).removeClass("mc-pic");
        $(event.target).addClass("mc-pic2");
        yourCharacter.append(yourCharacterHolder);
        enemiesHolder = characterSelect.detach();
        oppSelect.append(enemiesHolder);
        selectPhase++;
    } else if (selectPhase===1) {
        yourEnemyHolder = $(event.target).detach();
        $(".mc-pic").addClass("mc-pic2");
        $(".mc-pic").removeClass("mc-pic");
        opp.append(yourEnemyHolder);
        selectPhase++;
    }
});

});
