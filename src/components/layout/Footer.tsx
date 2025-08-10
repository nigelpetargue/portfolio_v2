'use client';

import {
  AppShell,
  Group,
  Stack,
  Text,
  UnstyledButton,
  useMantineTheme,
  rem,
} from '@mantine/core';
import {
  IconFileText,
  IconPencil,
  IconList,
  IconUsers,
  IconDots,
} from '@tabler/icons-react';
import { useState } from 'react';

// Navigation items based on the provided image
const navItems = [
  { icon: IconFileText, label: 'Blog' },
  { icon: IconPencil, label: 'Case Studies' },
  { icon: IconList, label: 'Categories' },
  { icon: IconUsers, label: 'Membership' },
  { icon: IconDots, label: 'More' },
];

export function Footer() {
  const theme = useMantineTheme();
  // State to track the active link, 'Blog' is active by default in the image
  const [active, setActive] = useState('Blog');

  const items = navItems.map((item) => {
    const isActive = item.label === active;
    return (
      <UnstyledButton
        key={item.label}
        onClick={() => setActive(item.label)}
        style={{ flex: 1 }} // Ensure each button takes equal space
      >
        <Stack align='center' gap={rem(4)}>
          <item.icon
            style={{ width: rem(24), height: rem(24) }}
            color={isActive ? theme.colors.red[6] : theme.colors.gray[7]}
            stroke={1.5}
          />
          <Text c={isActive ? 'red.6' : 'dimmed'} fz='xs' fw={500}>
            {item.label}
          </Text>
        </Stack>
      </UnstyledButton>
    );
  });

  return (
    // The AppShell.Footer is not changed, only its children.
    // I've added `withBorder` to get the top line shown in the reference image.
    <AppShell.Footer h={80} hiddenFrom='sm' withBorder>
      <Group h='100%' wrap='nowrap' justify='space-around'>
        {items}
      </Group>
    </AppShell.Footer>
  );
}
