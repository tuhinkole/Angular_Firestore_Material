import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme = false;
  title = 'AngularFirestore';

  constructor(private router: Router){

  }

  login(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {

    // tslint:disable-next-line:quotemark
    console.log("this is app-component OnInit");
   }
}
