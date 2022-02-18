export class ShortenLink {
  constructor(
    public _id: string,
    public originalUrl: string,
    public shortUrl: string,
    public __v: string,
  ) {}
}

export interface ShortenLinkData {
  [key: string]: any;
  originalUrl: string;
}
