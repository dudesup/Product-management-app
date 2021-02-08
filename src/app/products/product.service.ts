import { Injectable } from '@angular/core';
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getProducts():IProduct[] {
        return[
            {
                "productId": 2,
                "productName": "Garden Cart",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2019",
                "description": "15 gallon capacity ...",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "assets/images/garden_cart.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0023",
                "releaseDate": "May 18, 2019",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "assets/images/hammer.png"
            },
            {
                "productId": 51,
                "productName": "Hammer Darcia",
                "productCode": "XVG-0023",
                "releaseDate": "June 28, 2019",
                "description": "Description",
                "price": 82.9,
                "starRating": 5.0,
                "imageUrl": "assets/images/hammer.png"
            }
        ];
    }
}