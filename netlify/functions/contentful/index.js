import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.NODE_ENV === "development"
    ? process.env.CONTENTFUL_PREVIEW_TOKEN
    : process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: process.env.NODE_ENV === "development" ? "preview.contentful.com" : "cdn.contentful.com",
});


export async function handler() {
    try {
      const response = await contentfulClient.getEntries<BlogPost>(
        {
          content_type: "page",
          "fields.slug": "home",
          include: 3
        }
      );
      console.log(response);
      // const items = response.items.map((item: Entry<BlogPost>) => item.fields);
      return {
        statusCode: 200,
        body: JSON.stringify(response)
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch data from Contentful' })
      };
    }
  }
