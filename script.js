
let title = document.querySelector(".title")
let turn = "x";

let listId = []


function end(n1, n2, n3){

    title.innerHTML = ` ${listId[n1]} winner`;
    document.getElementById("itme"+n1).style.background = "#000";
    document.getElementById("itme"+n2).style.background = "#000";
    document.getElementById("itme"+n3).style.background = "#000";

    setInterval(() => {
    title.innerHTML += ".";
    }, 1000);

    setTimeout(() => {
        location.reload()
    }, 3900);
}


function wenner(){

    for(let i = 1; i < 10; i++){
        listId[i] = document.getElementById("itme"+i).innerHTML
    } 

    
    if(listId[1] == listId[2] && listId[2] == listId[3] && listId[1] != ""){
        end(1, 2, 3)
    }
    else if(listId[4] == listId[5] && listId[5] == listId[6] && listId[5] != ""){
        end(4, 5, 6)
    }
    else if(listId[7] == listId[8] && listId[8] == listId[9] && listId[8] != ""){
        end(7, 8, 9)
    }
    else if(listId[1] == listId[4] && listId[4] == listId[7] && listId[1] != ""){
        end(1, 4, 7)
    }
    else if(listId[2] == listId[5] && listId[5] == listId[8] && listId[5] != ""){
        end(2, 5, 8)
    }
    else if(listId[3] == listId[6] && listId[6] == listId[9] && listId[9] != ""){
        end(3, 6, 9)
    }
    else if(listId[1] == listId[5] && listId[5] == listId[9] && listId[5] != ""){
        end(1, 5, 9)
    }
    else if(listId[3] == listId[5] && listId[5] == listId[7] && listId[5] != ""){
        end(3, 5, 7)
    }else if(listId[1] != "" && listId[2] != "" && listId[3] != "" && listId[4] != "" && listId[5] != "" && listId[6] != "" && listId[7] != "" && listId[8] != "" && listId[9] != ""){
        title.innerHTML = "Draw";
        setTimeout(() => {
            location.reload()
        }, 3000);
    }
}

function game(id){
    let item = document.getElementById(id);
    if (turn == "x" && item.innerHTML == ""){
        item.innerHTML = "x";
        turn = "o";
        title.innerHTML = "o"
    }else if (turn == "o" && item.innerHTML == ""){
        item.innerHTML = "o";
        turn = "x";
        title.innerHTML = "x"
    }
    wenner()
}











































































































