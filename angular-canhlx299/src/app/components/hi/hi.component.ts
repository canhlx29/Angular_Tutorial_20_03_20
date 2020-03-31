import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  AfterContentChecked,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { DataServiceService } from "src/app/services/data-service.service";
//import { EventEmitter } from 'protractor';

@Component({
  selector: "app-hi",
  template: `
    <h1>Hi {{ text }}!</h1>
    <button (click)="btnClick()">Hide Border</button>
  `,
  styleUrls: ["./hi.component.css"]
})
export class HiComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked {
  @Input() text: string;
  @Output() buttonClicked: EventEmitter<any> = new EventEmitter<any>();

  btnClick() {
    this.text = "Change From Child!";
    this.buttonClicked.emit(this.text);
  }

  constructor(private _dataService: DataServiceService) {}

  ngOnInit(): void {
    console.log("Child OnInit!");
    this._dataService.setTextFromHi(this.text);
  }
  ngAfterContentChecked(): void {
    console.log("Child AfterContentChecked!");
  }
  ngAfterViewChecked(): void {
    console.log("Child AfterViewChecked!");
  }
  ngAfterContentInit(): void {
    console.log("Child AfterContentInit!");
  }
  ngAfterViewInit(): void {
    console.log("Child AfterViewInit!");
  }
  ngOnDestroy(): void {
    console.log("Child OnDestrory!");
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log("Child OnChanges");
  }
}
