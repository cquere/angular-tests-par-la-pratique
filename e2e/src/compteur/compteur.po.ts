import { browser, by, element } from "protractor";


export class CompteurCmp {
  getBtnIncrementer() {
    return element(by.css("app-compteur button"));
  }

  getParagraph() {
    return element(by.css("app-compteur p"));
  }
}
