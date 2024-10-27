import { cookies } from "next/headers";
import { SidebarProvider } from "./ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export async function ServerSidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieState = await cookies();
  const state = cookieState.get("sidebar:state");

  let defaultOpen = true;
  if (state) {
    defaultOpen = state.value === "true";
  }

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
}
