'use client';

import { SegmentedControl } from '@mantine/core';
import { useState } from 'react';

export default function DisplayMode({ mode }: { mode: string }) {
  const [displayMode, setDisplayMode] = useState(mode);
  return (
    <SegmentedControl
      radius='xl'
      size='md'
      value={displayMode}
      onChange={setDisplayMode}
      data={[
        { label: 'Board', value: 'board' },
        { label: 'Detailed', value: 'detailed' },
      ]}
    />
  );
}
