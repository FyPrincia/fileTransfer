function _$(i){
    return document.getElementById(i);
}
function _N(n){
    return document.getElementByName(n);
}

let parc = [
    [0, 1, 10],
    [1, 2, 5],
    [2, 3, 15],
    [0, 4, 20]
];

let cheminTrouve = false;
let succPred =[
    [1 , 4],
    [0, 2],
    [1, 3],
    [2],
    [0]
];
let sommetNonVisite = [0, 1, 2 , 3, 4];
let pcc;

function sommetReste(s){
    for(var i=0; i<5; i++){
        if(s == sommetNonVisite[i]){
            sommetNonVisite[i] = sommetNonVisite[4];
            sommetNonVisite.pop();
            break;
        }
    }
}

window.addEventListener('load', function(e){
    e.preventDefault();
    var f = _$('form1');

    f.addEventListener('submit', function(e){
        e.preventDefault();
        alert('Envoyé');
        var src = parseInt(_$('src').value);
        var rcp = parseInt(_$('rcp').value);
            
        switch(src){
            case 0:
                var s = 0;
                while(s<3){
                    if(succPred[0][s] == rcp){
                        pcc = succPred[0][s];
                        cheminTrouve = true;
                    }
                    s++;
                }
            break;
            case 1:
                var s = 0;
                while(s<3){
                    if(succPred[1][s] == rcp){
                        pcc = succPred[1][s];
                        cheminTrouve = true;
                    }
                    s++;
                }
            break;
            case 2:
                var s = 0;
                while(s<3){
                    if(succPred[2][s] == rcp){
                        pcc = succPred[2][s];
                        cheminTrouve = true;
                    }
                    s++;
                }
            break;
            case 3:
                var s = 0;
                while(s<3){
                    if(succPred[3][s] == rcp){
                        pcc = succPred[3][s];
                        cheminTrouve = true;
                    }
                    s++;
                }
            break;
            case 4:
                var s = 0;
                while(s<3){
                    if(succPred[4][s] == rcp){
                        pcc = succPred[4][s];
                        cheminTrouve = true;
                    }
                    s++;
                }
            break;
            case 5:
                var s = 0;
                while(s<3){
                    if(succPred[5][s] == rcp){
                        pcc = succPred[5][s];
                        cheminTrouve = true;
                    }
                    s++;
                }
            break;

        }
        var o = _$('output');
        o.value = parseInt(pcc);
    });
});



