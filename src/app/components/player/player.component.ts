import {Component, OnInit} from '@angular/core';
import {PlayerService} from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {
  players: InterFacePlayers[] = [];

  constructor(private playerService: PlayerService) {
  }

  ngOnInit() {
    this.playerService.getPlayers().then((data: InterFacePlayers[]) => {
        this.players = data;
      },
      (error) => {
        console.log('Ошибка при получении списка футболистов: ', error);
      });
  }
}


