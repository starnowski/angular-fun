import { Component, OnInit } from '@angular/core';
import { RandomItemWithIdService } from "../random-item-with-id.service";

@Component({
  selector: 'app-select-scroll-example',
  templateUrl: './select-scroll-example.component.html',
  styleUrls: ['./select-scroll-example.component.css']
})
export class SelectScrollExampleComponent implements OnInit {

  photos = [];
  photosBuffer = [];
  bufferSize = 50;
  numberOfItemsFromEndBeforeFetchingMore = 10;
  loading = false;

  constructor(private randomItemWithIdService: RandomItemWithIdService) {
  }

  ngOnInit() {
      // this.http.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe(photos => {
      //     this.photos = photos;
      //     this.photosBuffer = this.photos.slice(0, this.bufferSize);
      // });
      randomItemWithIdService.find
  }

  onScrollToEnd() {
      this.fetchMore();
  }

  onScroll({ end }) {
      if (this.loading || this.photos.length <= this.photosBuffer.length) {
          return;
      }

      if (end + this.numberOfItemsFromEndBeforeFetchingMore >= this.photosBuffer.length) {
          this.fetchMore();
      }
  }

  private fetchMore() {
      const len = this.photosBuffer.length;
      const more = this.photos.slice(len, this.bufferSize + len);
      this.loading = true;
      // using timeout here to simulate backend API delay
      setTimeout(() => {
          this.loading = false;
          this.photosBuffer = this.photosBuffer.concat(more);
      }, 200)
  }

}
