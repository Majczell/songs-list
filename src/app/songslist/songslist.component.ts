import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songslist',
  templateUrl: './songslist.component.html',
  styleUrls: ['./songslist.component.scss']
})
export class SongslistComponent implements OnInit {

  songs: Array<{
    author?: string,
    title?: string,
    length?: number, // length of song in seconds
  }> = [];
  songsCount: number;
  songsWithoutLength: number;
  songsLength: string;

  author: string = '';
  title: string = '';
  length: string = '';

  constructor() { }

  ngOnInit() {
    this.countSongs();
  }

  countLength(lengthInSeconds: number) {
    if (!lengthInSeconds) {
      return;
    }
    const minutes = Math.floor(lengthInSeconds / 60);
    const seconds = lengthInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

  countSongs() {
    this.songsCount = this.songs.length;

    let songsWithoutLength = 0;
    if (this.songs.length === 0) {
      this.songsLength = '0:00';
      return;
    }

    let songsLengthInSeconds = 0;
    this.songs.map(s => s.length).forEach(l => {
      if (l === undefined) {
        songsWithoutLength++;
        return;
      }
      songsLengthInSeconds += l;
    });
    this.songsWithoutLength = songsWithoutLength;
    this.songsLength = this.countLength(songsLengthInSeconds);
  }

  clearInputs() {
    this.author = '';
    this.title = '';
    this.length = '';
  }

  addSong() {
    const songLength = this.length.split(':');
    const minutes = parseInt(songLength[0], 10);
    const seconds = parseInt(songLength[1], 10);
    let length;
    if (Number.isInteger(minutes)) {
      length = (minutes * 60) + (seconds || 0);
    }
    this.songs.push({
      author: this.author,
      title: this.title,
      length
    });
    this.countSongs();
    this.clearInputs();
  }

  removeSong(index: number) {
    this.songs.splice(index, 1);
    this.countSongs();
    this.clearInputs();
  }

}
