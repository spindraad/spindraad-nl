import Pill from '~/components/Pill';

export default function Customers() {
  return <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <Pill>Onze Klanten</Pill>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vertrouwd door toonaangevende merken</h2>
        <p
          className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Ons getalenteerde team heeft de eer gehad samen te werken met enkele van de meest gerespecteerde merken
          in de industrie. We zijn trots om een selectie van onze klanten te kunnen tonen.
        </p>
      </div>
      <div className="grid w-full grid-cols-2 items-center justify-center gap-6 md:grid-cols-3 lg:gap-12">
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            src="/placeholder.svg"
            width="140"
            height="70"
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          />
        </div>
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            src="/placeholder.svg"
            width="140"
            height="70"
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          />
        </div>
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            src="/placeholder.svg"
            width="140"
            height="70"
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          />
        </div>
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            src="/placeholder.svg"
            width="140"
            height="70"
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          />
        </div>
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            src="/placeholder.svg"
            width="140"
            height="70"
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          />
        </div>
        <div className="mx-auto flex w-full items-center justify-center">
          <img
            src="/placeholder.svg"
            width="140"
            height="70"
            alt="Logo"
            className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
          />
        </div>
      </div>
    </div>
  </section>;
}
