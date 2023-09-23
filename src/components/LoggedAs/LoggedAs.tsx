'use client'

import useCurrentUser from '@/lib/hooks/useCurrentUser'
import { useSession } from 'next-auth/react';
import React from 'react'

const LoggedAs = () => {

  const { data: user } = useCurrentUser();

  console.log(user)

  return (
    <div>
      {user?.name}
    </div>
  );
}

export default LoggedAs