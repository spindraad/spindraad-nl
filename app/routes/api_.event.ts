import { ActionFunctionArgs } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  const { method, body, headers } = request;

  const response = await fetch('https://plausible.io/api/event', {
    body,
    method,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': headers.get('User-Agent') || '',
      'X-Forwarded-For': headers.get('X-Forwarded-For') || headers.get('X-Real-IP') || '',
    },
    duplex: 'half',
  });
  const { status, headers: responseHeaders } = response;
  const responseBody = await response.text();

  return new Response(responseBody, {
    status,
    headers: responseHeaders,
  });
}
