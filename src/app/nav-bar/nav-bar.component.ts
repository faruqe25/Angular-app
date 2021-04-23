import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  total: number;
  constructor(private communication: CommunicationService) { }

  ngOnInit(): void {
    this.communication.GetCartCount.subscribe((count) => {
      this.total = count;
    });
    if (localStorage.getItem("CartList")) {
      this.total = (JSON.parse(localStorage.getItem("CartList"))).length
    }
    else {
      this.total = 0
    }
  }

}
