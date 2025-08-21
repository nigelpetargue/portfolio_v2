import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import classes from './theme.module.css';

interface Props {
  variant?: string;
  color?: string;
  stroke?: number;
}

export default function ThemeToggle({ variant, color, stroke }: Props) {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
      }
      variant={variant || 'default'}
      color={color || 'gray[7]'}
      aria-label='Toggle color scheme'
      size='lg'
      radius='md'
    >
      <IconSun
        className={cx(classes.icon, classes.light)}
        stroke={stroke || 1.5}
      />
      <IconMoon
        className={cx(classes.icon, classes.dark)}
        stroke={stroke || 1.5}
      />
    </ActionIcon>
  );
}
