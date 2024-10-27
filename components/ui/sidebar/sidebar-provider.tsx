import { cookies } from 'next/headers';
import { SidebarClientProvider } from '.';

export async function SidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const state = cookieStore.get('sidebar:state');

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
