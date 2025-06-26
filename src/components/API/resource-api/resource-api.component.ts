import { Component, resource } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-api',
  imports: [],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent {

  constructor(private route: Router){}

  employeeList = resource({
      loader: ()=>{
        return fetch('https://localhost:7177/api/employees') // api call URl then subscribe
                .then((res) => res.json() as Promise<any[]>) // Promise is we learnt in Java script
      }
  })

    OnEdit(data: any) {
   this.route.navigate(['post-api', data.id]);
}
}
