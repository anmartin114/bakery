import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CupcakeService {
  cupcakeList = [
    { name: "Vanilla", img: "./assets/vanilla.jpg" },
    { name: "Chocolate", img: "./assets/chocolate.jpg" },
    { name: "Red Velvet", img: "./assets/redvelvet.jpg" },
    { name: "Lemon", img: "./assets/lemon.jpg" },
    { name: "Carrot Cake", img: "./assets/carrot.jpg" },
    { name: "Carmel", img: "./assets/carmel.jpg" },
    { name: "Orange", img: "./assets/orange.jpg" },
    { name: "Peanut Butter", img: "./assets/pbchoc.jpg" },
  ];
  constructor() {}
}
