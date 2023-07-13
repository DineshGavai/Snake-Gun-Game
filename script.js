let play=document.getElementById("Play");
let image_arr=["gun.jfif","snake.jfif","water.jfif"];

const winner=(player_1_image, player_2_image)=>{
    if(player_1_image=="gun.jfif" && player_2_image=="snake.jfif"){
        return "Winner is : Player 1 [Gun can kill snake]";
    }else if(player_1_image=="gun.jfif" && player_2_image=="water.jfif"){
        return "Winner is : Player 2 [Water can damage gun]";
    }else if(player_1_image=="snake.jfif" && player_2_image=="gun.jfif"){
        return "Winner is : Player 2 [Gun can kill snake]";
    }else if(player_1_image=="snake.jfif" && player_2_image=="water.jfif"){
        return "Winner is : Player 1 [snake can survive in water]";
    }else if(player_1_image=="water.jfif" && player_2_image=="gun.jfif"){
        return "Winner is : Player 1 [Water can damage gun]";
    }else if(player_1_image=="water.jfif" && player_2_image=="snake.jfif"){
        return "Winner is : Player 2 [snake can survive in water]";
    }else if(player_1_image=="snake.jfif" && player_2_image=="gun.jfif"){
        return "Winner is : Player 2 [Gun can kill snake]";
    }else if(player_1_image=="gun.jfif" && player_2_image=="gun.jfif"){
        return "Match Tie";
    }else if(player_1_image=="water.jfif" && player_2_image=="water.jfif"){
        return "Match Tie";
    }else if(player_1_image=="snake.jfif" && player_2_image=="snake.jfif"){
        return "Match Tie";
    }else{
        alert("Some error occured")
    }
}

play.addEventListener("click",()=>{
    let player_1_image=image_arr[Math.floor(Math.random()*image_arr.length)];
    let player_2_image=image_arr[Math.floor(Math.random()*image_arr.length)];
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
