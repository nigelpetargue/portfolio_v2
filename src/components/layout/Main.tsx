'use client';

import { AppShell, em, Flex } from '@mantine/core';
import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { useMediaQuery } from '@mantine/hooks';

export function Main({ children }: { children: ReactNode }) {
  const small = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <AppShell.Main py={small ? 80 : 0} h='100vh' px='md'>
      <Flex
        w='100%'
        h='100%'
        direction={small ? 'column' : 'row'}
        gap='lg'
        py='md'
      >
        <Sidebar />
        {children}
      </Flex>
    </AppShell.Main>
  );
}
