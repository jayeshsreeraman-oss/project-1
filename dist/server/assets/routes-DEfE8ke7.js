import { t as weddings } from "./weddings-PXcb9foK.js";
import { n as SiteHeader, r as WeddingImage, t as SiteFooter } from "./SiteLayout-CREVaZH5.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/components/MarketingPage.tsx
function MarketingPage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsxs("main", {
			id: "main",
			children: [/* @__PURE__ */ jsxs("section", {
				className: "hero",
				"aria-labelledby": "hero-title",
				children: [
					/* @__PURE__ */ jsx(WeddingImage, {
						file: "beach-wedding.png",
						alt: "A bride in a white veil and groom in a black suit beneath a pink flower mandap with hanging lights, with a palace and sea behind them at sunset",
						hero: true
					}),
					/* @__PURE__ */ jsx("div", { className: "hero-shade" }),
					/* @__PURE__ */ jsxs("div", {
						className: "hero-content",
						children: [
							/* @__PURE__ */ jsxs("h1", {
								id: "hero-title",
								children: [
									"DESTINATION WEDDINGS",
									/* @__PURE__ */ jsx("br", {}),
									"WHERE YOU DREAMED."
								]
							}),
							/* @__PURE__ */ jsx("p", { children: "Your Dream Destination. Our Promise To Deliver." }),
							/* @__PURE__ */ jsx("a", {
								className: "button",
								href: "/contact",
								children: "Plan Your Dream Wedding"
							})
						]
					})
				]
			}), /* @__PURE__ */ jsxs("section", {
				className: "gallery-section",
				id: "gallery",
				"aria-labelledby": "gallery-title",
				children: [
					/* @__PURE__ */ jsx("h2", {
						id: "gallery-title",
						children: "GALLERY"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "gallery-grid",
						children: weddings.map((wedding) => /* @__PURE__ */ jsxs("a", {
							className: "gallery-card",
							href: `/${wedding.slug}`,
							children: [/* @__PURE__ */ jsx("div", {
								className: "gallery-image",
								children: /* @__PURE__ */ jsx(WeddingImage, {
									file: wedding.file,
									alt: wedding.alt
								})
							}), /* @__PURE__ */ jsx("h3", { children: wedding.title })]
						}, wedding.slug))
					}),
					/* @__PURE__ */ jsx("p", {
						className: "inspiration-note",
						children: "Wedding inspiration, imagined for your celebration."
					})
				]
			})]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
// src/routes/index.tsx?tsr-split=component
var SplitComponent = MarketingPage;
export { SplitComponent as component };
