import sgMail from '@sendgrid/mail';
import { ContactFormValues } from '~/validations/contactform'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const from = {
  email: 'contactformulier@spindraad.nl',
  name: 'Contactformulier spindraad',
};

function convertValuesToHtml(values: ContactFormValues) {
  return `
    <p><strong>Name:</strong> ${values.name}</p>
    <p><strong>Email:</strong> ${values.email}</p>
    <p><strong>Brief:</strong> ${values.brief}</p>
    <p><strong>Deadline:</strong> ${values.deadline}</p>
    <p><strong>Budget:</strong> ${values.budget}</p>
  `;
}

export async function sendMail(subject: string, values: ContactFormValues) {
  try {
    const res = await sgMail
      .send({
        to: 'lody@spindraad.nl',
        from,
        subject,
        html: convertValuesToHtml(values),
      });
    console.log('Mail sent to my mailbox');
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export function spamCheck(values: ContactFormValues) {
  // Highly customized spam check

  let isSpam = false;

  if (values.email.includes('do-not-respond.me')) {
    isSpam = true;
  }

  if (values.brief === values.budget && values.budget === values.deadline) {
    isSpam = true;
  }

  return isSpam;
}
