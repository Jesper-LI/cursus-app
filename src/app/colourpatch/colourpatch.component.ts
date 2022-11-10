import { Component, OnInit } from '@angular/core';
import { ColourObject } from "./../colour-object";

@Component({
  selector: 'app-colourpatch',
  templateUrl: './colourpatch.component.html',
  styleUrls: ['./colourpatch.component.css']
})
export class ColourpatchComponent implements OnInit {

  colours: ColourObject[] = [];
  myBackground = '';

  currentPatch = new ColourObject(0,0,0,1)

  constructor() {

  }

  ngOnInit(): void {
    this.colours = [
      new ColourObject(255, 0, 0, 1, 'red'),
      new ColourObject(0, 0, 255, 1, 'blue'),
      new ColourObject(60, 179, 113, 1, 'green')
    ];
  }

  onClickPatch(colour: ColourObject) {
    // alert(`Geklikt op ${colour.name} met waarde ${colour.rgba}`);
    this.myBackground = colour.rgba;
  }
}
