import { ActionFunctionArgs } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  const clonedRequest = request.clone();

  const response = await fetch('https://plausible.io/api/event', clonedRequest);
  const responseBody = await response.text();

  const clonedResponse = response.clone();
  return new Response(responseBody, clonedResponse);
}
