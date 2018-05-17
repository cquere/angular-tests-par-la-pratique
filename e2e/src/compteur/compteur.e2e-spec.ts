import { AppPage } from "../app.po";

describe("angular-tests-par-la-pratique App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("au lancement le compteur est à 1", () => {
    page.navigateTo();
    expect(page.compteurCmp.getParagraph().getText()).toEqual(
      "le compteur est à 1"
    );
  });

  it("après 2 clicks le compteur est à 3", () => {
    page.navigateTo();
    page.compteurCmp.getBtnIncrementer().click();
    page.compteurCmp.getBtnIncrementer().click();
    expect(page.compteurCmp.getParagraph().getText()).toEqual(
      "le compteur est à 3"
    );
  });
});
