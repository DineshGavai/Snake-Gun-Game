let play=document.getElementById("Play");
let image_arr1=["soldier-left.png","snake.png","water.png"];
let image_arr2=["soldier-right.png","snake.png","water.png"];

const winner=(player_1_image, player_2_image)=>{
    if(player_1_image=="soldier-left.png" && player_2_image=="snake.png"){
        return "Winner is : Player 1 [Gun can kill snake]";
    }else if(player_1_image=="soldier-left.png" && player_2_image=="water.png"){
        return "Winner is : Player 2 [Water can damage gun]";
    }else if(player_1_image=="snake.png" && player_2_image=="soldier-right.png"){
        return "Winner is : Player 2 [Gun can kill snake]";
    }else if(player_1_image=="snake.png" && player_2_image=="water.png"){
        return "Winner is : Player 1 [snake can survive in water]";
    }else if(player_1_image=="water.png" && player_2_image=="soldier-right.png"){
        return "Winner is : Player 1 [Water can damage gun]";
    }else if(player_1_image=="water.png" && player_2_image=="snake.png"){
        return "Winner is : Player 2 [snake can survive in water]";
    }else if(player_1_image=="snake.png" && player_2_image=="soldier-right.png"){
        return "Winner is : Player 2 [Gun can kill snake]";
    }else if(player_1_image=="soldier-left.png" && player_2_image=="soldier-right.png"){
        return "Match Tie";
    }else if(player_1_image=="water.png" && player_2_image=="water.png"){
        return "Match Tie";
    }else if(player_1_image=="snake.png" && player_2_image=="snake.png"){
        return "Match Tie";
    }else{
        alert("Some error occured")
    }
}

play.addEventListener("click",()=>{
    let player_1_image=image_arr1[Math.floor(Math.random()*image_arr1.length)];
    let player_2_image=image_arr2[Math.floor(Math.random()*image_arr2.length)];
    document.querySelector(".image-1").style.backgroundImage =`url(${player_1_image})`;
    document.querySelector(".image-2").style.backgroundImage =`url(${player_2_image})`;
    document.getElementById("winner").innerHTML=winner(player_1_image, player_2_image);
});

addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        play.classList.add("hover-btn");
        play.click();  
        document.getElementById("winner").innerHTML=winner(player_1_image, player_2_image);
    }
});

addEventListener("keyup",(event)=>{
    if(event.key==="Enter"){
        play.classList.remove("hover-btn");
    }
});
