import { Component, OnInit } from "@angular/core";
import { CompteurService } from "../compteur.service";

@Component({
  selector: "app-compteur",
  templateUrl: "./compteur.component.html",
  styleUrls: ["./compteur.component.css"]
})
export class CompteurComponent implements OnInit {
  private nb = 0;

  constructor(private _compteurSrv: CompteurService) {}

  ngOnInit() {
    this.nb = this._compteurSrv.incrementer();
  }

  incrementer() {
    this.nb = this._compteurSrv.incrementer();
  }
}
