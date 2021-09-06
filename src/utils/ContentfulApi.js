import { createClient } from "contentful";
const dotenv =  require('dotenv');
dotenv.config()
const space = process.env.REAT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.REAT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
