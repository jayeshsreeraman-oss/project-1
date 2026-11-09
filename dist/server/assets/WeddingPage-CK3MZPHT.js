import { t as weddings } from "./weddings-PXcb9foK.js";
import { n as SiteHeader, r as WeddingImage, t as SiteFooter } from "./SiteLayout-CREVaZH5.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/components/WeddingPage.tsx
function WeddingPage({ index }) {
	const wedding = weddings[index];
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsxs("main", {
			id: "main",
			className: "detail-page",
			children: [/* @__PURE__ */ jsx("a", {
				className: "back-link",
				href: "/#gallery",
				children: "← BACK TO GALLERY"
			}), /* @__PURE__ */ jsxs("div", {
				className: "detail-grid",
				children: [/* @__PURE__ */ jsx("div", {
					className: "detail-image",
					children: /* @__PURE__ */ jsx(WeddingImage, {
						file: wedding.file,
						alt: wedding.alt,
						hero: true
					})
				}), /* @__PURE__ */ jsxs("section", {
					className: "detail-copy",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "X2 WEDDINGS AND EVENTS"
						}),
						/* @__PURE__ */ jsx("h1", { children: wedding.title }),
						/* @__PURE__ */ jsx("p", { children: wedding.description }),
						/* @__PURE__ */ jsx("ul", { children: wedding.details.map((detail) => /* @__PURE__ */ jsx("li", { children: detail }, detail)) }),
						/* @__PURE__ */ jsx("a", {
							className: "button",
							href: "/contact",
							children: "Plan Your Dream Wedding"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "inspiration-note",
							children: "Wedding inspiration, imagined for your celebration."
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
export { WeddingPage as t };
