import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { GroupService } from '../group.service';
import { Player } from '../player';
import { Observable, Subject } from 'rxjs';
import { Group } from '../group';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  player: Player = new Player(0, "", "", "", 0);
  groups: Observable<Group[]>;
  players: Observable<Player[]>;
  dtTrigger: Subject<any> = new Subject();
  groupList: any;
  deleteMessage = false;
  dtOptions: DataTables.Settings = {};

  constructor(private playerService: PlayerService, private groupService: GroupService) { }

  ngOnInit() {

    this.playerService.getPlayerList().subscribe(data => {
      this.players = data;
      this.dtTrigger.next();
    });
    this.groupService.getGroupList().subscribe(data => {
      this.groups = data;
    });
  }

  getGroup(player: Player) {
    this.groupService.getGroup(player.id).subscribe(data => {
      this.groupList = data;
    });
    return this.groupList.groupNumber;
  }

  deletePlayer(id: number) {
    console.log('push method delete');
    /** To do refactor */

  }

  updatePlayer(id:number) {
    console.log('push method update');
    /***** to do refactor */
    
    /*** to do refactor name* */
  }

  addPlayerToGame() {

  }

  deletePlayerToGame() {

  }
}
