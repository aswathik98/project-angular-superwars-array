import { Component, OnInit } from '@angular/core';
import { playerInter } from '../../playerInter';
import { playerData } from '../../playerData';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  player: playerInter[];
  playerData: any = {};
  
  constructor() { }

  ngOnInit(): void {
    this.player = playerData;
  }

}
