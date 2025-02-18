import Pill from '~/components/Pill';
import { Input } from '~/components/ui/input';
import { Textarea } from '~/components/ui/textarea';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { useFetcher } from 'react-router';
import Icon from '~/components/Icon';
import { useEffect, useState } from 'react';
import Message from '~/components/Message';
import { ContactFormValues, ContactFormErrors } from '~/validations/contactform';
import { ActionData } from '~/types/ActionData';
import SpindraadCaption from '~/components/SpindraadCaption';

export type ContactFormActionData = ActionData<ContactFormValues, ContactFormErrors>;

export default function Contact() {
  const fetcher = useFetcher<ContactFormActionData>();

  const [ message, setMessage ] = useState('');

  const isSubmitting = fetcher.state !== 'idle';

  useEffect(() => {
    const data = fetcher.data;

    if (data) {
      if (data.success) {
        setMessage('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.');
      } else {
        setMessage('Er is iets misgegaan. Probeer het later opnieuw.');
      }
    } else {
      setMessage('');
    }
  }, [ fetcher.data ]);

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <Pill color="accent-orange">Neem contact op</Pill>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Wat wordt je volgende project?</h2>
          <p
            className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            <SpindraadCaption /> creëert verbluffende, hoogpresterende
            webervaringen die je publiek betoveren en resultaten
            opleveren. Laten we samenwerken om je volgende project tot leven te brengen.
          </p>
          <p className="italic text-sm text-gray-500">
          Alle velden zijn verplicht.
          </p>
        </div>

        { fetcher.data && fetcher.data.success ? (
          <div className="mx-auto w-full mt-8">
            <Message variant="success">{ message }</Message>
          </div>
        ) : (
          <>
            { fetcher.data && !fetcher.data.success && (
              <div className="mx-auto w-full my-8">
                <Message variant="error">{ message }</Message>
              </div>
            ) }
            <div className="mx-auto w-full max-w-sm space-y-2">
              <fetcher.Form method="post" action="/api/contactform" className="grid grid-cols-1 gap-4 text-left">
                <input className="hidden" type="email" name="user-email-address" value="" onChange={() => {}} />
                <div className="flex flex-col gap-2">
                  <Label className={`${fetcher.data?.errors?.name ? 'text-red-400' : ''}`} htmlFor="name">Naam</Label>
                  <Input id="name" name="name" type="text" className={ `max-w-lg flex-1 ${fetcher.data?.errors?.name ? 'border-red-400' : ''}` } aria-invalid={fetcher.data?.errors?.name ? true : undefined}
                         aria-describedby="name-error" />
                  { fetcher.data?.errors?.name && (
                    <p id="name-error" className="text-red-400 text-sm font-chivo">{ fetcher.data.errors.name }</p>
                  ) }
                </div>

                <div className="flex flex-col gap-2">
                  <Label className={`${fetcher.data?.errors?.email ? 'text-red-400' : ''}`} htmlFor="email">E-mailadres</Label>
                  <Input id="email" name="email" type="email" className={ `max-w-lg flex-1 ${fetcher.data?.errors?.email ? 'border-red-400' : ''}` } aria-invalid={fetcher.data?.errors?.email ? true : undefined}
                         aria-describedby="email-error" />
                  { fetcher.data?.errors?.email && (
                    <p id="name-error" className="text-red-400 text-sm font-chivo">{ fetcher.data.errors.email }</p>
                  ) }
                </div>

                <div className="flex flex-col gap-2">
                  <Label className={`${fetcher.data?.errors?.brief ? 'text-red-400' : ''}`} htmlFor="brief">Project omschrijving</Label>
                  <Textarea id="brief" name="brief" className={ `max-w-lg flex-1 min-h-[150px] ${fetcher.data?.errors?.brief ? 'border-red-400' : ''}` } aria-invalid={fetcher.data?.errors?.brief ? true : undefined}
                         aria-describedby="brief-error" />
                  { fetcher.data?.errors?.brief && (
                    <p id="name-error" className="text-red-400 text-sm font-chivo">{ fetcher.data.errors.brief }</p>
                  ) }
                </div>

                <div className="flex flex-col gap-2">
                  <Label className={`${fetcher.data?.errors?.deadline ? 'text-red-400' : ''}`} htmlFor="deadline">Geschatte opleverdatum of looptijd</Label>
                  <Input id="deadline" name="deadline" type="text" className={ `max-w-lg flex-1 ${fetcher.data?.errors?.deadline ? 'border-red-400' : ''}` } aria-invalid={fetcher.data?.errors?.deadline ? true : undefined}
                         aria-describedby="deadline-error" />
                  { fetcher.data?.errors?.deadline && (
                    <p id="name-error" className="text-red-400 text-sm font-chivo">{ fetcher.data.errors.deadline }</p>
                  ) }
                </div>

                <div className="flex flex-col gap-2">
                  <Label className={`${fetcher.data?.errors?.budget ? 'text-red-400' : ''}`} htmlFor="budget">Budget indicatie</Label>
                  <Input id="budget" name="budget" type="text" className={ `max-w-lg flex-1 ${fetcher.data?.errors?.budget ? 'border-red-400' : ''}` } aria-invalid={fetcher.data?.errors?.budget ? true : undefined}
                         aria-describedby="budget-error" />
                  { fetcher.data?.errors?.budget && (
                    <p id="name-error" className="text-red-400 text-sm font-chivo">{ fetcher.data.errors.budget }</p>
                  ) }
                </div>

                <Button type="submit" className="mt-2 w-full">
                  <Icon name={ isSubmitting ? 'stroopwafel' : 'paper-plane' }
                        className={ `mr-2 ${ isSubmitting ? 'animate-spin' : '' }` }/>
                  Indienen
                </Button>
              </fetcher.Form>
            </div>
          </>
        ) }
      </div>
    </section>
  );
}
