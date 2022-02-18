import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShortenLinksService } from './services/shortenLinks.service';
import { ShortenLink } from './models/shortenLink.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('f') form!: NgForm;
  shortLink!: string;
  short!: ShortenLink;

  constructor(private shortenLinksService: ShortenLinksService) { }

  onSubmit() {
    const shortenLinkData = this.form.value.originalUrl;
    console.log(shortenLinkData);
    this.shortenLinksService.createShortLink(shortenLinkData).subscribe({
      next: short => {
        this.short = short;
        this.shortLink = short.shortUrl;
        console.log(this.short);
        console.log(this.shortLink);

      },
      error: () => {
        console.error('URL is corrupted');
      }
    });
  }

  redirect() {
    this.shortenLinksService.getShortUrl(this.shortLink).subscribe();
  }
}
