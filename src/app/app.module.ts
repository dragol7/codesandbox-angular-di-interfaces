import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Logger1 } from "./logger1";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: "Logger1",
      useClass: Logger1
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
