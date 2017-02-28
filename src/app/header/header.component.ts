import { Component, OnInit } from '@angular/core';

import { NameService } from '../name.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string;

  constructor(
    private _nameService: NameService
  ) { }

  ngOnInit() {
    this.name = this._nameService.getName();
  }

}
