import { newsletterId } from '@/app/lib/constants';

export async function POST(request: Request) {
  const body = await request.json()
  const formattedBody = JSON.stringify({
    "EmailIDs": body.email
  });

  const res = await fetch(`https://clientapi.benchmarkemail.com/Contact/${newsletterId}/ContactDetails/CSV`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'AuthToken': process.env.BENCHMARKEMAIL_ACCESS_TOKEN!,
    },
    body: formattedBody
  });

  const response = await res.json();
  if (response.Response.Status === '1') {
    return new Response(JSON.stringify({ message: 'Subscribed successfully', data: response }), { status: 200 });
  } else if (response.Response.Status === '-1') {
    console.error("error sending contact form info", response);
    return new Response(JSON.stringify({
      error: 'Failed to subscribe',
      errors: response.Response.Errors, // Attach errors if available
    }), { status: 400 });
  }
  console.error("error sending contact form info", response);

  return new Response(JSON.stringify({ error: 'Unexpected response from the server' }), { status: 500 });
}