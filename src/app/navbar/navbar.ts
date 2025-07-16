import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  isOpen: boolean = false;

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }

  handleClick(section: string) {
    if (this.isOpen) {
      this.isOpen = false;
    }

    setTimeout(() => {
      window.location.href = '#' + section;
    }, 100);
  }
}
