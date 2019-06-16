import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('1',
      'Makati',
      'Heart of metro manila',
      'https://i.redd.it/hd1k40fs19t01.jpg',
      1500),
      new Place('2',
      'Muntinlupa',
      'Best place to be',
      'https://upload.wikimedia.org/wikipedia/en/a/a7/Ph-mm-muntinlupa-old_national_hwy.-city_hall_%282015%29_01.JPG',
      1000),
      new Place('3',
      'BGC',
      'Best place to eat',
      'https://d86ddjz7lz2d4.cloudfront.net/blog/wp-content/uploads/2015/09/hoppler-ph-9-reasons-why-you-should-invest-in-a-commercial-property-in-bgc.jpg',
      2000)
  ];

  getPlaces() {
    return [...this._places]
  }

  getPlace(placeId:String):Place{
    return [...this._places].find(place=>place.id === placeId);
  }

  constructor() { }
}
