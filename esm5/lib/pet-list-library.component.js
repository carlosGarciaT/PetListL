import { __decorate } from "tslib";
import { Component, Input, } from '@angular/core';
import { PetListLibraryService } from './pet-list-library.service';
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
export { PetListLibraryComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LWxpc3QtbGlicmFyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wZXQtbGlzdC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3BldC1saXN0LWxpYnJhcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssR0FJTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWNuRTtJQUlFLGlDQUFvQixjQUFxQztRQUFyQyxtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7SUFBRyxDQUFDO0lBRTdELDZDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pFLHNCQUFzQjtRQUN0QixtQ0FBbUM7UUFDbkMsK0NBQStDO0lBQ2pELENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRSxzQkFBc0I7UUFDdEIsbUNBQW1DO1FBQ25DLCtDQUErQztJQUNqRCxDQUFDOztnQkFkbUMscUJBQXFCOztJQUZoRDtRQUFSLEtBQUssRUFBRTsyREFBZ0I7SUFGYix1QkFBdUI7UUFYbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLGtLQU1UO1NBRUYsQ0FBQztPQUNXLHVCQUF1QixDQW1CbkM7SUFBRCw4QkFBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBldExpc3RMaWJyYXJ5U2VydmljZSB9IGZyb20gJy4vcGV0LWxpc3QtbGlicmFyeS5zZXJ2aWNlJztcbmltcG9ydCB7IFZpZXdQZXQgfSBmcm9tICcuL3BldC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1wZXRsaXN0JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8dWwgKm5nRm9yPVwibGV0IHBldCBvZiBwZXRMaXN0XCI+XG4gICAgICA8bGk+XG4gICAgICAgIElEOiB7eyBwZXQuaWQgfX0gLS0+IE5hbWU6IHt7IHBldC5uYW1lIH19IC0tPiBTdGF0dXM6IHt7IHBldC5zdGF0dXMgfX1cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgUGV0TGlzdExpYnJhcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIHBldExpc3Q6IEFycmF5PFZpZXdQZXQ+O1xuICBASW5wdXQoKSBzdGF0dXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxpYnJhcnlTZXJ2aWNlOiBQZXRMaXN0TGlicmFyeVNlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMucGV0TGlzdCA9IHRoaXMubGlicmFyeVNlcnZpY2UuZ2V0UGV0c0F2YWlsYWJsZSh0aGlzLnN0YXR1cyk7XG4gICAgLy8gdGhpcy5saWJyYXJ5U2VydmljZVxuICAgIC8vICAgLmdldFBldHNBdmFpbGFibGUodGhpcy5zdGF0dXMpXG4gICAgLy8gICAuc3Vic2NyaWJlKChyZXMpID0+ICh0aGlzLnBldExpc3QgPSByZXMpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGV0TGlzdCA9IHRoaXMubGlicmFyeVNlcnZpY2UuZ2V0UGV0c0F2YWlsYWJsZSh0aGlzLnN0YXR1cyk7XG4gICAgLy8gdGhpcy5saWJyYXJ5U2VydmljZVxuICAgIC8vICAgLmdldFBldHNBdmFpbGFibGUodGhpcy5zdGF0dXMpXG4gICAgLy8gICAuc3Vic2NyaWJlKChyZXMpID0+ICh0aGlzLnBldExpc3QgPSByZXMpKTtcbiAgfVxufVxuIl19