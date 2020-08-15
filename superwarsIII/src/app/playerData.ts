import { playerInter } from './playerInter';

let players :string[]=[
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

export const playerData :playerInter[]= players.map((value, index) => ({
    name: players[index],
    strength: Math.ceil(Math.random() * 100+1),
    image: '../../assets/super-' + (index + 1) + '.png',
    type: "hero|villian"
}));

function buildPlayers(players:any ,type:string):any{
    let fragment :string = '';
    let indexList :number[]=[];
    if (type == "hero") { 
        players.map((item, index) => {
            if (index % 2 == 0) 
                indexList.push(index);
        });
    } else {
        players.map((item, index) => {
            if (index % 2 != 0)
                indexList.push(index);
        });
    }
    console.log(indexList);
    
    fragment += indexList.map((index)=> `<div class="player">
                <img src="${players[index].image}" alt="">
                <div class="name">${players[index].name}</div>
                <div class="strength">${players[index].strength}</div></div>`
    );  
   console.log(players,fragment);
   return fragment;
}
   
window.onload =() =>{
    console.log("ONLOAD");
    
    document.getElementById('heroes').innerHTML = buildPlayers(playerData, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(playerData, 'villain');
}