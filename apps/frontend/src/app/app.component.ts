import { Component, Output } from '@angular/core';
import {
  CanvasWhiteboardComponent,
  CanvasWhiteboardOptions
} from 'ng2-canvas-whiteboard';
import { EventEmitter } from 'events';

@Component({
  selector: 'skribbluk-root',
  templateUrl: './app.component.html',
  viewProviders: [CanvasWhiteboardComponent],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() canvasClear = new EventEmitter();
  @Output() canvasUndo = new EventEmitter();
  @Output() canvasRedo = new EventEmitter();
  @Output() canvasSave = new EventEmitter();
  canvasOptions: CanvasWhiteboardOptions = {
    drawButtonEnabled: true,
    drawButtonClass: 'drawButtonClass',
    drawButtonText: 'Draw',
    clearButtonEnabled: true,
    clearButtonClass: 'clearButtonClass',
    clearButtonText: 'Clear',
    undoButtonText: 'Undo',
    undoButtonEnabled: true,
    redoButtonText: 'Redo',
    redoButtonEnabled: true,
    colorPickerEnabled: true,
    saveDataButtonEnabled: true,
    saveDataButtonText: 'Save',
    lineWidth: 5,
    strokeColor: 'rgb(0,0,0)',
    shouldDownloadDrawing: true
  };
}
