import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { MtgOneCardResponse } from 'src/app/clients/mtgclient/mtg-one-card-response';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardinfoComponent implements OnInit {

  constructor(
    public modal: MatDialogRef<CardinfoComponent>,
    @Inject(MAT_DIALOG_DATA) public info: MtgOneCardResponse) { }

  ngOnInit() {
  }

}
