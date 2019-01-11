import {NgModule} from '@angular/core';
import {
MatButtonModule,MatProgressSpinnerModule,MatToolbarModule,
MatMenuModule,MatSidenavModule,MatCheckboxModule,
MatCardModule,MatIconModule,MatTabsModule,MatListModule,
MatTableModule,MatSelectModule,MatExpansionModule,MatGridListModule,
MatPaginatorModule,MatStepperModule,MatFormFieldModule,MatInputModule,
MatSortModule,MatDialogModule,MatSnackBarModule,MatProgressBarModule,
MatChipsModule,MatAutocompleteModule
} from '@angular/material';

@NgModule({

    imports:[
        MatButtonModule,MatProgressSpinnerModule,MatToolbarModule,
        MatMenuModule,MatSidenavModule,MatCheckboxModule,
        MatCardModule,MatIconModule,MatTabsModule,MatListModule,
        MatTableModule,MatSelectModule,MatExpansionModule,MatGridListModule,
        MatPaginatorModule,MatStepperModule,MatFormFieldModule,MatInputModule,
        MatSortModule,MatDialogModule,MatSnackBarModule,MatProgressBarModule,
        MatChipsModule,MatAutocompleteModule    
    ],
    exports:[
    
        MatButtonModule,MatProgressSpinnerModule,MatToolbarModule,
        MatMenuModule,MatSidenavModule,MatCheckboxModule,
        MatCardModule,MatIconModule,MatTabsModule,MatListModule,
        MatTableModule,MatSelectModule,MatExpansionModule,MatGridListModule,
        MatPaginatorModule,MatStepperModule,MatFormFieldModule,MatInputModule,
        MatSortModule,MatDialogModule,MatSnackBarModule,MatProgressBarModule,
        MatChipsModule,MatAutocompleteModule
    ]
})

export class MaterialModule{}