import type { MetaFunction } from '@remix-run/node';
import { SearchSection } from 'src/components/search-section/SearchSection';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return <SearchSection />;
}
