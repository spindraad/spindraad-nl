import { describe, test, expect} from 'vitest';
import { ContactFormErrors, ContactFormValues, validateContactForm } from './contactform';
import { ActionData } from '~/types/ActionData';

describe('Validate the contact form', () => {
  test('Validation is successful', async () => {
    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@doe.nl');
    formData.append('brief', 'This is a message');
    formData.append('deadline', 'Yesterday');
    formData.append('budget', '1000');

    const request = new Request('http://localhost', {
      method: 'POST',
      body: formData,
    });

    const result = await validateContactForm(request);

    expect(result).toStrictEqual<ActionData<ContactFormValues, ContactFormErrors>>({
      success: true,
      values: {
        name: 'John Doe',
        email: 'john@doe.nl',
        brief: 'This is a message',
        deadline: 'Yesterday',
        budget: '1000',
      },
    });
  });

  test('Validation is unsuccessful', async () => {
    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', '');
    formData.append('brief', 'This is a message');
    formData.append('deadline', '');
    formData.append('budget', '');

    const request = new Request('http://localhost', {
      method: 'POST',
      body: formData,
    });

    const result = await validateContactForm(request);

    expect(result).toStrictEqual<ActionData<ContactFormValues, ContactFormErrors>>({
      success: false,
      errors: {
        email: 'Email is required',
        budget: 'Budget is required',
      },
    });
  });

  test('Honeypot is filled', async () => {
    const formData = new FormData();
    formData.append('name', 'John Doe');
    formData.append('email', 'john@doe.nl');
    formData.append('brief', 'This is a message');
    formData.append('deadline', 'Yesterday');
    formData.append('budget', '1000');
    formData.append('userEmailAddress', 'filled');

    const request = new Request('http://localhost', {
      method: 'POST',
      body: formData,
    });

    const result = await validateContactForm(request);

    expect(result).toStrictEqual<ActionData<ContactFormValues, ContactFormErrors>>({
      success: false,
      errors: {
        honeypot: 'Honey pot isn\'t empty.',
      },
    });
  });
});
