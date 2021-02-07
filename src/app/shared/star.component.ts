import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    startWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void {
        this.startWidth = this.rating * 75 / 5;
    }
}