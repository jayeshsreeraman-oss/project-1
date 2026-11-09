import { n as SiteHeader, t as SiteFooter } from "./SiteLayout-CREVaZH5.js";
import { useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
// src/components/ContactPage.tsx
function Arrow() {
	return /* @__PURE__ */ jsx("span", {
		"aria-hidden": "true",
		children: "↗"
	});
}
function ContactPage() {
	const [status, setStatus] = useState("idle");
	async function submit(event) {
		event.preventDefault();
		if (status === "pending") return;
		const data = new FormData(event.currentTarget);
		setStatus("pending");
		try {
			const body = new URLSearchParams();
			data.forEach((value, key) => body.append(key, String(value)));
			const response = await fetch("/__forms.html", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: body.toString(),
				signal: AbortSignal.timeout(15e3)
			});
			if (!response.ok || /\bdata-netlify\s*=/i.test(await response.text())) throw new Error("Submission failed");
			setStatus("success");
		} catch {
			setStatus("error");
		}
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SiteHeader, {}),
		/* @__PURE__ */ jsxs("main", {
			id: "main",
			children: [" ", /* @__PURE__ */ jsxs("section", {
				id: "contact",
				className: "contact section-wrap",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "contact-intro",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow rust",
							children: "EVERY GREAT CELEBRATION STARTS WITH A HELLO"
						}),
						/* @__PURE__ */ jsxs("h2", { children: [
							"Got a reason",
							/* @__PURE__ */ jsx("br", {}),
							"to ",
							/* @__PURE__ */ jsx("em", { children: "celebrate?" })
						] }),
						/* @__PURE__ */ jsxs("p", { children: [
							"We’d love to hear your story.",
							/* @__PURE__ */ jsx("br", {}),
							"Tell us a little about what you’re dreaming of,",
							/* @__PURE__ */ jsx("br", {}),
							"and let’s make something wonderful together."
						] }),
						/* @__PURE__ */ jsxs("a", {
							className: "text-link contact-email",
							href: "mailto:book@x2events.com",
							children: ["book@x2events.com ", /* @__PURE__ */ jsx(Arrow, {})]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "form-container",
					children: status === "success" ? /* @__PURE__ */ jsxs("div", {
						className: "success",
						role: "status",
						children: [
							/* @__PURE__ */ jsx("span", {
								"aria-hidden": "true",
								children: "✳"
							}),
							/* @__PURE__ */ jsx("h3", { children: "Here’s to your next chapter." }),
							/* @__PURE__ */ jsx("p", { children: "Thank you for sharing your plans. Your enquiry has been received, and the X2 team can follow up using your email." }),
							/* @__PURE__ */ jsxs("button", {
								className: "text-link",
								onClick: () => setStatus("idle"),
								children: ["Send another enquiry ", /* @__PURE__ */ jsx(Arrow, {})]
							})
						]
					}) : /* @__PURE__ */ jsxs("form", {
						name: "event-enquiry",
						method: "POST",
						action: "/__forms.html",
						"data-netlify": "true",
						"netlify-honeypot": "bot-field",
						onSubmit: submit,
						"aria-busy": status === "pending",
						children: [
							/* @__PURE__ */ jsx("input", {
								type: "hidden",
								name: "form-name",
								value: "event-enquiry"
							}),
							/* @__PURE__ */ jsx("p", {
								hidden: true,
								children: /* @__PURE__ */ jsxs("label", { children: ["Leave empty", /* @__PURE__ */ jsx("input", {
									name: "bot-field",
									tabIndex: -1,
									autoComplete: "off"
								})] })
							}),
							/* @__PURE__ */ jsxs("fieldset", {
								disabled: status === "pending",
								children: [
									/* @__PURE__ */ jsx("legend", {
										className: "sr-only",
										children: "Tell us about your celebration"
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "form-row",
										children: [/* @__PURE__ */ jsxs("label", { children: ["Your name", /* @__PURE__ */ jsx("input", {
											name: "name",
											placeholder: "The name behind the celebration",
											autoComplete: "name",
											required: true,
											maxLength: 100
										})] }), /* @__PURE__ */ jsxs("label", { children: ["Email address", /* @__PURE__ */ jsx("input", {
											type: "email",
											name: "email",
											placeholder: "Where we can reach you",
											autoComplete: "email",
											required: true,
											maxLength: 254
										})] })]
									}),
									/* @__PURE__ */ jsxs("div", {
										className: "form-row",
										children: [/* @__PURE__ */ jsxs("label", { children: ["What are we celebrating?", /* @__PURE__ */ jsxs("select", {
											name: "event-type",
											required: true,
											defaultValue: "",
											children: [
												/* @__PURE__ */ jsx("option", {
													value: "",
													disabled: true,
													children: "Select your occasion"
												}),
												/* @__PURE__ */ jsx("option", { children: "Wedding" }),
												/* @__PURE__ */ jsx("option", { children: "Social celebration" }),
												/* @__PURE__ */ jsx("option", { children: "Corporate event" }),
												/* @__PURE__ */ jsx("option", { children: "Something else" })
											]
										})] }), /* @__PURE__ */ jsxs("label", { children: ["Event date (if you know it)", /* @__PURE__ */ jsx("input", {
											type: "date",
											name: "event-date"
										})] })]
									}),
									/* @__PURE__ */ jsxs("label", { children: ["Tell us a little about your plans", /* @__PURE__ */ jsx("textarea", {
										name: "message",
										rows: 3,
										required: true,
										minLength: 10,
										maxLength: 3e3,
										placeholder: "The details, the traditions, the feeling you imagine…"
									})] }),
									/* @__PURE__ */ jsxs("button", {
										className: "button button-rust",
										type: "submit",
										children: [
											status === "pending" ? "Sending your story…" : "Let’s make it memorable",
											" ",
											/* @__PURE__ */ jsx(Arrow, {})
										]
									}),
									/* @__PURE__ */ jsx("p", {
										className: "privacy-note",
										children: "Your details are used only to respond to your event enquiry."
									})
								]
							}),
							status === "error" && /* @__PURE__ */ jsx("p", {
								className: "error",
								role: "alert",
								children: "Your enquiry couldn’t be confirmed. Your details are still here — please try again."
							})
						]
					})
				})]
			})]
		}),
		/* @__PURE__ */ jsx(SiteFooter, {})
	] });
}
// src/routes/contact.tsx?tsr-split=component
var SplitComponent = () => /* @__PURE__ */ jsx(ContactPage, {});
export { SplitComponent as component };
