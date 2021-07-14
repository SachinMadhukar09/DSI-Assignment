import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DSI Internship Assignment';
  userData:any=[];
  username:any;

  
  constructor(private userDataService:UserDataService ){
    
  }
  ngOnInit():void{
    this.userDataService.getUserData().subscribe(data=>{
      console.log(data)
      this.userData=data;
    })
  }
  Search(){
    if(this.username==""){
      this.ngOnInit();
    }
    else{
      this.userData = this.userData.filter((res: { username: string; }) =>{
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase())

      })
    }
    }
  
  
}
