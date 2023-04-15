import contentful from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.PUBLIC_CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.PUBLIC_CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
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
