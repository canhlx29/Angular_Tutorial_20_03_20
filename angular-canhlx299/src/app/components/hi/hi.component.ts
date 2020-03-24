import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hi",
  template: `
    <h1 [class.with-border]="withBorder">Hi {{ title }}!</h1>
    <button>Hide Border</button>
  `,
  styleUrls: ["./hi.component.css"]
})
export class HiComponent implements OnInit {
  title = "Canhlx";
  withBorder: true;
  constructor() {}

  ngOnInit(): void {}
}
