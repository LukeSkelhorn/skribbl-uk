import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CanvasWhiteboardModule } from 'ng2-canvas-whiteboard';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DrawingComponent } from './_components/drawing/drawing.component';
import { PlayersComponent } from './_components/players/players.component';
import { ChatComponent } from './_components/chat/chat.component';
import { AddComponent } from './_components/add/add.component';

@NgModule({
  declarations: [AppComponent, DrawingComponent, PlayersComponent, ChatComponent, AddComponent],
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
