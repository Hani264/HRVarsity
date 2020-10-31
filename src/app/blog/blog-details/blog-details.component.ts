import { Blog } from 'src/app/model/blog';
import { CommonService } from './../../services/common.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  @Input() blog : Blog[];
  blogs: Blog[];

  comments : any = true;

  constructor(
    private route: ActivatedRoute,
    private commonServices: CommonService
  ) { }

  ngOnInit() {

    this.getBlogDetails();
    this.getBlogs();

    jQuery(window).scrollTop(0)    

    //scripts    
    setTimeout(
      ()=> {
        this.loadScript("../assets/js/custom.js"); 
      }, 1000
    )   
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = true;
    script.defer = true;
    body.appendChild(script);
  }  

  getBlogs(): void{
    this.commonServices.getBlogs().subscribe(
      blogs => this.blogs = blogs.slice(1,4)
    )
  }

  getBlogDetails(): void{
    const id =+ this.route.snapshot.paramMap.get("id");
    this.commonServices.getBlogDetails(id).subscribe(
      blog => this.blog = blog
    )
  }

  //Comment Submit

  sumbitComment(c){
    console.log(c.value);
    let name = c.controls.userName.value;
    let email = c.controls.userEmail.value;
    let comment = c.controls.comment.value;
    

    jQuery(".commentlist > li:last-child").after(`
        <li>
          <div class="media">
              <div class="media-left">
                  <img alt="img" src="assets/img/user.png"
                      class="media-object news-img">
              </div>
              <div class="media-body">
                  <h4 class="author-name">${name}</h4>
                  <span class="comments-date"> Posted on 12th June,
                      2016</span>
                  <p>${comment}</p>
                  <a href="javascript: void(0)" mat-button>
                      <i class="fa fa-thumbs-up"></i> 0
                  </a>
                  <a href="javascript: void(0)" mat-button>
                      <i class="fa fa-thumbs-down"></i> 0
                  </a>                                                            
                  <a class="reply-btn" href="javascript: void(0)" mat-button>Reply </a>
              </div>
          </div>
        </li>
    `);    
  }

}
