import type { MetaFunction } from "@remix-run/node";
// import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
// import { Button } from "~/components/ui/button"
import { LightbulbIcon, BoltIcon, BriefcaseIcon, BrushIcon, CodeIcon, RocketIcon } from '~/components/icons';
import Header from '~/components/Header';
import Pill from "~/components/Pill";

export const meta: MetaFunction = () => {
  return [
    { title: "spindraad" },
    { name: "description", content: "Spindraad bouwt de beste web applicaties." },
  ];
};

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="w-full h-[80vh] flex flex-col items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center bg-accent-orange">
          <div className="container px-4 md:px-6 text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                Verhoog je digitale aanwezigheid
              </h1>
              <Pill>
                Creëer een onvergetelijke digitale ervaring
              </Pill>
            </div>
            <p className="max-w-[600px] mx-auto text-gray-200 md:text-xl">
              spindraad is een full-service webbureau dat zich specialiseert in het bouwen van prachtige, gebruiksvriendelijke websites en webapplicaties.
            </p>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Pill>Onze diensten</Pill>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Een uitgebreid aanbod van diensten
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Van strategie en ontwerp tot ontwikkeling en implementatie, spindraad biedt een uitgebreid pakket aan diensten om je digitale aanwezigheid naar een hoger niveau te tillen.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-4 py-12 lg:gap-6">
              <div className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
                <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
                  <BrushIcon className="h-6 w-6" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Web Design</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Wij creëren visueel indrukwekkende en gebruiksvriendelijke websites die je publiek betoveren.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
                <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
                  <CodeIcon className="h-6 w-6" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Web Development</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We bouwen hoogpresterende, schaalbare webapplicaties die je bedrijf vooruit helpen.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
                <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
                  <LightbulbIcon className="h-6 w-6" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Digitale Strategie</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Het ontwikkelen van uitgebreide digitale strategieën om je online aanwezigheid af te stemmen op je bedrijfsdoelen.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
                <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
                  <RocketIcon className="h-6 w-6" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">SEO Optimization</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Je website’s zichtbaarheid en ranking in zoekmachines verbeteren om meer verkeer en leads te genereren.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
                <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
                  <BoltIcon className="h-6 w-6" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Performance Optimization</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Zorgen dat je website snel laadt en optimaal presteert op alle apparaten en browsers.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
                <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Branding en Identiteit</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Het creëren van een samenhangende en memorabele merkidentiteit om je bedrijf te onderscheiden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <Pill>Onze Portfolio</Pill>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bekijk onze uitzonderlijke opdrachten</h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ontdek een selectie van onze bekroonde webontwerpen en -applicaties die publiek hebben betoverd en resultaten hebben geboekt voor onze klanten.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 bg-gray-100 dark:bg-gray-800">
                  <h3 className="text-lg font-bold">Project Name</h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of the project.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 bg-gray-100 dark:bg-gray-800">
                  <h3 className="text-lg font-bold">Project Name</h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of the project.</p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="aspect-[4/3] object-cover"
                />
                <div className="p-4 bg-gray-100 dark:bg-gray-800">
                  <h3 className="text-lg font-bold">Project Name</h3>
                  <p className="text-gray-500 dark:text-gray-400">A brief description of the project.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <Pill>Onze Klanten</Pill>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vertrouwd door toonaangevende merken</h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Ons getalenteerde team heeft de eer gehad samen te werken met enkele van de meest gerespecteerde merken in de industrie. We zijn trots om een selectie van onze klanten te kunnen tonen.
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
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <Pill>Neem contact op</Pill>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Wat wordt je volgende project?</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                spindraad creëert verbluffende, hoogpresterende webervaringen die je publiek betoveren en resultaten opleveren. Laten we samenwerken om je volgende project tot leven te brengen.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4">
                <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                <Textarea placeholder="Project Brief" className="max-w-lg flex-1 min-h-[150px]" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
