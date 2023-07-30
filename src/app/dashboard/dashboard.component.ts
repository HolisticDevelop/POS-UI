import { Component, OnInit } from '@angular/core';

const MENU_OPTIONS = [
  {
    label: "Dashboard",
    route: "",
    icon: "dashboard"
  },
  {
    label: "Inventario",
    route: "product",
    icon: "inventory"
  },
  {
    label: "Whatsapp",
    route: "whatsapp",
    icon: "whatsapp"
  }
]


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  selectedOption: string | null = null;
  menuOptions = MENU_OPTIONS;

  constructor() { }

  ngOnInit(): void {
  }

  onMenuOptionClick(option: string): void {
    this.selectedOption = option;
  }

}
