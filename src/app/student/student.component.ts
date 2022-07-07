import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public homeService: HomeService) { }

  public list = {userId: '', title: '', completed: ''};
  ngOnInit(): void {
    let listIndex = this.actRoute.snapshot.params.index;
    this.homeService.giveMe(listIndex).subscribe(todos=> {
        this.list = todos
    })
  }
  

}
