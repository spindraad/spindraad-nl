import Pill from '~/components/Pill';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';

export default function Contact() {
  return <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-3">
        <Pill>Neem contact op</Pill>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Wat wordt je volgende project?</h2>
        <p
          className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          spindraad creëert verbluffende, hoogpresterende webervaringen die je publiek betoveren en resultaten
          opleveren. Laten we samenwerken om je volgende project tot leven te brengen.
        </p>
      </div>
      <div className="mx-auto w-full max-w-sm space-y-2">
        <form className="flex flex-col gap-4">
          <Input type="text" placeholder="Name" className="max-w-lg flex-1"/>
          <Input type="email" placeholder="Email" className="max-w-lg flex-1"/>
          <Textarea placeholder="Project Brief" className="max-w-lg flex-1 min-h-[150px]"/>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2"/>
          </div>
        </form>
      </div>
    </div>
  </section>;
}
