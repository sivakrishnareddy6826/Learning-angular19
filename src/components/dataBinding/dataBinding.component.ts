import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dataBinding',
  imports:[FormsModule],
  templateUrl: './dataBinding.component.html',
  styleUrls: ['./dataBinding.component.css']
})
export class DataBindingComponent {

  firstName: string = "Siva Krishna Reddy";
  rollNumber: Number = 28;
  isActive: Boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = "Enter your full name";
  div1ClassName : string ="bg-primary"
  selectedCity: string =""


  constructor(private route: Router){
    console.log("First Name"+this.firstName);

  }

  showWelcomeMessage(){
    alert("welcome learning angular19!")
  }

  OnCityChange() {
    alert("City got changed! " + this.firstName)
  }

  // This is example for How to navigate by using Route service from .ts file,
  // To achieve this you need to inject Route in constructor and use NavigateByUrl
  navigateToAdmin(){
    this.route.navigateByUrl("/admin");
  }


}
