import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';
import letsLedsLogo from '~/assets/images/letsleds-logo.png';

export interface Review {
  customer: string;
  image: string;
  webpage: string;
  review: string;
}

export const reviews: Review[] = [
  {
    customer: 'Drakenfruit',
    image: drakenfruitLogo,
    webpage: 'https://drakenfruit.com',
    review: "<p>spindraad heeft voor ons een op maat gemaakt klantenportaal ontwikkeld dat perfect aansluit op onze behoeften. De combinatie van kennisdeling en projectmanagement in één platform heeft ons werkproces aanzienlijk verbeterd.</p> <p>We waarderen vooral de mogelijkheid voor klanten om toegang tot specifieke tools en blogs aan te schaffen en hun favorieten op te slaan. De samenwerking met spindraad verliep soepel en hun aanpak was zowel innovatief als klantgericht.</p> <p>Wij raden spindraad aan iedereen aan die op zoek is naar een gebruiksvriendelijke en maatwerkoplossing.</p>"
  },
  {
    customer: 'Let\'s Leds',
    image: letsLedsLogo,
    webpage: 'https://letsleds.nl',
    review: "<p>We zijn zeer tevreden over de werkzaamheden van spindraad. Ze hebben ons vaak uit het nauw geholpen, denken pro-actief mee en het is een betrouwbare partij. Ze hebben veel verstand van het technische aspect van een webwinkel.</p> <p>Voor iedereen een aanrader.</p>",
  },
];
