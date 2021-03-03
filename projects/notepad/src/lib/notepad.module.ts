import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { NotepadComponent } from './notepad.component';
import { SceneComponent } from './scene/scene.component';

@NgModule({
    declarations: [NotepadComponent, SceneComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        DragDropModule,    
        MatIconModule,
        FormsModule
    ],
    exports: [NotepadComponent],
})
export class NotepadModule {}
