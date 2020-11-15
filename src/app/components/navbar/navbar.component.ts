import { Component, OnInit, HostListener } from "@angular/core";

// window.addEventListener("scroll", function() {
//   var header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 0);
// });

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll($event) {
    var header: any = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  }
}
