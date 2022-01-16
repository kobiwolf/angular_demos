import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/Input';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule
    ],
})
export class MatModule { }