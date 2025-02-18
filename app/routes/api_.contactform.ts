import { ActionFunctionArgs, data } from 'react-router';
import { validateContactForm } from '~/validations/contactform';
import { ContactFormActionData } from '~/components/Contact';
import { sendMail } from '~/.server/mail';

export const loader = () => data('Method not allowed', { status: 405 });

export async function action({ request }: ActionFunctionArgs) {
  if (request.method.toLowerCase() !== 'post') {
    return data('Method not allowed', { status: 405 });
  }

  const results = await validateContactForm(request);

  if (!results.success && results.errors?.honeypot) {
    // This is a honeypot trap, so we don't want to return any errors.
    return data<ContactFormActionData>(results);
  }

  if (!results.success) {
    return data<ContactFormActionData>(results, { status: 400 });
  }

  const { values } = results;

  try {
    await sendMail('Contact formulier is ingevuld', values);
    return data<ContactFormActionData>(results, { status: 200 });
  }
  catch (error: unknown) {
    console.error('Error sending mail', error);
    return data<ContactFormActionData>({ success: false, errors: {} }, { status: 500 });
  }
}
