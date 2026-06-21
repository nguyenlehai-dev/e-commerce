import type { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return <main className="beauty-page">{children}</main>;
}
