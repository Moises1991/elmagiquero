import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MtgOneCardResponse } from './mtg-one-card-response';

@Injectable({
  providedIn: 'root'
})
export class MtgClientService {

  constructor(private httpcl: HttpClient) { }

  cardList(filter): Observable<MtgOneCardResponse> {
    return this.httpcl.get<MtgOneCardResponse>('https://api.magicthegathering.io/v1/cards/386616');
  }
}
