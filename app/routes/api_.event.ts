import { ActionFunctionArgs } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  const { method, body } = request;

  console.log('headers: ', Object.fromEntries(request.headers));

  const response = await fetch('https://plausible.io/api/event', {
    body,
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { status, headers } = response;
  const responseBody = await response.text();

  return new Response(responseBody, {
    status,
    headers,
  });
}
