import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/farzana")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/farzana"!</div>;
}
