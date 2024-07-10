import { ActionData } from '~/types/ActionData';

export type ContactFormValues = {
  name: string;
  email: string;
  brief: string;
  deadline: string;
  budget: string;
}

export type ContactFormErrors = {
  name?: string;
  email?: string;
  brief?: string;
  deadline?: string;
  budget?: string;
  honeypot?: string;
}

export async function validateContactForm(request: Request): Promise<ActionData<ContactFormValues, ContactFormErrors>> {
  const formData = await request.formData();
  const body = Object.fromEntries(formData);

  if (body.userEmailAddress) {
    return {
      success: false,
      errors: {
        honeypot: 'Honey pot isn\'t empty.',
      },
    };
  }

  const errors: ContactFormErrors = {};

  if (!body.name) {
    errors.name = 'Name is required';
  }

  if (!body.email) {
    errors.email = 'Email is required';
  }

  if (!body.brief) {
    errors.brief = 'Message is required';
  }

  if (!body.budget) {
    errors.budget = 'Budget is required';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  return {
    success: true,
    values: body as ContactFormValues,
  };
}
