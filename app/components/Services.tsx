import Pill from '~/components/Pill';
import Icon, { Props as IconProps } from '~/components/Icon';

const services: ServiceItemProps[] = [
  {
    title: 'Interactieve websites en -applicaties',
    description: 'Het ontwerpen en ontwikkelen van op maat gemaakte interactieve webapplicaties of websites die specifiek zijn afgestemd op de behoeften en doelstellingen van jouw bedrijf.',
    icon: 'laptop-code',
  },
  {
    title: 'Gebruiksvriendelijkheid en toegankelijkheid',
    description: 'Het creëren van intuïtieve en gebruiksvriendelijke interfaces die voor iedereen toegankelijk zijn en zorgen voor een hogere betrokkenheid en conversie.',
    icon: 'users-rectangle',
  },
  {
    title: 'SEO en prestatieoptimalisatie',
    description: 'Optimaliseren van websites voor zoekmachines en prestaties om de zichtbaarheid in zoekresultaten te verbeteren en de laadtijden te verkorten.',
    icon: 'search',
  },
  {
    title: 'Responsief ontwerp',
    description: 'Creëren van visueel aantrekkelijke en functioneel responsieve websites die naadloos functioneren op alle moderne browsers en apparaten.',
    icon: 'mobile-alt',
  },
  {
    title: 'Beheer, onderhoud en hosting',
    description: 'Het bieden van doorlopende ondersteuning en onderhoud voor webapplicaties om de prestaties, veiligheid en stabiliteit te garanderen. Ook kunnen we helpen met het hosten van je webapplicatie of website.',
    icon: 'screwdriver-wrench'
  },
  {
    title: 'API-integraties en koppelingen',
    description: 'Ontwikkelen en integreren van API’s om verschillende softwaretoepassingen en databronnen te koppelen, waardoor functionaliteiten binnen webapplicaties worden verbeterd.',
    icon: 'link'
  }
];

export default function Services() {
  return <section id="diensten" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Pill color="vibrant-teal">Onze diensten</Pill>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Een uitgebreid aanbod van diensten
          </h2>
          <p
            className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Van strategie en ontwerp tot ontwikkeling en implementatie, spindraad biedt een uitgebreid pakket aan
            diensten om je digitale aanwezigheid naar een hoger niveau te tillen.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-4 py-12 lg:gap-6">
        { services.map((service, index) => (
          <ServiceItem key={ index } { ...service } />
        )) }
      </div>
    </div>
  </section>;
}

type ServiceItemProps = {
  icon: IconProps['name'];
  title: string;
  description: string;
}

function ServiceItem({ title, description, icon }: ServiceItemProps) {
  return (
    <div
      className="flex flex-col items-center justify-center space-y-4 border border-vibrant-teal bg-transparent rounded-lg p-4 group transition-all">
      <div className="bg-vibrant-teal text-crisp-white rounded-full h-12 w-12 flex place-content-center place-items-center">
        <Icon prefix="fal" name={ icon } sizes="l" />
      </div>
      <div className="space-y-2 text-center">
        <h3 className="text-lg font-bold">{ title }</h3>
        <p className="text-gray-400 text-sm">
          { description }
        </p>
      </div>
    </div>
  );
}
