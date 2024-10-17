import { newsletterId } from '@/app/lib/constants';

export async function POST(request: Request) {
  const body = await request.json()
  const res = await fetch(`https://clientapi.benchmarkemail.com/Contact/${newsletterId}/ContactDetails/CSV`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.BENCHMARKEMAIL_ACCESS_TOKEN!,
    },
    body: body
  });

  const response = await res.json()

  return Response.json(response)
}