import { createClient } from '@sanity/client';
import imageBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'wwopt3vj',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-03-07',
});

const builder = imageBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);

export default client;
