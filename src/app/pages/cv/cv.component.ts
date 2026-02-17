import { Component, ElementRef, ViewChild } from '@angular/core';
import * as html2pdf from 'html2pdf.js';

@Component({
  templateUrl: './cv.component.html',
})
export class CvComponent {

  @ViewChild('cvContent', { static: false }) cvContent!: ElementRef;


printCV() {
  window.open('/HojadeVidaDevelopment.pdf', '_blank', 'noopener,noreferrer');
}

}
