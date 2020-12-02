import { __decorate } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Input, Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var PetListLibraryService = /** @class */ (function () {
    function PetListLibraryService() {
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
    PetListLibraryService.prototype.getPetsAvailable = function (estado) {
        var _this = this;
        var list = [];
        fetch(this.url + 'pet/findByStatus?status=' + estado)
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.mapearDatos(data, list);
        })
            .catch(function (error) {
            console.log(error);
        });
        return list;
    };
    PetListLibraryService.prototype.mapearDatos = function (data, list) {
        data.forEach(function (element) {
            var pet = {
                id: element.id,
                name: element.name,
                status: element.status,
            };
            list.push(pet);
        });
    };
    PetListLibraryService.ɵprov = ɵɵdefineInjectable({ factory: function PetListLibraryService_Factory() { return new PetListLibraryService(); }, token: PetListLibraryService, providedIn: "root" });
    PetListLibraryService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PetListLibraryService);
    return PetListLibraryService;
}());

var PetListLibraryComponent = /** @class */ (function () {
    function PetListLibraryComponent(libraryService) {
        this.libraryService = libraryService;
    }
    PetListLibraryComponent.prototype.ngOnChanges = function (changes) {
        this.petList = this.libraryService.getPetsAvailable(this.status);
        // this.libraryService
        //   .getPetsAvailable(this.status)
        //   .subscribe((res) => (this.petList = res));
    };
    PetListLibraryComponent.prototype.ngOnInit = function () {
        this.petList = this.libraryService.getPetsAvailable(this.status);
        // this.libraryService
        //   .getPetsAvailable(this.status)
        //   .subscribe((res) => (this.petList = res));
    };
    PetListLibraryComponent.ctorParameters = function () { return [
        { type: PetListLibraryService }
    ]; };
    __decorate([
        Input()
    ], PetListLibraryComponent.prototype, "status", void 0);
    PetListLibraryComponent = __decorate([
        Component({
            selector: 'lib-petlist',
            template: "\n    <ul *ngFor=\"let pet of petList\">\n      <li>\n        ID: {{ pet.id }} --> Name: {{ pet.name }} --> Status: {{ pet.status }}\n      </li>\n    </ul>\n  "
        })
    ], PetListLibraryComponent);
    return PetListLibraryComponent;
}());

var PetListLibraryModule = /** @class */ (function () {
    function PetListLibraryModule() {
    }
    PetListLibraryModule = __decorate([
        NgModule({
            declarations: [PetListLibraryComponent],
            imports: [CommonModule],
            exports: [PetListLibraryComponent, CommonModule],
        })
    ], PetListLibraryModule);
    return PetListLibraryModule;
}());

/*
 * Public API Surface of pet-list-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PetListLibraryComponent, PetListLibraryModule, PetListLibraryService as ɵa };
//# sourceMappingURL=pet-list-library.js.map
