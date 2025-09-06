import Pill from '~/components/Pill';
import Prose from '~/components/Prose';
import { Button } from '~/components/ui/button';

export default function CourtsePromo() {
  return (
    <section id="cys-course-promo" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6 lg:gap-10">
        <div className="space-y-6">
          <div className="text-center mb-3">
            <Pill>Coming soon</Pill>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl m-3">Cursus: Veiligheid in een verbonden
              wereld</h2>
          </div>

          <img
            className="w-3/4 mx-auto rounded-lg border border-gray-200 shadow-lg"
            src="https://drakenfruit.com/wp-content/uploads/2025/08/cybersecurity.png"
            alt="Een groep mensen staan voor een holografisch scherm met daarop verschillende lijnen"
          />

          <Prose>
            <p>We zijn steeds meer online: we werken, ontmoeten en organiseren ons digitaal. Dat orengt kansen, maar ook
              nieuwe risico s. Denk aan datalekken, phishing, cyberaanvallen of accounts die worden misbruikt.</p>
            <p>Veiligheid is daarom niet vanzelfsprekend. Het vraagt om bewust omgaan met je gegevens en je digitale
              omgeving - zodat je sterker staat, online en ottline.</p>
            <h2>We bundelen de krachten</h2>
            <p>spindraad en Drakenfruit starten een praktische online cursus over persoonlijke veiligheid - online én
              offline.</p>
            <p>Je leert onder andere over:</p>
            <ol>
              <li>
                <strong>De basis van digitale veiligheid</strong> - accounts, apparaten en bestanden beter beveiligen
                met sterke wachtwoorden, 2FA, updates en encryptie.
              </li>
              <li>
                <strong>Weerbaarheid tegen digitale aanvallen</strong> aanvallen - leren omgaan met phishing, doxing,
                online intimidatie en bewust gebruik van metadata en locatiegegevens.
              </li>
              <li>
                <strong>Veiligheid van informatie en fysieke omgevingen</strong> - desinformatie herkennen, veilige
                communicatiekanalen opzetten en voorbereid zijn op reizen of demonstraties.
              </li>
            </ol>
            <p>De cursus is beschikbaar vanaf 17 november 2025. Meld je aan vóór 1 november en ontvang een gratis
              hardware security key.</p>

            <div className="w-2/3 mx-auto my-6">
            <Button className="w-full" size="lg" asChild>
              <a href="https://drakenfruit.com/product/persoonlijke-veiligheid-online-offline/" target="_blank" rel="noreferrer">
                Meer informatie en aanmelden
              </a>
            </Button>
            </div>
          </Prose>
        </div>
      </div>
    </section>
  );
}
