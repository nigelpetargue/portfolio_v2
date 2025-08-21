import {
  AppShell,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import { theme } from '@/utils';
import { Footer, Header, Main } from '@/components/layout';

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
