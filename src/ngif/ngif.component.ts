import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { delay, Observable } from 'rxjs';

@Component({
  selector: 'ng-if',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css'],
})
export class NgIfComponent {
  isLoggedIn = false;
  chartName = '';
  bitcoinData: Observable<any>;

  constructor(public http: HttpClient) {
    this.getBitcoinData();
  }

  getBitcoinData() {
    // Below API is used for DEMO purpose. Please do research before you use it for any other purposes.
    this.bitcoinData = this.http
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .pipe(delay(3000));
  }
}
