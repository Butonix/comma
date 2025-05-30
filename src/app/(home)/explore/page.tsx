import AppShell from "@/components/layout/app-shell";
import AppHeader from "@/components/layout/header";
import NavButton from "@/components/layout/nav-button";
import { siteConfig } from "@/config/site";
import { generateSEO } from "@/lib/utils";
import { Suspense } from "react";
import Client from "./client";
import QueryProvider from "./query-provider";

export const metadata = generateSEO({
  title: "Explore",
});

export default async function ExplorePage() {
  return (
    <AppShell className="pt-20 gap-5 min-h-screen">
      <AppHeader
        title="Explore"
        description="You can search for Comma writers here."
        className="[&_.title]:multi-[text-3xl;font-semibold] [&_.description]:text-base max-md:multi-[flex-col;items-start;gap-5]"
      >
        <div className="flex gap-2">
          <NavButton
            href="/home"
            icon="home"
            direction="ltr"
            buttonVariant="ghost"
            buttonClassname="gap-2"
            aria-label="Back to home"
          >
            Home page
          </NavButton>
          <NavButton
            href={siteConfig.links.app}
            icon="logo"
            direction="ltr"
            buttonVariant="ghost"
            buttonClassname="gap-2"
            aria-label="Go to App"
          >
            Comma
          </NavButton>
        </div>
      </AppHeader>
      <QueryProvider>
        <Suspense>
          <Client />
        </Suspense>
      </QueryProvider>
    </AppShell>
  );
}
