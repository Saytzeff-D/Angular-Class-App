import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(public actRoute: ActivatedRoute, public homeService: HomeService) { }
  public todosArr = []
  public todo = {title: '', completed: ''}
  ngOnInit(): void {
    let todoIndex = this.actRoute.snapshot.params.id;
    // let todos = this.homeService.getIt()
    this.homeService.giveMe(todoIndex).subscribe(todos=> {
      this.todo = todos
    })
    
    
  }

  logOut(){
    localStorage.removeItem('currentUser')
  }

}

