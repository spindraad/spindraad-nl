import Pill from '~/components/Pill';
import drakenfruitLogo from '~/assets/images/drakenfruit-logo.png';

export default function Customers() {
  return <section id="klanten" className="w-full py-12 md:py-24 lg:py-32 bg-vibrant-teal">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <Pill color="crisp-white">Onze Klanten</Pill>
        <h2 className="text-3xl text-crisp-white font-bold tracking-tighter sm:text-5xl">Vertrouwd door toonaangevende merken</h2>
        <p
          className="mx-auto max-w-[900px] text-crisp-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Ons getalenteerde team heeft de eer gehad samen te werken met enkele van de meest gerespecteerde merken
          in de industrie. We zijn trots om een selectie van onze klanten te kunnen tonen.
        </p>
      </div>
      <div className="grid w-full grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 lg:gap-12">
        {Array.from({ length: 6 }).map((_, index) => (
          <CustomerItem
            key={index}
            logo={drakenfruitLogo}
            customer="Drakenfruit"
          />
        ))}
      </div>
    </div>
  </section>;
}

type CustomerItemProps = {
  logo: string;
  customer: string;
}

function CustomerItem({ logo, customer }: CustomerItemProps) {
  return (
    <figure className="group">
      <img
        src={ logo }
        alt={customer}
        className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center grayscale scale-95 transition-all transform group-hover:scale-100 group-hover:grayscale-0"
      />
      <figcaption className="text-center font-chivo font-bold">{customer}</figcaption>
    </figure>
  );
}
