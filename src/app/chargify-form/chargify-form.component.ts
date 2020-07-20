import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
declare var Chargify: any;

@Component({
  selector: 'app-chargify-form',
  templateUrl: './chargify-form.component.html',
  styleUrls: ['./chargify-form.component.css']
})
export class ChargifyFormComponent implements OnInit {
  @Input() type: string = 'card';
  @ViewChild('form', { static: true }) chargifyForm: ElementRef;
  chargify: any;
  token: string = '';

  constructor() { }

  ngOnInit() {
    this.chargify = new Chargify();
    
    this.chargify.load({
      // selector where the iframe will be included in the host's HTML (i.e. '#chargify-form')
      // optional if you have a `selector` on each and every field
      selector: '#chargify-form',
  
      // (i.e. '1a2cdsdn3lkn54lnlkn')
      publicKey: 'MY_PUBLIC_KEY',
  
      // form type (possible values: 'card' or 'bank')
      type: this.type,
  
      // points to your Chargify site
      serverHost: 'https://acme.chargify.test'
    });
  }

  ngOnChanges() {
    if (this.chargify) {
      this.chargify.load({type: this.type});
      this.token = '';
    }
  }

  ngOnDestroy() {
    this.chargify.unload();
  }

  handleSubmit() {
    this.chargify.token(
      this.chargifyForm.nativeElement,

      (token) => {
        console.log('{host} token SUCCESS - token: ', token);
        this.token = token;
      },

      (error) => {
        console.log('{host} token ERROR - err: ', error);
      }
    );
  }
}
