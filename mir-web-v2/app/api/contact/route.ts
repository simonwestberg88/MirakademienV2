import { contactEmail } from '@/app/lib/constants';

export async function POST(request: Request) {
  const body = await request.json()

  const formattedBody = JSON.stringify({
    "Emails": "simon.westberg@mirakademien.com",
    "Message": `${body.name}, ${body.email} \n ${body.message}`
  });

  const res = await fetch(`https://clientapi.benchmarkemail.com/Emails/${contactEmail}/Test`, {
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
    return new Response(JSON.stringify({
      error: 'Failed to subscribe',
      errors: response.Response.Errors,
    }), { status: 400 });
  }

  return new Response(JSON.stringify({ error: 'Unexpected response from the server' }), { status: 500 });
}