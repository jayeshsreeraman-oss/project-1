import { HeadContent, Link, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
// src/data/site.ts
var site = {
	name: "X2 Weddings and Events",
	description: "EXPERT IN EXPRESSIONS. Luxury destination weddings, thoughtful planning, and beautiful celebrations with over ten years of experience."
};
// src/components/NotFoundPage.tsx
function NotFoundPage() {
	return /* @__PURE__ */ jsxs("main", {
		className: "max-w-2xl mx-auto p-8",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-bold mb-4",
				children: "Page not found"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mb-6",
				children: "Let’s get you back to the celebration."
			}),
			/* @__PURE__ */ jsx(Link, {
				to: "/",
				className: "underline",
				children: "Back to X2"
			})
		]
	});
}
// src/routes/__root.tsx
var siteName = site.name;
var siteDescription = site.description;
var Route$7 = createRootRoute({
	notFoundComponent: NotFoundPage,
	head: () => ({
		links: [{
			rel: "icon",
			type: "image/svg+xml",
			href: "/favicon.svg"
		}],
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: siteName },
			{
				name: "description",
				content: siteDescription
			},
			{
				property: "og:title",
				content: siteName
			},
			{
				property: "og:description",
				content: siteDescription
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
// src/routes/index.tsx
var $$splitComponentImporter$6 = () => import("./routes-DEfE8ke7.js");
var Route$6 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
// src/routes/about.tsx
var $$splitComponentImporter$5 = () => import("./about-BopKbawi.js");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About | X2 Weddings and Events" }] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
// src/routes/christian-wedding.tsx
var $$splitComponentImporter$4 = () => import("./christian-wedding-Dz5-jYWI.js");
var Route$4 = createFileRoute("/christian-wedding")({
	head: () => ({ meta: [{ title: "Christian Wedding | X2 Weddings and Events" }, {
		name: "description",
		content: "Christian Wedding inspiration and thoughtful planning from X2 Weddings and Events. EXPERT IN EXPRESSIONS."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
// src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-DSTCH25L.js");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact | X2 Weddings and Events" }] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
// src/routes/hindu-wedding.tsx
var $$splitComponentImporter$2 = () => import("./hindu-wedding-B8YHizep.js");
var Route$2 = createFileRoute("/hindu-wedding")({
	head: () => ({ meta: [{ title: "Hindu Wedding | X2 Weddings and Events" }, {
		name: "description",
		content: "Hindu Wedding inspiration and thoughtful planning from X2 Weddings and Events. EXPERT IN EXPRESSIONS."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
// src/routes/muslim-wedding.tsx
var $$splitComponentImporter$1 = () => import("./muslim-wedding-DjYz1wUv.js");
var Route$1 = createFileRoute("/muslim-wedding")({
	head: () => ({ meta: [{ title: "Muslim Wedding | X2 Weddings and Events" }, {
		name: "description",
		content: "Muslim Wedding inspiration and thoughtful planning from X2 Weddings and Events. EXPERT IN EXPRESSIONS."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
// src/routes/venues.tsx
var $$splitComponentImporter = () => import("./venues-Dz6j4UIR.js");
var Route = createFileRoute("/venues")({
	head: () => ({ meta: [{ title: "Venues | X2 Weddings and Events" }] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
// src/routeTree.gen.ts
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ChristianWeddingRoute: Route$4.update({
		id: "/christian-wedding",
		path: "/christian-wedding",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	HinduWeddingRoute: Route$2.update({
		id: "/hindu-wedding",
		path: "/hindu-wedding",
		getParentRoute: () => Route$7
	}),
	MuslimWeddingRoute: Route$1.update({
		id: "/muslim-wedding",
		path: "/muslim-wedding",
		getParentRoute: () => Route$7
	}),
	VenuesRoute: Route.update({
		id: "/venues",
		path: "/venues",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
// src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
export { getRouter };
