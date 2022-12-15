

let boxes = document.querySelectorAll('.box')
let caseEmpty = ["","","","","","","","",""]
let tour = 0
let player = document.getElementById("player")
    for (let box of boxes){
        box.addEventListener('click', add)
        console.log(caseEmpty)
    }



function add(){
    
       if(this.textContent == ""){
            
            if(tour%2 == 0){
            this.textContent = 'x'
            caseEmpty[this.dataset.class] ="x"
            console.log('joueur1')
            player.textContent = 'Au tour du 2nd joueur'    
            }else{
            this.textContent = '0'
            console.log('joueur2')
            player.textContent = 'Au tour du 1er joueur'
            caseEmpty[this.dataset.class] ='0'
            }
            tour++

            if(caseEmpty[0] == caseEmpty[1] && caseEmpty[1] == caseEmpty[2] && caseEmpty[0] != ''){
                alert('win')
            }
            else if (caseEmpty[3] == caseEmpty[4] && caseEmpty[4] == caseEmpty[5] && caseEmpty[3] != ''){
                alert('win')
            }
            else if (caseEmpty[6] == caseEmpty[7] && caseEmpty[7] == caseEmpty[8] && caseEmpty[6] != ''){
                alert('win')
            }
            else if (caseEmpty[0] == caseEmpty[3] && caseEmpty[3] == caseEmpty[6] && caseEmpty[3] != ''){
                alert('win')
            }
            else if (caseEmpty[1] == caseEmpty[4] && caseEmpty[4] == caseEmpty[7] && caseEmpty[1] != ''){
                alert('win')
            }
            else if (caseEmpty[2] == caseEmpty[3] && caseEmpty[3] == caseEmpty[6] && caseEmpty[2] != ''){
                alert('win')
            }
            else if (caseEmpty[0] == caseEmpty[4] && caseEmpty[4] == caseEmpty[8] && caseEmpty[0] != ''){
                alert('win')
            }
            else if (caseEmpty[2] == caseEmpty[4] && caseEmpty[4] == caseEmpty[6] && caseEmpty[2] != ''){
                alert('win')
            }
            else if (!caseEmpty.includes('') )
                alert('partie nulle')
            
                
    console.log(caseEmpty)
    }
}       

  
    

    




















// function playerTurn(){
//     console.log('go morpion')
//     let players = [
//         'joueur1',
//         'joueur2'
//     ]
    
    // for (let i = 0; i < player.length; i++ )
        
    //     if (i != 0){
    //         console.log(player[i])
            
    //     } else  { 
    //         console.log(player[i])
    //     } 
        
       
    // players.forEach(function(player) {
    //     if(player == 0){
    //         console.log(players[0])
    //     } else{
    //         console.log(players[1])
    //     }

    // });
    // if(selected %1  == 0){
        
    //     boxes.textContent ='x'
    //     console.log('joueur 1')
    //     selected++
    // }else{selected%1 != 0
    //     boxes.textContent ='o'
    //     console.log('joueur2')
    // }


// if (this.dataset.class == 1){
    //     caseEmpty.push[8. ]
    //     console.log(caseEmpty)
    // }
    // else if(this.dataset.class == 2){
    //     caseEmpty.push[3]

    // }
