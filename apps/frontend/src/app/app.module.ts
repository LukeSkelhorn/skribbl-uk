import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CanvasWhiteboardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/**
 * HelpFUl links
 * https://github.com/webfactorymk/ng2-canvas-whiteboard
 * https://github.com/tsand/responsive-sketchpad
 * https://github.com/socketio/socket.io/blob/master/examples/whiteboard/public/main.js
 */
