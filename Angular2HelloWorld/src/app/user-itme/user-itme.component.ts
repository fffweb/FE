import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-user-itme',
  templateUrl: './user-itme.component.html',
  styleUrls: ['./user-itme.component.css']
})
export class UserItmeComponent implements OnInit {
  @Input() name: string;

  constructor() {
    // this.name = "Felipe";
   }

  ngOnInit() {
  }

}
