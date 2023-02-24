import { Person } from './types/Person';

// eslint-disable-next-line max-len
const API_URL
  = 'https://mate-academy.github.io/react_people-table/api/people.json';

function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

export async function getPeople(): Promise<Person[]> {
  // keep this delay for testing purpose
  return wait(2000)
    .then(() => fetch(API_URL))
    .then((response) => response.json());
}