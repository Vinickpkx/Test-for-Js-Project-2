$(document).ready(function() {
    $("#delete1").click(function() {
        $("div").remove(".gopro");
    });
    $("#delete2").click(function() {
        $("div").remove(".drone");
    });
});

function excluirElm() {
    var goPro = document.getElementById("goPro").checked;
    var drone = document.getElementById("drone").checked;


    if (goPro == true) {
        var list = document.getElementsByClassName("gopro");
        for (var i = list.length - 1; 0 <= i; i--) {
            if (list[i] && list[i].parentElement) {
                list[i].parentElement.removeChild(list[i]);
            }
        }
    } else if (drone == true) {
        var list = document.getElementsByClassName("drone");
        for (var i = list.length - 1; 0 <= i; i--) {
            if (list[i] && list[i].parentElement) {
                list[i].parentElement.removeChild(list[i]);
            }
        }
    } else {
        alert("Selecione uma categoria a ser deletada.")
    }

}