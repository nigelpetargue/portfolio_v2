'use client';

import { Anchor, AppShell, Flex, Stack, Text } from '@mantine/core';
import {
  IconAddressBook,
  IconBriefcase,
  IconDots,
  IconSticker2,
  IconUser,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigations = [
  {
    icon: <IconUser stroke={2} />,
    label: 'Me',
    href: '/',
  },
  {
    icon: <IconSticker2 stroke={2} />,
    label: 'Blog',
    href: '/blog',
  },
  {
    icon: <IconBriefcase stroke={2} />,
    label: 'Projects',
    href: '/projects',
  },
  {
    icon: <IconAddressBook stroke={2} />,
    label: 'Contact',
    href: '/contact',
  },
  {
    icon: <IconDots stroke={2} />,
    label: 'More',
    href: '/more',
  },
];

export function Footer() {
  const pathname = usePathname();

  return (
    <AppShell.Footer hiddenFrom='sm'>
      <Flex h='100%' gap='md' justify='space-evenly' align='center'>
        {navigations.map((item, index) => {
          const selected = pathname === item.href;

          return (
            <Anchor
              key={index}
              href={item.href}
              component={Link}
              underline='never'
              c={selected ? 'red' : 'black'}
              onMouseOver={(e) => (e.currentTarget.style.color = 'red')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'black')}
            >
              <Stack gap={5} align='center'>
                {item.icon}
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
