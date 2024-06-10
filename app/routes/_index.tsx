import type { MetaFunction } from "@remix-run/node";
// import { Label } from "~/components/ui/label"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"
// import { Button } from "~/components/ui/button"
import { LightbulbIcon, BoltIcon, BriefcaseIcon, BrushIcon, CodeIcon, RocketIcon, MountainIcon} from '~/components/icons';
import Header from '~/components/Header';

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
        <section className="w-full h-[80vh] flex flex-col items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center">
          <div className="container px-4 md:px-6 text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                Elevate Your Digital Presence
              </h1>
              <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm text-gray-50">
                Crafting Stunning Web Experiences
              </div>
            </div>
            <p className="max-w-[600px] text-gray-200 md:text-xl">
              Acme Web Studio crafts stunning, high-performing web experiences that captivate your audience and drive
              results.
            </p>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm text-gray-50">Our Services</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Crafting Exceptional Digital Experiences
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  From strategy and design to development and deployment, Acme Web Studio offers a comprehensive suite
                  of services to elevate your digital presence.
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
                    Crafting visually stunning and user-friendly websites that captivate your audience.
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
                    Building high-performing, scalable web applications that drive your business forward.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
                <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
                  <LightbulbIcon className="h-6 w-6" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Digital Strategy</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Developing comprehensive digital strategies to align your online presence with your business goals.
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
                    Improving your website's visibility and ranking in search engines to drive more traffic and leads.
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
                    Ensuring your website loads fast and performs optimally across all devices and browsers.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 border border-gray-200 rounded-lg p-4 dark:border-gray-700">
                <div className="bg-gray-200 text-gray-900 p-3 rounded-full">
                  <BriefcaseIcon className="h-6 w-6" />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-lg font-bold">Branding and Identity</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Crafting a cohesive and memorable brand identity to differentiate your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm text-gray-50">Our Portfolio</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Showcasing Our Exceptional Work</h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore a selection of our award-winning web designs and applications that have captivated audiences and
                driven results for our clients.
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
              <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm text-gray-50">Our Clients</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Leading Brands</h2>
              <p className="mx-auto max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our talented team has had the privilege of working with some of the most respected brands in the
                industry. We're proud to showcase a selection of our clients.
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
              <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm text-gray-50">Get in Touch</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Let's Discuss Your Next Project</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Acme Web Studio crafts stunning, high-performing web experiences that captivate your audience and drive
                results.
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
