import { Category } from './components/categories';
import { Restaurant } from './components/featured-row';
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

export const getRestaurantById = (id: string): Promise<Restaurant[]> => {
  return sanityQuery(
    `
      *[_type == 'restaurant' && _id == '${id}'] {
        ...,
        dishes[]->{
          ...
        },
        type->{
          name
        }
      }
    `,
  );
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
