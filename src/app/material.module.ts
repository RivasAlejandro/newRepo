import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  imports: [MatButtonModule, MatFormFieldModule, MatDialogModule, MatInputModule,
    MatSelectModule, MatCardModule, MatListModule, MatIconModule, MatTabsModule,
    MatSidenavModule, MatProgressSpinnerModule, MatSnackBarModule, MatDatepickerModule,
    MatNativeDateModule, MatTableModule, MatPaginatorModule, MatExpansionModule, MatTooltipModule],
exports: [MatButtonModule, MatFormFieldModule, MatDialogModule, MatInputModule,
    MatSelectModule, MatCardModule, MatListModule, MatIconModule, MatTabsModule,
    MatSidenavModule, MatProgressSpinnerModule, MatSnackBarModule, MatDatepickerModule,
    MatNativeDateModule, MatTableModule, MatPaginatorModule, MatExpansionModule, MatTooltipModule]
})
export class MaterialModule { }
