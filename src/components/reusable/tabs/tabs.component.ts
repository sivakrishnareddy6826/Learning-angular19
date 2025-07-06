import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  @Input() tabList:string[] = [];

  @Output() OnTabClicked =  new EventEmitter<string>();

  currentTab : string ="";

  onTabChange(tabName: string){
    this.currentTab = tabName;
    this.OnTabClicked.emit(tabName);
  }
}
