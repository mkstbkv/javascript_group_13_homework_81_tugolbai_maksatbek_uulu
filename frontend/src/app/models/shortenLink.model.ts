export class ShortenLink {
  constructor(
    public originalUrl: string,
    public shortUrl: string,
  ) {}
}

export interface ShortenLinkData {
  [key: string]: any;
  originalUrl: string;
  shortUrl: string;
}
