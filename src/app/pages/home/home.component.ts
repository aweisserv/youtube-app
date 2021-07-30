import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

import { Video } from 'src/app/models/youtube.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {


  videos: Video[] = [];

  constructor( private youtubeService: YoutubeService ) { }

  ngOnInit(): void {

    this.youtubeService.getVideos()
        .subscribe( resp => {
          console.log( resp );
          this.videos.push( ...resp ); //ECMA SCRIPT 6 PUSH + OPERADOR SPREAD. SUMA NUEVOS RESULTADOS AL ARREGLO DE VIDEOS.
    });

  }

}
