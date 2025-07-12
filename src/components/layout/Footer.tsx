'use client';

import {
  Anchor,
  AppShell,
  Flex,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconAddressBook,
  IconBriefcase,
  IconDots,
  IconSticker2,
  IconUser,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classes from './footer.module.css';

const navigations = [
  {
    icon: IconUser,
    label: 'Me',
    href: '/',
  },
  {
    icon: IconSticker2,
    label: 'Articles',
    href: '/articles',
  },
  {
    icon: IconBriefcase,
    label: 'Projects',
    href: '/projects',
  },
  {
    icon: IconAddressBook,
    label: 'Contact',
    href: '/contact',
  },
  {
    icon: IconDots,
    label: 'More',
    href: '/more',
  },
];

export function Footer() {
  const pathname = usePathname();
  const { colorScheme } = useMantineColorScheme();

  // Determine the default (non-selected) color based on the color scheme
  const defaultColor = colorScheme === 'dark' ? classes.dark : classes.light;

  return (
    <AppShell.Footer h={80} hiddenFrom='sm'>
      <Flex h='100%' gap='md' justify='space-evenly' align='center'>
        {navigations.map((item, index) => {
          const selected = pathname === item.href;
          const Icon = item.icon;

          return (
            <Anchor
              key={index}
              href={item.href}
              component={Link}
              underline='never'
              classNames={{
                root: selected ? classes.selected : defaultColor,
              }}
            >
              <Stack gap={5} align='center'>
                <Icon size={24} />
                <Text fz='xs' fw='bold'>
                  {item.label}
                </Text>
              </Stack>
            </Anchor>
          );
        })}
      </Flex>
    </AppShell.Footer>
  );
}
