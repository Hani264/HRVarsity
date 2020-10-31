import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {    
  }
 

  @HostListener("document:scroll") onScrollDown(){
    if (document.body.scrollTop > 42 || document.documentElement.scrollTop > 42) {            
      jQuery(".navbar").css({'position':'fixed', 'z-index': '111', 'width':'100%', 'top': '0', 'transition':'0.5s ease'});
    } else {            
      jQuery(".navbar").css({'position':'relative'})
    }
  }




}
