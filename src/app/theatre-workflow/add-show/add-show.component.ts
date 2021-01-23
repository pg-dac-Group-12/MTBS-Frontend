import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShowsFacade } from 'src/app/facade/ShowsFacade';
import { Shows } from 'src/app/models/shows.model';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  show:Shows = null! ;
  audiId:number = null! ;
  theatreId:number = null!;
  movieId:number = null!;
  constructor(private showFacade:ShowsFacade) { }

  ngOnInit(): void {
  }

  onSubmit(myForm:NgForm) {
    this.show = myForm.value ;
    this.showFacade.addShows(this.show,this.audiId,this.theatreId,this.movieId);
  }

}
