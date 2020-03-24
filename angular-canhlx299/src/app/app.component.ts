import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <h1 [class.with-border]="withBorder">Hi {{ title }}</h1>
    <button>Hide Border</button>
  `,
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-canhlx299";
  withBorder = true;
}
