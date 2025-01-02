import { Category } from './components/categories';
import { client } from './sanity';

const sanityQuery = (query: any) => client.fetch(query);

export const getFeaturedRestaurants = () => {
  return sanityQuery(
    `
      *[_type == 'featured']{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type->{
          name
          }
        }
      }
    `,
  );
};

export const getCategories = (): Promise<Category[]> => {
  return sanityQuery(`*[_type == 'category'] | order(name asc)`);
};

export const getFeaturedRestaurantsById = (id: string) => {
  return sanityQuery(
    `
      *[_type == 'featured' && _id == ${id}]{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type->{
          name
          }
        }
      }[0]
    `,
  );
};
