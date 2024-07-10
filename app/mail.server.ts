import sgMail from '@sendgrid/mail';
import { ContactFormValues } from '~/validations/contactform'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function convertValuesToHtml(values: ContactFormValues) {
  return `
    <p><strong>Name:</strong> ${values.name}</p>
    <p><strong>Email:</strong> ${values.email}</p>
    <p><strong>Brief:</strong> ${values.brief}</p>
    <p><strong>Deadline:</strong> ${values.deadline}</p>
    <p><strong>Budget:</strong> ${values.budget}</p>
  `;
}

export function sendMail(from: string, subject: string, values: ContactFormValues) {
  return sgMail
    .send({
      to: 'lody@spindraad.nl',
      from,
      subject,
      html: convertValuesToHtml(values),
    })
    .then((res) => {
      console.log('Mail sent to my mailbox');
      return res;
    })
    .catch((err) => {
      console.error(err);
      throw err;
    });
}
