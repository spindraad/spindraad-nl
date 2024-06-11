import Pill from '~/components/Pill';
import { BoltIcon, BriefcaseIcon, BrushIcon, CodeIcon, LightbulbIcon, RocketIcon } from '~/components/icons';

export default function Services() {
  return <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <Pill>Onze diensten</Pill>
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
        <div
          className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
          <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
            <BrushIcon className="h-6 w-6"/>
          </div>
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-bold">Web Design</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Wij creëren visueel indrukwekkende en gebruiksvriendelijke websites die je publiek betoveren.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
          <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
            <CodeIcon className="h-6 w-6"/>
          </div>
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-bold">Web Development</h3>
            <p className="text-gray-500 dark:text-gray-400">
              We bouwen hoogpresterende, schaalbare webapplicaties die je bedrijf vooruit helpen.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
          <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
            <LightbulbIcon className="h-6 w-6"/>
          </div>
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-bold">Digitale Strategie</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Het ontwikkelen van uitgebreide digitale strategieën om je online aanwezigheid af te stemmen op je
              bedrijfsdoelen.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
          <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
            <RocketIcon className="h-6 w-6"/>
          </div>
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-bold">SEO Optimization</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Je website’s zichtbaarheid en ranking in zoekmachines verbeteren om meer verkeer en leads te
              genereren.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
          <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
            <BoltIcon className="h-6 w-6"/>
          </div>
          <div className="space-y-2 text-center">
            <h3 className="text-lg font-bold">Performance Optimization</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Zorgen dat je website snel laadt en optimaal presteert op alle apparaten en browsers.
            </p>
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
          <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
            <BriefcaseIcon className="h-6 w-6"/>
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
  </section>;
}
