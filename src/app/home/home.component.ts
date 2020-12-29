import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  name: any;
  constructor(private userservice :UsersService) { }
   ngOnInit(): void {
    }
    handlesearch(){
      this.name=document.getElementById('searchinput');
      this.name=this.name.value;
      this.userservice.setParram(this.name);
      this.userservice.getBookList().subscribe({
        next: (data) => {
          data['items'].forEach(element => {
            console.log(element.volumeInfo.title);
          });
          this.data=data['items']; 
        },
        error: (msg) => {
          console.log('error',msg);
        }
      })
      }
  }
