'use client';

import {
  ActionIcon,
  AppShell,
  Avatar,
  Button,
  Flex,
  Group,
} from '@mantine/core';
import {
  IconDashboard,
  IconFileText,
  IconHome,
  IconSearch,
} from '@tabler/icons-react';
import ThemeSwitch from '../theme';
import { Spotlight, spotlight, SpotlightActionData } from '@mantine/spotlight';

const actions: SpotlightActionData[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Get to home page',
    onClick: () => console.log('Home'),
    leftSection: <IconHome size={24} stroke={1.5} />,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    description: 'Get full information about current system status',
    onClick: () => console.log('Dashboard'),
    leftSection: <IconDashboard size={24} stroke={1.5} />,
  },
  {
    id: 'documentation',
    label: 'Documentation',
    description: 'Visit documentation to lean more about all features',
    onClick: () => console.log('Documentation'),
    leftSection: <IconFileText size={24} stroke={1.5} />,
  },
];

export function Header() {
  return (
    <AppShell.Header h={77} hiddenFrom='sm'>
      <Flex h='100%' align='center' justify='space-between' px='lg'>
        <Avatar color='red' name='Nigel' size='md' />
        <Group align='center'>
          <ActionIcon
            variant='transparent'
            color='gray[7]'
            aria-label='Settings'
            onClick={spotlight.open}
          >
            <IconSearch size={24} stroke={1.5} />
          </ActionIcon>
          <ThemeSwitch />
          <Button color='red' radius='sm'>
            Subscribe
          </Button>
        </Group>
      </Flex>

      <Spotlight
        actions={actions}
        nothingFound='Nothing found...'
        highlightQuery
        searchProps={{
          leftSection: <IconSearch size={20} stroke={1.5} />,
          placeholder: 'Search...',
        }}
      />
    </AppShell.Header>
  );
}
