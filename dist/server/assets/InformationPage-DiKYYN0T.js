import { n as SiteHeader, r as WeddingImage, t as SiteFooter } from "./SiteLayout-CREVaZH5.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/components/InformationPage.tsx
function InformationPage({ venues = false }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsxs("main", {
			id: "main",
			className: "information-page",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "X2 WEDDINGS AND EVENTS"
				}),
				/* @__PURE__ */ jsx("h1", { children: venues ? "A setting for your story." : "EXPERT IN EXPRESSIONS" }),
				/* @__PURE__ */ jsx("p", {
					className: "intro",
					children: venues ? "From an intimate garden to a grand palace or a sunset by the sea, your wedding begins with a setting that feels like you." : "Over ten years of experience. A thoughtful eye for detail. A heartfelt approach to your wedding."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "information-grid",
					children: [/* @__PURE__ */ jsx(WeddingImage, {
						file: venues ? "beach-wedding.png" : "christian-wedding.png",
						alt: venues ? "Sunset wedding setting with a floral mandap beside the sea" : "A couple beneath a white floral wedding arch",
						hero: true
					}), /* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h2", { children: venues ? "Thoughtfully chosen. Beautifully styled." : "Your traditions. Your vision. Our care." }),
						/* @__PURE__ */ jsx("p", { children: venues ? "We help you explore venue styles, consider guest arrangements, and coordinate the details that bring your celebration together. Tell us what you imagine, and we can discuss the right setting for your plans." : "At X2 Weddings and Events, we bring your ideas to life with considered planning, floral design, and ceremony coordination. Every celebration starts with listening to what matters to you." }),
						/* @__PURE__ */ jsx("a", {
							className: "button",
							href: "/contact",
							children: "Plan Your Dream Wedding"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "inspiration-note",
							children: "Images are wedding inspiration."
						})
					] })]
				})
			]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
export { InformationPage as t };
