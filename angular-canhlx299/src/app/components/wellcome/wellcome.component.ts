import { Component, OnInit } from "@angular/core";
import { DataServiceService } from "src/app/services/data-service.service";

@Component({
  selector: "app-wellcome",
  template: `
    <h1>{{ textFromHi }} wellcome works!</h1>
  `,
  styleUrls: ["./wellcome.component.css"]
})
export class WellcomeComponent implements OnInit {
  textFromHi: string;
  constructor(private _dataService: DataServiceService) {}

  ngOnInit(): void {
    this.textFromHi = this._dataService.textFromHi;
  }
}
