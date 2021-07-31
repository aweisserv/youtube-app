import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { YoutubeResponse } from '../models/youtube.models';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private youtubeUrl    = 'https://youtube.googleapis.com/youtube/v3';
  private apikey        = 'AIzaSyCAv_9hbcQjkQgVeaJY-Tp5-qJo7Fncf9I';
  private playlist      = 'UUwNnutxeIqT2n39lcyLGU7Q';
  private nextPageToken = '';

  constructor( private http: HttpClient ) { }

  getVideos() {

    const url = `${ this.youtubeUrl }/playlistItems`;

    const params = new HttpParams()
    .set('part', 'snippet')
    .set('maxResults', '10')
    .set('playlistId', this.playlist)
    .set('key', this.apikey)
    .set('pageToken', this.nextPageToken)

    return this.http.get<YoutubeResponse>( url, { params })
              .pipe(

                map( resp => {
                  this.nextPageToken = resp.nextPageToken;
                  return resp.items;
                }),

                map( items => {
                  return items.map( video => video.snippet )
                })

              )
  }

}
