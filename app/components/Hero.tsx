import Pill from '~/components/Pill';
import SpindraadCaption from '~/components/SpindraadCaption';

export default function Hero() {
  return <section
    className="w-full h-[80vh] flex flex-col items-center justify-center bg-cover bg-center bg-accent-orange">
    <div className="container px-4 md:px-6 text-center space-y-4">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
          Vergroot je digitale aanwezigheid
        </h1>
        <Pill>
          Creëer een onvergetelijke digitale ervaring
        </Pill>
      </div>
      <p className="max-w-4xl mx-auto text-gray-200 md:text-2xl">
        <SpindraadCaption /> is een full-service webbureau dat zich
        specialiseert in het bouwen van prachtige, gebruiksvriendelijke websites en webapplicaties.
      </p>
    </div>
  </section>;
}
