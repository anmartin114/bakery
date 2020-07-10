import { Component, OnInit } from "@angular/core";
import { CupcakeService } from "../services/cupcake.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"],
})
export class MenuComponent implements OnInit {
  constructor(private cupcakeService: CupcakeService) {}

  cupcakes = this.cupcakeService.cupcakeList;

  ngOnInit() {
    console.log(this.cupcakes[0].name);
  }
}
