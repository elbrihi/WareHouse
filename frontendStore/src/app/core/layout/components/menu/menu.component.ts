import { ChangeDetectionStrategy, Input } from '@angular/core';
import { Component } from '@angular/core';
import { Menu } from '../../../models/layout/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class MenuComponent {


  @Input() childMessage?: string = '';
  @Input() menu: Menu = [];
  constructor(){
    console.log(this.childMessage);
  }
}
