import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public router: Router, public homeService: HomeService) { }
  
  public studentList = [];
    ngOnInit(): void {
      this.homeService.getData().subscribe(data=>{
        console.log(data)
        this.studentList = data;
      })
      this.homeService.getIt().subscribe(todos=>{
        this.studentList = todos
      })
  }

  delStud(i){
    console.log(i)
    let listId = this.studentList[i].student_id
    let id={id:listId}
    this.homeService.delData(id).subscribe(data=>{
      if(data = 'true'){
        this.studentList.splice(i, 1)
      }
    })
    // localStorage.setItem('allStudent', JSON.stringify(this.studentList))
  }
  details(id){
    this.router.navigate([`/list/details/${id}`])
  }
  

}
