import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDialog } from "@angular/material/dialog";
import { MatGridList } from "@angular/material/grid-list";
import { MatMenu } from "@angular/material/menu";
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports:[
      CommonModule,
      MatTableModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatListModule

    ],
    exports:[
      CommonModule,
      MatTableModule,
      MatCardModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatIconModule,
      MatToolbarModule,
      MatSidenavModule,
      ReactiveFormsModule,
      MatDialogModule,
      MatListModule


    ]
})
export class MaterialModule{}
