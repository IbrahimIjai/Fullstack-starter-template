import { Toaster } from '@repo/ui/components/sonner';
import { ReactQueryClientProvider } from './react-query-client';
import { ThemeProvider } from './theme-provider';

export const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryClientProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        <Toaster />
      </ThemeProvider>
    </ReactQueryClientProvider>
  );
};
