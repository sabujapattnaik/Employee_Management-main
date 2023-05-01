
import { Component, ElementRef, ViewChild } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-fabric',
  templateUrl: './fabric.component.html',
  styleUrls: ['./fabric.component.scss']
})
export class FabricComponent {
removeWhite(arg0: any) {
throw new Error('Method not implemented.');
}
readUrl($event: Event) {
throw new Error('Method not implemented.');
}

  title = 'angular-editor-fabric-js';

  @ViewChild('htmlCanvas') htmlCanvas!: ElementRef;

  public canvas!: fabric.Canvas;
  public url: string="";
  constructor() { }

  ngAfterViewInit(): void {

    // setup front side canvas
    this.canvas = new fabric.Canvas(this.htmlCanvas.nativeElement, {
      hoverCursor: 'pointer',
      selection: true,
      selectionBorderColor: 'blue',
      isDrawingMode: true
    });
  }
  addImageOnCanvas(url: string) {
    if (url) {
      fabric.Image.fromURL(url, (image) => {
        image.set({
          left: 10,
          top: 10,
          angle: 0,
          padding: 10,
          cornerSize: 10,
          hasRotatingPoint: true
        });
        image.scaleToWidth(200);
        image.scaleToHeight(200);
        this.extend(image, this.randomId());
        this.canvas.add(image);
        this.selectItemAfterAdded(image);
      });
    }
  }
  extend(image: fabric.Image, arg1: any) {
    throw new Error('Method not implemented.');
  }
  randomId(): any {
    throw new Error('Method not implemented.');
  }
  selectItemAfterAdded(image: fabric.Image) {
    throw new Error('Method not implemented.');
  }
  
  rasterize() {
    const image = new Image();
    image.src = this.canvas.toDataURL({format: 'png'});
    const w = window.open('');
    w!.document.write(image.outerHTML);
    this.downLoadImage();
  }
  downLoadImage() {
    throw new Error('Method not implemented.');
  }


  

}
