import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import Header from "../components/Header";

import TanstackQueryLayout from "../integrations/tanstack-query/layout";

import TanstackQueryProvider from "../integrations/tanstack-query/provider";

export const Route = createRootRoute({
	component: () => (
		<>
			<TanstackQueryProvider>
			
				<Header />
				<main className="bg-[#00b050] min-h-screen w-full flex flex-col h-[100%] px-4 py-8">
  <Outlet />
</main>

				<TanStackRouterDevtools />

				<TanstackQueryLayout />
			</TanstackQueryProvider>
		</>
	),
});
