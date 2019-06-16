import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place;
  constructor(private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesSrv: PlacesService,
    private modalCtrl: ModalController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (!params.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesSrv.getPlace(params.get('placeId'));

    })
  }

  onBookPlace() {
    this.modalCtrl.create({
      component: CreateBookingComponent
      , componentProps: { selectedPlace: this.place }
    })
      .then(modal => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);

        if(resultData.role === 'confirm'){
          console.log(resultData.data);
        }
      })
  }

}
