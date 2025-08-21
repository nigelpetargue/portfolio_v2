'use client';

import { AppShell, Divider, em, Flex, Paper } from '@mantine/core';
import { ReactNode } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Sidebar } from './Sidebar';
import { Aside } from './Aside';

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
        <Paper
          withBorder
          shadow='sm'
          radius='lg'
          flex={1}
          display='flex'
          dir='row'
        >
          {children}

          <Divider orientation='vertical' />

          <Aside />
        </Paper>
      </Flex>
    </AppShell.Main>
  );
}
