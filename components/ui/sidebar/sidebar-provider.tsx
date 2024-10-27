import { cookies } from 'next/headers';
import { SidebarClientProvider } from '.';

export async function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieState = await cookies();
  const state = cookieState.get('sidebar:state');

  let defaultOpen = true;
  if (state) {
    defaultOpen = state.value === 'true';
  }

  return (
    <SidebarClientProvider defaultOpen={defaultOpen}>
      {children}
    </SidebarClientProvider>
  );
}
