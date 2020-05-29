import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage.component";

import { MenuComponent } from "./menu/menu.component";
import { OrderComponent } from "./order/order.component";
import { ContactComponent } from "./contact/contact.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuComponent,
    OrderComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
