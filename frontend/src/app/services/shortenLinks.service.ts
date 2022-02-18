import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ShortenLink } from '../models/shortenLink.model';

@Injectable({
  providedIn: 'root'
})

export class ShortenLinksService {

  constructor(private http: HttpClient) { }

  getShortUrl(shortUrl: string) {
    return this.http.get(environment.apiUrl + '/shortenLinks/' + shortUrl);
  }

  createShortLink(shortenLinkData: string) {
    const body = {
      originalUrl: shortenLinkData
    };

    return this.http.post<ShortenLink>(environment.apiUrl + '/shortenLinks/links', body).pipe(
      map(response => {
        return new ShortenLink(
          response._id,
          response.originalUrl,
          response.shortUrl,
          response.__v,
        );
      })
    );
  }
}
