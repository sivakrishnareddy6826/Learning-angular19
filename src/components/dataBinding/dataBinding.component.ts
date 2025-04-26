import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


  constructor(){
    console.log("First Name"+this.firstName);
    
  }

  showWelcomeMessage(){
    alert("welcome learning angular19!")
  }

  OnCityChange() {
    alert("City got changed! " + this.firstName)
    }

}
