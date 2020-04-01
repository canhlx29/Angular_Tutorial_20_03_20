import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked
} from "@angular/core";
import { DataServiceService } from "./services/data-service.service";

@Component({
  selector: "app-root",
  template: `
    <h1 [class.with-border]="withBorder">CanhlX Parent {{ title }}</h1>
    <button (click)="btnClick()">Hide Border</button>
    <app-hi [text]="title" (buttonClicked)="btnClickFromChild($event)"></app-hi>
    <app-wellcome></app-wellcome>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked {
  title = "angular-canhlx299";
  withBorder = true;
  btnClick(): void {
    this.withBorder = !this.withBorder;
    this.title = "Change From Parent!";
    this._dataService.setTextFromHi(this.title);
  }
  btnClickFromChild(event) {
    this.title = event;
  }
  constructor(private _dataService: DataServiceService) {}
  ngAfterContentChecked(): void {
    console.log("Parent AfterContentChecked!");
  }
  ngAfterViewChecked(): void {
    console.log("Parent AfterViewChecked!");
  }
  ngAfterContentInit(): void {
    console.log("Parent AfterContentInit!");
  }
  ngAfterViewInit(): void {
    console.log("Parent AfterViewInit!");
  }
  ngOnDestroy(): void {
    console.log("Parent OnDestrory!");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("Parent OnChanges");
  }
  ngOnInit(): void {
    console.log("Parent OnInit!");
  }
}
