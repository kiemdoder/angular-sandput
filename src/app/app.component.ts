import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sandput';

  logSomething() {
    console.log('toets 1 2 3');
  }

  print() {
    window.print();
  }
}
