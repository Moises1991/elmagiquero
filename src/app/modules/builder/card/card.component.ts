import { Component, Input, OnInit } from '@angular/core';
import { MtgOneCardResponse } from 'src/app/clients/mtgclient/mtg-one-card-response';

import { MatDialog } from '@angular/material';

import { CardinfoComponent } from 'src/app/modules/builder/cardinfo/cardinfo.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() private card: MtgOneCardResponse;

  constructor(
    private dialog: MatDialog) { }

  ngOnInit() {
  }

  private showCardInfo() {
    let modal = this.dialog.open(CardinfoComponent, {
      height: '400px',
      width: '600px',
      panelClass: 'cardinfo-modal',
      data: this.card
    });
  }

}
