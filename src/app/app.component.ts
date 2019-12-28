import { Component, Inject } from "@angular/core";
import { Logger } from "./logger.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  constructor(@Inject("Logger1") private logger: Logger) {
    this.logger.log("123");
  }
}
