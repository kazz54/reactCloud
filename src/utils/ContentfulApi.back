// /utils/ContentfulApi.js

export default class ContentfulApi {

  static async callContentful(query) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/9heip63yijn8/`;

    const fetchOptions = {
      method: "POST",
      headers: {
        Authorization: "Bearer CQ4Ja0XdmfMso-gIfbIxBnEUBCFwIttPKT-R57fvZek",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      const data = await fetch(fetchUrl, fetchOptions).then((response) =>
        response.json(),
      );
      return data;
    } catch (error) {
      throw new Error("Could not fetch data from Contentful!");
    }
  }
}
