import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from 'src/modules/mat.module';
import { ContentBottomComponent } from './content-bottom/content-bottom.component';
import { ContentTopComponent } from './content-top/content-top.component';
import { ContentComponent } from './content.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
    declarations: [
        ContentComponent,
        ContentTopComponent,
        ContentBottomComponent,
        PipesComponent,
        ReversePipe,
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatModule
    ],
    exports: [],
}) export class ContentModule { }