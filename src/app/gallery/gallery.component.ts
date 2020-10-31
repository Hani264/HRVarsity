import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.loadGallery();

    
    
    setTimeout(
      () => {
        //this.loadScript('../assets/js/jquery.fancybox.pack.js'); 
        this.loadScript('../assets/js/jquery.mixitup.js'); 
        this.loadScript('../assets/js/custom.js'); 
      }, 500
    )
    
  }

  loadGallery(){    
    jQuery(function(){
      //@ts-ignore
      jQuery('#mixit-container').mixItUp();
    });
    
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  

}
