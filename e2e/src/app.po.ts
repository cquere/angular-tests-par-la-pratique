// outillage protractor
// browser => manipulation du navigateur (changer de page, rafraichir la page, ...)
// by => utilitaire pour cibler des éléments du DOM
// element => manipulation d'un élément du DOM
import { browser, by, element } from 'protractor';
import { CompteurCmp } from "./compteur/compteur.po";

export class AppPage {

  compteurCmp = new CompteurCmp();
  // méthode utilitaire pour aller à la page racine
  navigateTo() {
    return browser.get('/');
  }

  // récupération du texte du paragraphe
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
