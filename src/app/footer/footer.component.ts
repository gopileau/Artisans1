import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/votreentreprise', icon: 'assets/facebook.png' },
    { name: 'Twitter', url: 'https://twitter.com/votreentreprise', icon: 'assets/twitter.png' },
    { name: 'Instagram', url: 'https://www.instagram.com/votreentreprise/', icon: 'assets/application.png' }
  ];
}


