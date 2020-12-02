import { ViewPet } from './pet.model';
export declare class PetListLibraryService {
    private url;
    constructor();
    getPetsAvailable(estado: string): Array<ViewPet>;
    private mapearDatos;
}
