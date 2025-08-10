'use client';

import {
  Avatar,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
  useMantineTheme,
  UnstyledButton,
  Button,
  ActionIcon,
  rem,
  Divider,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconPencil,
  IconBriefcase2,
  IconSchool,
  IconSquareLetterN,
  IconRosetteDiscountCheck,
  IconChevronLeft,
  IconDownload,
  IconSearch,
  IconBook,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import ThemeToggle from '../theme';

const navs = [
  { label: 'Blog', icon: IconPencil, href: '/blog' },
  { label: 'About Nigel', icon: IconSquareLetterN, href: '/about' },
  { label: 'Case Studies', icon: IconBook, href: '/case-studies' },
  {
    label: 'Working Experince',
    icon: IconBriefcase2,
    href: '/categories',
  },
  { label: 'Educational Background', icon: IconSchool, href: '/membership' },
  {
    label: 'Certificates',
    icon: IconRosetteDiscountCheck,
    href: '/style-guide',
  },
];

// --- CUSTOM NAVIGATION BUTTON ---
// A custom component to render navigation links as seen in the design.
function CustomNavigationButton({
  item,
  active,
  onClick,
  isCollapsed,
  mounted,
}: {
  item: (typeof navs)[0];
  active: boolean;
  onClick: () => void;
  isCollapsed: boolean;
  mounted: boolean;
}) {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  const activeBackgroundColor = active
    ? colorScheme === 'light'
      ? theme.colors.red[0]
      : theme.colors.red[8]
    : 'transparent';

  const activeColor = active
    ? colorScheme === 'light'
      ? theme.colors.red[6]
      : 'white'
    : colorScheme === 'light'
    ? theme.colors.gray[7]
    : theme.colors.gray[3];

  return (
    <UnstyledButton
      onClick={onClick}
      style={{
        display: 'block',
        width: '100%',
        padding: theme.spacing.sm,
        borderRadius: theme.radius.md,
        color: mounted ? activeColor : 'inherit',
        backgroundColor: mounted ? activeBackgroundColor : 'inherit',
        justifyContent: isCollapsed ? 'center' : 'flex-start',
      }}
      className='hover:bg-gray-100 dark:hover:bg-dark-600'
    >
      <Group justify={isCollapsed ? 'center' : 'flex-start'}>
        <item.icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        {!isCollapsed && (
          <Text
            size='sm'
            fw={500}
            style={{
              opacity: isCollapsed ? 0 : 1,
              transition: 'opacity 0.2s ease-in-out',
            }}
          >
            {item.label}
          </Text>
        )}
      </Group>
    </UnstyledButton>
  );
}

export function Sidebar() {
  // Using state to track the active link, defaulting to 'Blog'
  const [activeLink, setActiveLink] = useState('Blog');
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [mounted, setMounted] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => setMounted(true), []);

  return (
    <Paper
      withBorder
      shadow='sm'
      p='md'
      radius='lg'
      visibleFrom='sm'
      style={{
        width: isCollapsed ? 80 : 300,
        height: '97vh',
        transition: 'width 0.3s ease-in-out',
      }}
      pos='relative'
    >
      <Flex h='100%' direction='column'>
        {/* Top Section: User Info & Main Navigation */}
        <Stack gap='xl'>
          {/* User Info */}
          <Group justify='space-between'>
            <Group>
              <Avatar color='red' radius='xl'>
                NI
              </Avatar>
              {!isCollapsed && (
                <Stack
                  gap={0}
                  style={{
                    opacity: isCollapsed ? 0 : 1,
                    transition: 'opacity 0.2s ease-in-out',
                  }}
                >
                  <Text fz='sm' fw={600}>
                    Nigel Petargue
                  </Text>
                  <Text fz='xs' fw={500} tt='uppercase' lts={0.5} c='dimmed'>
                    Developer
                  </Text>
                </Stack>
              )}
            </Group>
            <ActionIcon
              variant='default'
              size='md'
              radius='md'
              pos='absolute'
              right={-10}
              onClick={toggleCollapse}
              style={{
                transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <IconChevronLeft
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>

          {/* Main Navigation Links */}
          <Stack gap='xs' mt='md'>
            {navs.map((item) => (
              <CustomNavigationButton
                key={item.label}
                item={item}
                active={item.label === activeLink}
                onClick={() => setActiveLink(item.label)}
                isCollapsed={isCollapsed}
                mounted={mounted}
              />
            ))}
          </Stack>
        </Stack>

        <Divider my='lg' />

        {/* Bottom Section: Social, Auth & Actions */}
        <Stack gap='lg' flex={1} justify='space-between'>
          {/* Social Links */}
          {!isCollapsed && (
            <Stack
              gap='sm'
              pl='sm'
              style={{
                opacity: isCollapsed ? 0 : 1,
                transition: 'opacity 0.2s ease-in-out',
              }}
            >
              <Text
                c='dimmed'
                fz='sm'
                className='cursor-pointer hover:text-black'
              >
                LinkedIn
              </Text>
              <Text
                c='dimmed'
                fz='sm'
                className='cursor-pointer hover:text-black'
              >
                Github
              </Text>
              <Text
                c='dimmed'
                fz='sm'
                className='cursor-pointer hover:text-black'
              >
                Facebook
              </Text>
            </Stack>
          )}

          <Stack
            justify={isCollapsed ? 'center' : 'inherit'}
            align={isCollapsed ? 'center' : 'inherit'}
          >
            {!isCollapsed ? (
              <Button
                fullWidth
                variant='gradient'
                gradient={{ from: 'orange', to: 'red', deg: 90 }}
                size='md'
                radius='md'
                leftSection={<IconDownload size={20} />}
                justify='center'
                style={{
                  opacity: isCollapsed ? 0 : 1,
                  transition: 'opacity 0.2s ease-in-out',
                }}
              >
                Download CV
              </Button>
            ) : (
              <ActionIcon
                variant='gradient'
                gradient={{ from: 'orange', to: 'red', deg: 90 }}
                size='lg'
                radius='md'
                style={{ width: '80%' }}
              >
                <IconDownload size={20} />
              </ActionIcon>
            )}

            {/* Action Icons */}
            <Group justify='center' grow>
              <ActionIcon variant='default' size='lg' radius='md'>
                <IconSearch
                  style={{ width: rem(20), height: rem(20) }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ThemeToggle variant='default' />
            </Group>
          </Stack>
        </Stack>
      </Flex>
    </Paper>
  );
}
