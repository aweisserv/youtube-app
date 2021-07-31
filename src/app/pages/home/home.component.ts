import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

import { Video } from 'src/app/models/youtube.models';
import Swal from 'sweetalert2'

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

    this.cargarVideos();

  }

  cargarVideos() {
    this.youtubeService.getVideos()
        .subscribe( resp => {
          console.log( resp );
          this.videos.push( ...resp ); //ECMA SCRIPT 6 PUSH + OPERADOR SPREAD. SUMA NUEVOS RESULTADOS AL ARREGLO DE VIDEOS.
    });
  }

  mostrarVideo( video: Video ) {

    Swal.fire({
      html: `
      <h5> ${ video.title } </h5>
      <hr>
      <iframe width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/${ video.resourceId.videoId }" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; 
              autoplay; 
              clipboard-write; 
              encrypted-media; 
              gyroscope; 
              picture-in-picture" 
              allowfullscreen></iframe>
            `
    })

  }

}
