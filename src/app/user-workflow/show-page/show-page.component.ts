import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-page',
  templateUrl: './show-page.component.html',
  styleUrls: ['./show-page.component.css']
})
export class ShowPageComponent implements OnInit {
  movieId:number;
  constructor(private router: Router) {
    this.movieId = this.router.getCurrentNavigation()?.extras.state!.movieId;
  }
  ngOnInit(): void {
  }

}
