import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  private _textFromHi: string;
  get textFromHi() {
    return this._textFromHi;
  }

  setTextFromHi(text: string) {
    this._textFromHi = text;
  }

  constructor() {}
}
