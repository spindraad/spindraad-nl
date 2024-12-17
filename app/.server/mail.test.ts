import { describe, test, expect } from 'vitest';
import { spamCheck } from './mail';
import { ContactFormValues } from '~/validations/contactform';

describe('Testing mail services', () => {
  test('spam check should succeed for legit mails', () => {
    const values: ContactFormValues = {
      name: 'Donald Duck',
      email: 'donald@duck.nl',
      brief: 'I am looking for a web developer',
      deadline: 'ASAP',
      budget: '1000',
    }

    const result = spamCheck(values);

    expect(result).toBe(false);
  });

  test('spam check should fail for spammy mails', () => {
    const values: ContactFormValues = {
      name: 'Donald Duck',
      email: 'donald@do-not-respond.me',
      brief: 'I am looking for a web developer',
      deadline: 'ASAP',
      budget: '1000',
    };

    let result = spamCheck(values);

    expect(result).toBe(true);

    values.email = 'donald@duck.com';
    values.deadline = values.brief;
    values.budget = values.brief;

    result = spamCheck(values);

    expect(result).toBe(true);
  });
});
