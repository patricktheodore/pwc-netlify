import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function handler(event, context) {
  const entries = await client.getEntries({ 
    content_type: "page",
    "fields.slug": "home",
    include: 3 
});
  return {
    statusCode: 200,
    body: JSON.stringify(entries),
  };
}
