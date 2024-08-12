import type { MetaFunction } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';
import { useEffect } from 'react';
import { Loading } from 'src/components/loading/Loading';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix Pokemon' },
    { name: 'description', content: 'Welcome to Remix Pokemon!' },
  ];
};

export default function Index() {
  let navigate = useNavigate();

  // useEffect(() => {
  //   const searchValue = localStorage.getItem('searchValue');
  //   navigate(`/light/1/${searchValue ?? 'empty'}`);
  // }, []);

  return <Loading />;
}
