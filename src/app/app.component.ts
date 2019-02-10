import { Component, OnInit } from '@angular/core';
import { MtgClientService } from './clients/mtgclient/mtg-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public mtgCard;

  constructor(
    private mtgcl: MtgClientService) {}

  ngOnInit() {
    this.mtgcl.cardList(null).
      subscribe(data => this.mtgCard = data.card.name);
  }

}
