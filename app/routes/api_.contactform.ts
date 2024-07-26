import { ActionFunctionArgs, json } from '@remix-run/node';
import { validateContactForm } from '~/validations/contactform';
import { ContactFormActionData } from '~/components/Contact';
import { sendMail } from '~/mail.server';

export const loader = () => json('Method not allowed', { status: 405 });

export async function action({ request }: ActionFunctionArgs) {
  if (request.method.toLowerCase() !== 'post') {
    return json('Method not allowed', { status: 405 });
  }

  const results = await validateContactForm(request);

  if (!results.success && results.errors?.honeypot) {
    // This is a honeypot trap, so we don't want to return any errors.
    return json<ContactFormActionData>(results);
  }

  if (!results.success) {
    return json<ContactFormActionData>(results, { status: 400 });
  }

  const { values } = results;

  try {
    await sendMail('Contact formulier is ingevuld', values);
    return json<ContactFormActionData>(results, { status: 200 });
  }
  catch (error: unknown) {
    console.error('Error sending mail', error);
    return json<ContactFormActionData>({ success: false, errors: {} }, { status: 500 });
  }
}
