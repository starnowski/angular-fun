import { Component, OnInit } from '@angular/core';
import { RandomItemWithIdService } from "../random-item-with-id.service";
import { ItemWithId } from "../item-with-id";

@Component({
  selector: 'app-select-scroll-example',
  templateUrl: './select-scroll-example.component.html',
  styleUrls: ['./select-scroll-example.component.css']
})
export class SelectScrollExampleComponent implements OnInit {

  photosBuffer:ItemWithId[] = [];
  bufferSize = 25;
  numberOfItemsFromEndBeforeFetchingMore = 10;
  loading = false;
  current = 0;
  currentTerm:string = 'a';
  initialized = false;

  constructor(private randomItemWithIdService: RandomItemWithIdService) {
  }

  ngOnInit() {
    console.log("SelectScrollExampleComponent:ngOnInit");
      // this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe(photos => {
      //     this.photos = photos;
      //     this.photosBuffer = this.photos.slice(0, this.bufferSize);
      // });
      // this.photosBuffer = this.randomItemWithIdService.findItems('a', this.current, this.bufferSize, 250);
  }

  onOpen() {
    console.log("SelectScrollExampleComponent:onOpen");
    if (!this.initialized) {
      console.log("onOpen() initialized - false ");
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.photosBuffer = this.randomItemWithIdService.findItems('a', this.current, this.bufferSize, 250);
        this.initialized = true;
    }, 200)
    }
  }

  onScrollToEnd() {
      this.fetchMore();
  }

  // onScroll({ end }) {
  //     if (this.loading || this.photos.length <= this.photosBuffer.length) {
  //         return;
  //     }

  //     if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.photosBuffer.length) {
  //         this.fetchMore();
  //     }
  // }

  private fetchMore() {
      this.current++;
      let term = '';
      if (this.currentTerm == '' || this.currentTerm == null) 
      {
        term = "a";
      } else {
        term = this.currentTerm;
      }
      const more = this.randomItemWithIdService.findItems(term, this.current, this.bufferSize, 250);
      this.loading = true;
      // using timeout here to simulate backend API delay
      setTimeout(() => {
          this.loading = false;
          this.photosBuffer = this.photosBuffer.concat(more);
      }, 200)
  }

  
  onSearch(event:any) {
    console.log("onSearch term: --> " + event.term + "<--");
    this.current=0;
    // this.photosBuffer = [];
    let term = "a";
    if (event.term == '' || event.term == null) 
    {
      term = "a";
    } else {
      term = event.term;
    }
    this.currentTerm = term;
    const more = this.randomItemWithIdService.findItems(term, this.current, this.bufferSize, 250);
    this.loading = true;
    // using timeout here to simulate backend API delay
    setTimeout(() => {
        this.loading = false;
        this.photosBuffer = more;
    }, 200)
  }

  customSearchFn(term: string, item: ItemWithId) {
    console.log("customSearchFn term: --> " + term + "<--");
    term = term.toLowerCase();
    return true;
  }

}
