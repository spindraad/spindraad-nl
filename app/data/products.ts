export interface Product {
  id: string;
  title: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  price: number;
  payWhatYouWant?: boolean;
  sku: string;
  featured?: boolean;
  slug: string;
  tags: string[];
}

export const products: Product[] = [
  {
    id: 'sp-dr-cys-001',
    title: 'Cursus: Veiligheid in een verbonden wereld',
    summary: 'Leer de basisprincipes van cybersecurity en hoe je jezelf en je organisatie kunt beschermen tegen digitale bedreigingen.',
    description: `
    <p>We zijn steeds meer online: we werken, ontmoeten en organiseren ons digitaal. Dat orengt kansen, maar ook nieuwe risico s. Denk aan datalekken, phishing, cyberaanvallen of accounts die worden misbruikt.</p>
    <p>Veiligheid is daarom niet vanzelfsprekend. Het vraagt om bewust omgaan met je gegevens en je digitale omgeving - zodat je sterker staat, online en ottline.</p>
    <h2>We bundelen de krachten</h2>
    <p>spindraad en Drakenfruit starten een praktische online cursus over persoonlijke veiligheid - online én offline.</p>
    <p>Je leert onder andere over:</p>
    <ol>
      <li>
        <strong>De basis van digitale veiligheid</strong> - accounts, apparaten en bestanden beter beveiligen met sterke wachtwoorden, 2FA, updates en encryptie.
      </li>
      <li>
        <strong>Weerbaarheid tegen digitale aanvallen</strong> aanvallen - leren omgaan met phishing, doxing, online intimidatie en bewust gebruik van metadata en locatiegegevens.
      </li>
      <li>
        <strong>Veiligheid van informatie en fysieke omgevingen</strong> - desinformatie herkennen, veilige communicatiekanalen opzetten en voorbereid zijn op reizen of demonstraties.
      </li>
    </ol>
    <p>De cursus is beschikbaar vanaf 17 november 2025. Meld je aan vóór 1 november en ontvang een gratis hardware security key.</p>
    `,
    image: 'https://drakenfruit.com/wp-content/uploads/2025/08/cybersecurity.png',
    imageAlt: 'Een groep mensen staan voor een holografisch scherm met daarop verschillende lijnen',
    price: 495,
    payWhatYouWant: true,
    sku: 'CYS-001',
    featured: true,
    slug: 'cursus-veiligheid-in-een-verbonden-wereld',
    tags: ['Cursus', 'Cybersecurity', 'Online veiligheid', 'Persoonlijke veiligheid', 'Bewustwording']
  }
];
