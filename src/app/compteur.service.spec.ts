import { TestBed, inject } from "@angular/core/testing";

import { CompteurService } from "./compteur.service";

describe("CompteurService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompteurService]
    });
  });

  it(
    "should be created",
    inject([CompteurService], (service: CompteurService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    "le premier appel à incrementer() retourne 1",
    inject([CompteurService], (service: CompteurService) => {
      const resultat = service.incrementer();

      expect(resultat).toBe(1);
    })
  );

  it(
    "deux appels à incrementer() retourne 2",
    inject([CompteurService], (service: CompteurService) => {
      service.incrementer();
      const resultat = service.incrementer();

      expect(resultat).toBe(2);
    })
  );
});
