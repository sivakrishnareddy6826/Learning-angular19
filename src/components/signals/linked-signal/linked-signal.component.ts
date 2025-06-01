import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal-component',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {

  firstName=signal("Siva Krishna");
  lastName = signal("Kamireddy");

  fullName = linkedSignal({
    source: this.firstName,
    computation:(newOptions,previous)=>{
      const fullName = newOptions +" "+this.lastName();
      return fullName;
    }
  })

    changeName()
    {
      this.firstName.set("Siva Raj Reddy")
    }
}
