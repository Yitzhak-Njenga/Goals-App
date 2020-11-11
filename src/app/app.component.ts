import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Goals';
  goal = 'Watch Finding Nemo'
  goals:Goal[] = [
    {id:1, name: 'Watch finding Nemo'},
    {id:2, name: 'Buy cookies'},
    {id:3, name: 'Get new phone case'},
    {id:4, name: 'Get Dog Food'},
    {id:5, name: 'Solve math homework'},
    {id:6, name: 'Plot my world domination plan'},
  ];
  // goals:string[];

  // constructor(){
  //   this.goals = ['Watch finding Nemo', 'Buy cookies', 'Get new phone case']
  // }
 
}
export class Goal {
  id: number;
  name: string
}
// export class AppComponent{
//   goal = 'Watch Finding Nemo'
// }