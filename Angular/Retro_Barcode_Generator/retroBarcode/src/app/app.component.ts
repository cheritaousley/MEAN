import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colorBar = ['#000000', '#FF1493', '#FF69B4', '	#F08080', '#FFB6C1', '#32CD32', '#00FF00', '#90EE90', '#7CFC00', '#ADFF2F']
  randomColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
};

