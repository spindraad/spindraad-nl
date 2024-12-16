import drakenfruitLogo from '~/assets/images/drakenfruit-logo.png';

export interface Review {
  customer: string;
  image: string;
  review: string;
}

export const reviews: Review[] = [
  {
    customer: 'Drakenfruit',
    image: drakenfruitLogo,
    review: "<p>spindraad heeft voor ons een op maat gemaakt klantenportaal ontwikkeld dat perfect aansluit op onze behoeften. De combinatie van kennisdeling en projectmanagement in één platform heeft ons werkproces aanzienlijk verbeterd.</p> <p>We waarderen vooral de mogelijkheid voor klanten om toegang tot specifieke tools en blogs aan te schaffen en hun favorieten op te slaan. De samenwerking met spindraad verliep soepel en hun aanpak was zowel innovatief als klantgericht.</p> <p>Wij raden spindraad aan iedereen aan die op zoek is naar een gebruiksvriendelijke en maatwerkoplossing.</p>"
  },
];
