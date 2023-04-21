import { createClient } from 'contentful';

export async function handler(event, context) {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.NODE_ENV === "development"
        ? process.env.CONTENTFUL_PREVIEW_TOKEN
        : process.env.CONTENTFUL_DELIVERY_TOKEN,
      host: process.env.NODE_ENV === "development" ? "preview.contentful.com" : "cdn.contentful.com",
    });

    const response = await client.getEntry('5usQI264iQkMA3kiX8oRC3');

    return {
      statusCode: 200,
      body: JSON.stringify(response.items)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data from Contentful' })
    };
  }
}
