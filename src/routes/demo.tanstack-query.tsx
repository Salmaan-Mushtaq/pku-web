import { queryClient } from "@/integrations/tanstack-query/provider";
import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

const options = queryOptions({
	queryKey: ["people"],
	queryFn: () =>
		fetch("https://swapi.dev/api/people")
			.then((res) => res.json())
			.then((data) => data.results as { name: string }[]),
});

export const Route = createFileRoute("/demo/tanstack-query")({
	component: TanStackQueryDemo,
	loader: () => queryClient.ensureQueryData(options),
});

function TanStackQueryDemo() {
	const { data } = useSuspenseQuery(options);

	return (
		<div className="p-4">
			<h1 className="text-2xl mb-4">People list from Swapi</h1>
			<ul>
				{data.map((person) => (
					<li key={person.name}>{person.name}</li>
				))}
			</ul>
		</div>
	);
}
