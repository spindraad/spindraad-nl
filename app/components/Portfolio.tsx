import Pill from '~/components/Pill';

export default function Portfolio() {
  return <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <Pill>Onze Portfolio</Pill>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bekijk onze uitzonderlijke opdrachten</h2>
        <p
          className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          Ontdek een selectie van onze bekroonde webontwerpen en -applicaties die publiek hebben betoverd en
          resultaten hebben geboekt voor onze klanten.
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
  </section>;
}
