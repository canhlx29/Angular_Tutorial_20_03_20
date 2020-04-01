import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataServiceService {
  private _textFromHiSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  testFromHii$: Observable<string> = this._textFromHiSubject.asObservable();

  setTextFromHi(text: string) {
    this._textFromHiSubject.next(text);
  }

  constructor() {}
}
