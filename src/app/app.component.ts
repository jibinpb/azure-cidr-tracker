import { Component, OnInit } from '@angular/core';
import { Netmask } from 'netmask';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'azure-cidr-tracker';

  ngOnInit() {
    var block = new Netmask('10.0.0.0/12');
    console.log(block);
    console.log(block.contains('10.0.8.10'));
    console.log(block.contains('10.0.8.0/16'));
  }
}
