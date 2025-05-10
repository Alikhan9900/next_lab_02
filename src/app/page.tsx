'use client';

import UserList from './components/UserList';
import { useEffect } from 'react';
import CreateUser from './components/CreateUser';

export default function Home() {
  useEffect(() => {
    console.log('BROWSER: NEXT_PUBLIC_SITE_NAME =', process.env.NEXT_PUBLIC_SITE_NAME);
  }, []);

  return (
      <main className="p-6 max-w-3xl mx-auto space-y-6">
        <h1>Site name: {process.env.NEXT_PUBLIC_SITE_NAME}</h1>
              <h1 className="text-2xl font-bold">Користувачі</h1>
              <CreateUser />
              <UserList />
      </main>
  );
}
