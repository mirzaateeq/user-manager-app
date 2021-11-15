import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.scss']
})
export class PlayGroundComponent implements OnInit {

  isActive = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //static readonly data sent from RoutingModule
    this.route.data.subscribe((data)=>{
      console.log('static data received from RoutingModule config: ', data);
      this.isActive = data.isActive;
    })
  }
}
