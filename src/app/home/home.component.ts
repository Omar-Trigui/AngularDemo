import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
users:object;
  constructor(private data:DataService) { }
  getUsers(){
   console.log();
   
    
  }


  ngOnInit() { //used to initialize component 
    //subscribe : to open The value of API
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users)
    } )
  }

}
