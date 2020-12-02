import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

let PetListLibraryService = class PetListLibraryService {
    constructor() {
        this.url = 'https://petstore.swagger.io/v2/';
    }
    //  getPetsAvailable(estado: string): Observable<Array<ViewPet>>{
    //   return this.http.get(this.url + 'pet/findByStatus?status=' + estado).pipe(map((res: Pet[]) => {
    //     const auxList: Array<ViewPet> = [];
    //     res.forEach(p => {
    //       let aux: ViewPet;
    //       aux = {
    //         id: p.id,
    //         name: p.name,
    //         status: p.status
    //       };
    //       auxList.push(aux);
    //     });
    //     return auxList;
    //   }));
    //  }
    getPetsAvailable(estado) {
        const list = [];
        fetch(this.url + 'pet/findByStatus?status=' + estado)
            .then((response) => response.json())
            .then((data) => {
            this.mapearDatos(data, list);
        })
            .catch((error) => {
            console.log(error);
        });
        return list;
    }
    mapearDatos(data, list) {
        data.forEach((element) => {
            const pet = {
                id: element.id,
                name: element.name,
                status: element.status,
            };
            list.push(pet);
        });
    }
};
PetListLibraryService.ɵprov = ɵɵdefineInjectable({ factory: function PetListLibraryService_Factory() { return new PetListLibraryService(); }, token: PetListLibraryService, providedIn: "root" });
PetListLibraryService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PetListLibraryService);

let PetListLibraryComponent = class PetListLibraryComponent {
    constructor(libraryService) {
        this.libraryService = libraryService;
    }
    ngOnChanges(changes) {
        this.petList = this.libraryService.getPetsAvailable(this.status);
        // this.libraryService
        //   .getPetsAvailable(this.status)
        //   .subscribe((res) => (this.petList = res));
    }
    ngOnInit() {
        this.petList = this.libraryService.getPetsAvailable(this.status);
        // this.libraryService
        //   .getPetsAvailable(this.status)
        //   .subscribe((res) => (this.petList = res));
    }
};
PetListLibraryComponent.ctorParameters = () => [
    { type: PetListLibraryService }
];
__decorate([
    Input()
], PetListLibraryComponent.prototype, "status", void 0);
PetListLibraryComponent = __decorate([
    Component({
        selector: 'lib-petlist',
        template: `
    <ul *ngFor="let pet of petList">
      <li>
        ID: {{ pet.id }} --> Name: {{ pet.name }} --> Status: {{ pet.status }}
      </li>
    </ul>
  `
    })
], PetListLibraryComponent);

let PetListLibraryModule = class PetListLibraryModule {
};
PetListLibraryModule = __decorate([
    NgModule({
        declarations: [PetListLibraryComponent],
        imports: [CommonModule],
        exports: [PetListLibraryComponent, CommonModule],
    })
], PetListLibraryModule);

/*
 * Public API Surface of pet-list-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PetListLibraryComponent, PetListLibraryModule, PetListLibraryService as ɵa };
//# sourceMappingURL=pet-list-library.js.map
