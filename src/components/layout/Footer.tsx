'use client';

import {
  Anchor,
  AppShell,
  Flex,
  Stack,
  Text,
  useMantineTheme,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconAddressBook,
  IconBriefcase,
  IconDots,
  IconSticker2,
  IconUser,
} from '@tabler/icons-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  // Determine the default (non-selected) color based on the color scheme
  const defaultColor =
    colorScheme === 'dark' ? theme.colors.gray[6] : theme.colors.gray[7];

  return (
    <AppShell.Footer h={80} hiddenFrom='sm'>
      <Flex h='100%' gap='md' justify='space-evenly' align='center'>
        {navigations.map((item, index) => {
          const selected = pathname === item.href;
          const Icon = item.icon;

          // The color for selected items. red[6] works well in both themes usually.
          const selectedColor = theme.colors.red[6];

          return (
            <Anchor
              key={index}
              href={item.href}
              component={Link}
              underline='never'
              style={{
                color: selected ? selectedColor : defaultColor,
                textAlign: 'center',
              }}
            >
              <Stack gap={5} align='center'>
                <Icon
                  size={24}
                  color={selected ? selectedColor : defaultColor}
                />
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
