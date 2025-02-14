import drakenfruitLogo from '~/assets/images/drakenfruit-woordmerk-logo.png';
import watershedLogo from '~/assets/images/watershed-logo.png';

export interface PortfolioItem {
  title: string;
  summary: string;
  content: string;
  image: string;
  customer: string;
  logo?: string;
  featured?: boolean;
  wip?: boolean;
  slug?: string;
  homePage?: boolean;
  tags: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Maatwerk klantportaal voor Drakenfruit',
    summary: 'Voor Drakenfruit hebben we een volledig maatwerk klantportaal ontwikkeld waarin contactpersonen van samenwerkende organisaties veilig kunnen inloggen. Het portaal biedt een persoonlijke omgeving waarin gebruikers relevante artikelen kunnen lezen en opslaan, tools kunnen downloaden en belangrijke contactpersonen beheerd worden, ondersteund door een custom content management systeem en geavanceerd user- en accountmanagement – alles gebouwd op Remix.',
    content: `<p>Het klantportaal voor Drakenfruit is ontworpen met de focus op gebruiksvriendelijkheid en efficiëntie. Contactpersonen krijgen een op maat gemaakte, persoonlijke omgeving waarin ze gemakkelijk toegang hebben tot een breed scala aan relevante content en tools. Dit zorgt ervoor dat zij altijd op de hoogte blijven van de laatste ontwikkelingen en direct kunnen inspelen op de behoeften van hun organisatie.</p><p>Om zowel externe gebruikers als interne medewerkers optimaal te bedienen, is het portaal uitgerust met een volledig custom content management systeem. Dit systeem biedt uitgebreide mogelijkheden voor het beheren van content, gebruikers en accounts. Het gebruik van Remix als basis garandeert niet alleen een snelle en dynamische gebruikerservaring, maar maakt het portaal ook toekomstbestendig en flexibel voor eventuele uitbreidingen.</p>`,
    image: '/cases/drakenfruit-portaal-home.png',
    customer: 'Drakenfruit',
    featured: false,
    homePage: true,
    logo: drakenfruitLogo,
    slug: 'drakenfruit-portaal',
    tags: ['Webapplicatie', 'React', 'Remix', 'Maatwerk CMS', 'Responsive', 'User- en accountmanagement']
  },
  {
    title: 'Een nieuwe WordPress website voor Golfvereniging Het Caves',
    summary: 'Voor Golfvereniging Het Caves hebben we een volledig maatwerk WordPress website ontwikkeld, gebaseerd op hun oude Joomla-site. Het unieke, handgeschreven thema – zonder gebruik van frameworks – zorgt voor een authentieke uitstraling, terwijl het wekelijkse onderhoud door spindraad garant staat voor optimale veiligheid en stabiliteit.',
    content: `<p>Bij het vernieuwen van de website voor Golfvereniging Het Caves lag de focus op het behoud van de bestaande identiteit, gecombineerd met moderne functionaliteiten. We hebben een volledig op maat gemaakt WordPress thema ontwikkeld, dat met de hand is gecodeerd zonder gebruik van frameworks. Dit resulteert in een lichte, snelle en unieke website die naadloos aansluit op de wensen van de golfvereniging.</p><p>Naast de ontwikkeling van het unieke thema, hebben we veel aandacht besteed aan de veiligheid en stabiliteit van de site. Spindraad verzorgt wekelijks het onderhoud, wat zorgt voor regelmatige updates en bescherming tegen mogelijke kwetsbaarheden. Hierdoor geniet de golfvereniging van een betrouwbare online aanwezigheid die zowel visueel als technisch op het hoogste niveau functioneert.</p>`,
    image: '/portfolio/het-caves-home.png',
    customer: 'Golfvereniging Het Caves',
    featured: false,
    homePage: true,
    logo: '/het-caves-logo.png',
    slug: 'het-caves-website',
    tags: ['WordPress', 'Maatwerk thema', 'Responsive', 'Hosting en onderhoud']
  },
  {
    title: 'Maatwerk Plugin voor De Talentversneller',
    summary: 'Voor De Talentversneller hebben we een maatwerk WordPress plugin ontwikkeld die klanten via de homepage een gratis e-boek aanbiedt in ruil voor hun e-mailadres. Deze plugin is naadloos geïntegreerd met WooCommerce, waardoor klantprofielen automatisch worden aangemaakt en het e-boek als product wordt verstuurd.',
    content: `<p>Het ontwikkelen van deze plugin was gericht op het optimaliseren van leadgeneratie en het verbeteren van de klantbeleving. Door bezoekers de mogelijkheid te bieden hun e-mailadres achter te laten in ruil voor een gratis e-boek, creëren we een laagdrempelige instap en vergroten we de betrokkenheid. Deze aanpak zorgt ervoor dat geïnteresseerden direct waarde ontvangen, wat de eerste stap is in het opbouwen van een langdurige relatie.</p><p>De plugin is volledig geïntegreerd met WooCommerce, waardoor de verzamelde e-mailadressen automatisch leiden tot het aanmaken van klantprofielen. Vervolgens wordt het e-boek – dat als een product is ingericht – op een gestroomlijnde wijze verzonden. Daarnaast zorgt het wekelijkse onderhoud door spindraad ervoor dat zowel de plugin als de gehele website continu up-to-date en veilig zijn, wat essentieel is voor een optimale gebruikerservaring.</p>`,
    image: '/portfolio/dtv-custom-plugin.png',
    customer: 'De Talentversneller',
    featured: false,
    logo: '/dtv-logo.png',
    slug: 'de-talentversneller-plugin',
    tags: ['WordPress', 'WooCommerce', 'Maatwerk plugin', 'Integraties', 'Hosting en onderhoud']
  },
  {
    title: 'Maatwerk website en content management systeem voor Watershed',
    summary: 'Voor Stichting Watershed bouwen we een volledig maatwerk website met een custom content management systeem, die diepgaande inzichten biedt in hun projecten en evenementen. Met een sterke focus op toegankelijkheid volgens de European Accessibility Act, is deze in Remix ontwikkelde site, gehost en onderhouden door spindraad, ontworpen voor diverse doelgroepen.',
    content: `<p>Stichting Watershed wilde een moderne, flexibele website die hun projecten en evenementen helder en overzichtelijk presenteert. Met de overstap van Wix naar een maatwerk oplossing hebben we een op maat gemaakt content management systeem ontwikkeld dat medewerkers de mogelijkheid geeft om eenvoudig content bij te werken en evenementen aan te maken. Deze zelfredzaamheid zorgt voor een efficiënte en dynamische online communicatie.</p><p>Toegankelijkheid staat bij dit project centraal. De website wordt gebouwd met de aankomende European Accessibility Act in het achterhoofd, zodat alle bezoekers, ongeacht hun beperkingen, een optimale gebruikerservaring hebben. Daarnaast zorgt het gebruik van Remix voor een snelle en schaalbare website. Spindraad draagt zorg voor het hosting- en onderhoudsproces, waardoor Stichting Watershed verzekerd is van een veilige, stabiele en toekomstbestendige online aanwezigheid.</p>`,
    image: watershedLogo,
    customer: 'Stichting Watershed',
    featured: false,
    wip: true,
    logo: watershedLogo,
    slug: 'watershed-website',
    tags: ['React', 'Remix', 'Maatwerk CMS', 'Toegankelijkheid', 'Responsive', 'Hosting en onderhoud']
  },
  {
    title: 'Website met event beheer, ticketsysteem en Mollie-integratie voor de Borgers Family Band',
    summary: 'Voor de Borgers Family band hebben we een website ontwikkeld met een geavanceerd event beheer- en ticketsysteem, inclusief Mollie-integratie. Dit maatwerk WordPress thema biedt de band de mogelijkheid om hun evenementen en tickets eenvoudig te beheren en verkopen, terwijl spindraad zorgt voor hosting en onderhoud.',
    content: '<p>De Borgers Family Band website is een maatwerk oplossing ontwikkeld in Remix/React Router, waarbij een intuïtief agenda beheer voor liveshows centraal staat. Voor shows die een eigen ticketverkoop vereisen, hebben we een op maat gemaakt ticketsysteem geïntegreerd. Daarnaast zorgt een Mollie-integratie voor soepele iDeal-betalingen en verstuurt de website automatisch e-mails met bestelgegevens en gegenereerde tickets naar de koper.</p>',
    image: '/portfolio/borgers-family.png',
    homePage: true,
    customer: 'Borgers Family Band',
    slug: 'borgers-family-website',
    tags: ['React', 'Remix', 'Maatwerk ticketsysteem', 'Event management system', 'Mollie-integratie', 'Hosting en onderhoud'],
  },
  {
    title: 'Maatwerk bandwebsite voor THE MARCH',
    summary: 'Voor THE MARCH, een lokale rockband uit Eindhoven, bouwde spindraad een maatwerk website in Next.js met Notion-integratie voor agenda beheer en contactmogelijkheden.',
    content: '<p>Voor THE MARCH is een maatwerk website gebouwd in Next.js, die naadloos integreert met Notion voor zowel agendabeheer als contactverzoeken. Optredens worden automatisch uit een Notion-database ingeladen op de site, terwijl inkomend verkeer direct in een aparte Notion-database wordt vastgelegd voor een efficiënte opvolging.</p>',
    image: '/portfolio/themarch.png',
    customer: 'THE MARCH',
    slug: 'the-march-website',
    tags: ['React', 'Next.js', 'Maatwerk website', 'Notion-integratie', 'Hosting en onderhoud'],
  }
];
