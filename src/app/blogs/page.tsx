import { Footer, Header, Main } from '@/components/layout';
import { AppShell, Text } from '@mantine/core';

export default function Page() {
  return (
    <AppShell header={{ height: 77 }} footer={{ height: 80 }}>
      <Header />
      <Main>
        <Text>Hello World</Text>
      </Main>
      <Footer />
    </AppShell>
  );
}
