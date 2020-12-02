import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
    PetListLibraryService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PetListLibraryService_Factory() { return new PetListLibraryService(); }, token: PetListLibraryService, providedIn: "root" });
    PetListLibraryService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PetListLibraryService);
    return PetListLibraryService;
}());
export { PetListLibraryService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LWxpc3QtbGlicmFyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV0LWxpc3QtbGlicmFyeS8iLCJzb3VyY2VzIjpbImxpYi9wZXQtbGlzdC1saWJyYXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUzNDO0lBRUU7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLGlDQUFpQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpRUFBaUU7SUFDakUsb0dBQW9HO0lBQ3BHLDBDQUEwQztJQUMxQyx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsU0FBUztJQUNULEtBQUs7SUFFTCxnREFBZ0IsR0FBaEIsVUFBaUIsTUFBYztRQUEvQixpQkFXQztRQVZDLElBQU0sSUFBSSxHQUFtQixFQUFFLENBQUM7UUFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsMEJBQTBCLEdBQUcsTUFBTSxDQUFDO2FBQ2xELElBQUksQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDbkMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNULEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRU8sMkNBQVcsR0FBbkIsVUFBb0IsSUFBUyxFQUFFLElBQWU7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87WUFDbkIsSUFBTSxHQUFHLEdBQVk7Z0JBQ25CLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtnQkFDZCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7Z0JBQ2xCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTthQUN2QixDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0lBNUNVLHFCQUFxQjtRQUhqQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1cscUJBQXFCLENBNkNqQztnQ0F0REQ7Q0FzREMsQUE3Q0QsSUE2Q0M7U0E3Q1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuLy8gaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbi8vIGltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBldCwgVmlld1BldCB9IGZyb20gJy4vcGV0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBldExpc3RMaWJyYXJ5U2VydmljZSB7XG4gIHByaXZhdGUgdXJsOiBzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXJsID0gJ2h0dHBzOi8vcGV0c3RvcmUuc3dhZ2dlci5pby92Mi8nO1xuICB9XG5cbiAgLy8gIGdldFBldHNBdmFpbGFibGUoZXN0YWRvOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFycmF5PFZpZXdQZXQ+PntcbiAgLy8gICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnVybCArICdwZXQvZmluZEJ5U3RhdHVzP3N0YXR1cz0nICsgZXN0YWRvKS5waXBlKG1hcCgocmVzOiBQZXRbXSkgPT4ge1xuICAvLyAgICAgY29uc3QgYXV4TGlzdDogQXJyYXk8Vmlld1BldD4gPSBbXTtcbiAgLy8gICAgIHJlcy5mb3JFYWNoKHAgPT4ge1xuICAvLyAgICAgICBsZXQgYXV4OiBWaWV3UGV0O1xuICAvLyAgICAgICBhdXggPSB7XG4gIC8vICAgICAgICAgaWQ6IHAuaWQsXG4gIC8vICAgICAgICAgbmFtZTogcC5uYW1lLFxuICAvLyAgICAgICAgIHN0YXR1czogcC5zdGF0dXNcbiAgLy8gICAgICAgfTtcbiAgLy8gICAgICAgYXV4TGlzdC5wdXNoKGF1eCk7XG4gIC8vICAgICB9KTtcbiAgLy8gICAgIHJldHVybiBhdXhMaXN0O1xuICAvLyAgIH0pKTtcbiAgLy8gIH1cblxuICBnZXRQZXRzQXZhaWxhYmxlKGVzdGFkbzogc3RyaW5nKTogQXJyYXk8Vmlld1BldD4ge1xuICAgIGNvbnN0IGxpc3Q6IEFycmF5PFZpZXdQZXQ+ID0gW107XG4gICAgZmV0Y2godGhpcy51cmwgKyAncGV0L2ZpbmRCeVN0YXR1cz9zdGF0dXM9JyArIGVzdGFkbylcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5tYXBlYXJEYXRvcyhkYXRhLCBsaXN0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBsaXN0O1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBlYXJEYXRvcyhkYXRhOiBhbnksIGxpc3Q6IFZpZXdQZXRbXSkge1xuICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcGV0OiBWaWV3UGV0ID0ge1xuICAgICAgICBpZDogZWxlbWVudC5pZCxcbiAgICAgICAgbmFtZTogZWxlbWVudC5uYW1lLFxuICAgICAgICBzdGF0dXM6IGVsZW1lbnQuc3RhdHVzLFxuICAgICAgfTtcbiAgICAgIGxpc3QucHVzaChwZXQpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=