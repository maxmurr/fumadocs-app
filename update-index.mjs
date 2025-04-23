import algosearch from 'algoliasearch';
import { sync } from 'fumadocs-core/search/algolia';
import * as fs from 'node:fs';
 
const content = fs.readFileSync('.next/server/app/static.json.body');
 
/** @type {import('fumadocs-core/search/algolia').DocumentRecord[]} **/
const indexes = JSON.parse(content.toString());
 
const client = algosearch("TVO8CQ0RNZ", "e31a4c16de82ac6211e6a39e2d73f386");

async function main() {
  try {
    await sync(client, {
      documents: indexes, // search indexes, can be provided by your content source too
    });
    console.log('Successfully synced search indexes');
  } catch (error) {
    console.error('Failed to sync search indexes:', error);
    process.exit(1);
  }
}

main();