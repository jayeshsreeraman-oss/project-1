import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/components/SiteLayout.tsx
function SiteHeader() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("a", {
		className: "skip-link",
		href: "#main",
		children: "Skip to content"
	}), /* @__PURE__ */ jsxs("header", {
		className: "header",
		children: [
			/* @__PURE__ */ jsxs("a", {
				className: "brand",
				href: "/",
				"aria-label": "X2 Weddings and Events home",
				children: [/* @__PURE__ */ jsx("img", {
					className: "brand-logo",
					src: "/img/x2-logo.jpeg",
					width: "264",
					height: "434",
					alt: "X2"
				}), /* @__PURE__ */ jsxs("span", {
					className: "brand-copy",
					children: [/* @__PURE__ */ jsx("span", { children: "X2 WEDDINGS & EVENTS" }), /* @__PURE__ */ jsx("small", { children: "EXPERT IN EXPRESSIONS" })]
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				className: "menu-toggle",
				type: "button",
				"aria-controls": "navigation",
				"aria-expanded": open,
				onClick: () => setOpen(!open),
				children: open ? "CLOSE −" : "MENU +"
			}),
			/* @__PURE__ */ jsx("nav", {
				id: "navigation",
				className: open ? "nav open" : "nav",
				"aria-label": "Main navigation",
				children: [
					["HOME", "/"],
					["ABOUT", "/about"],
					["VENUES", "/venues"],
					["GALLERY", "/#gallery"],
					["CONTACT", "/contact"]
				].map(([label, href]) => /* @__PURE__ */ jsx("a", {
					href,
					onClick: () => setOpen(false),
					children: label
				}, label))
			})
		]
	})] });
}
function SiteFooter() {
	return /* @__PURE__ */ jsx("footer", {
		className: "footer",
		children: /* @__PURE__ */ jsx("a", {
			href: "mailto:book@x2events.com",
			children: "book@x2events.com"
		})
	});
}
var image = (file, width = 1600) => `/.netlify/images?url=/img/${file}&w=${width}&fm=webp&q=85`;
function WeddingImage({ file, alt, hero = false }) {
	return /* @__PURE__ */ jsx("img", {
		src: image(file, hero ? 1920 : 900),
		srcSet: [
			480,
			900,
			1440,
			1920
		].map((w) => `${image(file, w)} ${w}w`).join(", "),
		sizes: hero ? "100vw" : "(max-width: 700px) 90vw, 30vw",
		alt,
		loading: hero ? "eager" : "lazy",
		fetchPriority: hero ? "high" : "auto",
		width: hero ? 1920 : 1200,
		height: hero ? 1080 : 900
	});
}
export { SiteHeader as n, WeddingImage as r, SiteFooter as t };
