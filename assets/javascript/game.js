var yourCharacter = $("#your-character");
var characterSelect = $("#character-select");

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
    if (event.target.id === "krs-one") {
        krsOne.pic(yourCharacter);
    } else if (event.target.id === "ll-cool-j") {
        llCoolJ.pic(yourCharacter);
    } else if (event.target.id === "kool-moe-dee") {
        koolMoeDee.pic(yourCharacter);
    } else if (event.target.id === "ice-cube") {
        iceCube.pic(yourCharacter);
    }
});


