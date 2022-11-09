import { Component, OnInit } from '@angular/core';
import { ColourObject } from "./../colour-object";

@Component({
  selector: 'app-colourpatch',
  templateUrl: './colourpatch.component.html',
  styleUrls: ['./colourpatch.component.css']
})
export class ColourpatchComponent implements OnInit {

  colours:ColourObject[] = [];
  rgba = '';

  constructor() {

  }

  ngOnInit(): void {
    this.colours = [
      new ColourObject(255,0,0,1,''),
      new ColourObject(0,0,255,1,''),
      new ColourObject(60,179,113,1,'')
    ];
    this.colours.forEach(color => color.rgba = `rgba(${color.r},${color.g},${color.b},${color.a})`);
  }

}
