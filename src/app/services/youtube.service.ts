import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl    = 'https://youtube.googleapis.com/youtube/v3/';
  private apikey        = 'AIzaSyCAv_9hbcQjkQgVeaJY-Tp5-qJo7Fncf9I';
  private playlist      = 'UUwNnutxeIqT2n39lcyLGU7Q';
  private nextPageToken = '';

  constructor( private http: HttpClient ) { }

  getVideos(){

    const url = `${ this.youtubeUrl }playlistItems`;

    const params = new HttpParams()
    .set('part', 'snippet')
    .set('maxResults', '10')
    .set('playlistId', this.playlist)
    .set('key', this.apikey)

    return this.http.get( url, { params });

  }

}
