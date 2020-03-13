import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener
} from '@angular/core';

@Component({
  selector: 'skribbluk-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit, AfterViewInit {
  @ViewChild('drawingCanvas') canvas: ElementRef;
  context: any;
  current = {
    color: 'black',
    x: 0,
    y: 0
  };
  drawing = false;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
    console.log(this.context);
    console.log(this.canvas.nativeElement.width);
    console.log(this.canvas.nativeElement.height);
    this.canvas.nativeElement.width = 500;
    this.canvas.nativeElement.height = 500;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.canvas.nativeElement.width = window.innerWidth;
    this.canvas.nativeElement.height = window.innerHeight;
  }

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onMouseDown(e: any) {
    this.drawing = true;
    this.current.x = e.clientX || e.touches[0].clientX;
    this.current.y = e.clientY || e.touches[0].clientY;
  }

  @HostListener('mouseup', ['$event'])
  @HostListener('touchend', ['$event'])
  @HostListener('mouseout', ['$event'])
  @HostListener('touchcancel', ['$event'])
  onMouseup(e: any) {
    if (!this.drawing) {
      return;
    }
    this.drawing = false;
    this.drawLine(
      this.current.x,
      this.current.y,
      e.clientX || e.touches[0].clientX,
      e.clientY || e.touches[0].clientY,
      this.current.color,
      true
    );
  }

  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  onMouseMove(e: any) {
    if (!this.drawing) {
      return;
    }
    this.drawLine(
      this.current.x,
      this.current.y,
      e.clientX || e.touches[0].clientX,
      e.clientY || e.touches[0].clientY,
      this.current.color,
      true
    );
    this.current.x = e.clientX || e.touches[0].clientX;
    this.current.y = e.clientY || e.touches[0].clientY;
  }

  // @HostListener('mousemove', ['$event'])
  // @HostListener('touchmove', ['$event'])
  // startMouseMove(e: any) {
  //   this.throttle(this.onMouseMove(e), 10);
  // }

  throttle(callback, delay) {
    let previousCall = new Date().getTime();
    return function() {
      const time = new Date().getTime();

      if (time - previousCall >= delay) {
        previousCall = time;
        callback.apply(null, arguments);
      }
    };
  }

  drawLine(x0, y0, x1, y1, color, emit) {
    this.context.lineJoin = 'round';
    this.context.strokeStyle = color;
    this.context.lineWidth = 2;
    this.context.beginPath();
    this.context.moveTo(x0, y0);
    this.context.lineTo(x1, y1);
    this.context.closePath();
    this.context.stroke();

    if (!emit) {
      return;
    }
  }
}
