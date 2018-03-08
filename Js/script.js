$(document).ready(function() {
    $("#delete1").click(function() {
        $("div").remove(".gopro1");
    });
    $("#delete2").click(function() {
        $("div").remove(".drone1");
    });
    $("#delete3").click(function() {
        $("div").remove(".motherBoard1");
    });
});

function procurarElm() {
    var goPro = document.getElementById("goPro").checked;
    var drone = document.getElementById("drone").checked;
    var motherBoard = document.getElementById("motherBoard").checked;
    var divMotherBoard = document.getElementsByClassName("motherBoard");
    var divGoPro = document.getElementsByClassName("gopro");
    var divDrone = document.getElementsByClassName("drone");
    var divJavaShow = document.getElementById("javaShow");

    if (goPro == true) {
        searchGoPro()
    }
    if (drone == true) {
        searchDrone()
    }
    if (motherBoard == true) {
        searchMotherBoard()
    }

}

function excluirElm() {
    var goPro = document.getElementById("goProDel").checked;
    var drone = document.getElementById("droneDel").checked;
    var motherBoard = document.getElementById("motherBoardDel").checked;
    var divMotherBoard = document.getElementsByClassName("motherBoardDel");
    var divGoPro = document.getElementsByClassName("goproDel");
    var divDrone = document.getElementsByClassName("droneDel");
    var divJavaShow = document.getElementById("javaShowDel");

    if (goPro == true) {
        delGoPro()
    }
    if (drone == true) {
        delDrone()
    }
    if (motherBoard == true) {
        delMotherBoard()
    }

}

function delGoPro() {
    var list = document.getElementsByClassName("goProDel");
    for (var i = list.length - 1; 0 <= i; i--) {
        if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
        }
    }
}

function searchGoPro() {
    var list = document.getElementsByClassName("drone");
    for (var i = list.length - 1; 0 <= i; i--) {
        if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
        }
    }
    var list = document.getElementsByClassName("motherBoard");
    for (var i = list.length - 1; 0 <= i; i--) {
        if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
        }
    }
}

function delDrone() {
    var list = document.getElementsByClassName("droneDel");
    for (var i = list.length - 1; 0 <= i; i--) {
        if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
        }
    }
}

function searchDrone() {

    var list = document.getElementsByClassName("motherBoard");
    for (var i = list.length - 1; 0 <= i; i--) {
        if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
        }
    }
    var list = document.getElementsByClassName("gopro");
    for (var i = list.length - 1; 0 <= i; i--) {
        if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
        }
    }
}

function delMotherBoard() {
    var list = document.getElementsByClassName("motherBoardDel");
    for (var i = list.length - 1; 0 <= i; i--) {
        if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
        }
    }
}

function searchMotherBoard() {
    var list = document.getElementsByClassName("gopro");
    for (var i = list.length - 1; 0 <= i; i--) {
        if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
        }
    }
    var list = document.getElementsByClassName("drone");
    for (var i = list.length - 1; 0 <= i; i--) {
        if (list[i] && list[i].parentElement) {
            list[i].parentElement.removeChild(list[i]);
        }
    }
}

function reload() {
    location.reload()
}