import { Component, OnInit } from '@angular/core';
import { MtgClientService } from './clients/mtgclient/mtg-client.service';
import { MtgOneCardResponse } from './clients/mtgclient/mtg-one-card-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private mtgCard: MtgOneCardResponse;

  constructor(
    private mtgcl: MtgClientService) {}

  ngOnInit() {
    this.mtgcl.cardList(null).
      subscribe(data => this.mtgCard = data);
  }

}
