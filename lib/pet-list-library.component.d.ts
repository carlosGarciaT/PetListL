import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PetListLibraryService } from './pet-list-library.service';
import { ViewPet } from './pet.model';
export declare class PetListLibraryComponent implements OnInit, OnChanges {
    private libraryService;
    petList: Array<ViewPet>;
    status: string;
    constructor(libraryService: PetListLibraryService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
}
