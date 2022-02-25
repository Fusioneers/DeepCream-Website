
import { respond } from './kit.js';
import root from './generated/root.svelte';
import { set_paths, assets, base } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body, assets }) => "<!DOCTYPE html>\n<html lang=\"en\">\n    <head>\n        <title>DeepCream</title>\n        <meta charset=\"utf-8\"/>\n        <meta name=\"description\" content=\"This is the official website of the Astro Pi project DeepCream. We are a group students who are currently participating in the Astro Pi Event with our Detection Estimation and Evaluation Program for Cloud Recognition and Electronic Analytic Monitoring - in short, DeepCream.\"/>\n        <link rel=\"icon\" href=\"/favicon.png\"/>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"/>\n        " + head + "\n    </head>\n    <body>\n        <div id=\"svelte\">" + body + "</div>\n    </body>\n    <style>\n        body {\n            margin: 0;\n        }\n\n        /* Scrollbar style */\n        ::-webkit-scrollbar {\n            background-color: transparent;\n            width: 0;\n        }\n\n        ::-webkit-scrollbar-track {\n            background-color: transparent;\n        }\n\n        ::-webkit-scrollbar-thumb {\n            background-color: rgba(186, 186, 192, 0.75);\n            border-radius: 16px;\n            border: 4px solid white;\n        }\n\n        ::-webkit-scrollbar-thumb:hover {\n            background-color: rgba(186, 186, 192, 0.9);\n        }\n\n        ::-webkit-scrollbar-button {\n            display: none\n        }\n    </style>\n</html>";

let read = null;

set_paths({"base":"","assets":""});

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class App {
	constructor(manifest) {
		const hooks = get_hooks(user_hooks);

		this.options = {
			amp: false,
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, request) => {
				hooks.handleError({ error, request });
				error.stack = this.options.get_stack(error);
			},
			hooks,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":[]},
			paths: { base, assets },
			prefix: assets + '/_app/',
			prerender: true,
			read,
			root,
			service_worker: null,
			router: true,
			target: "#svelte",
			template,
			trailing_slash: "never"
		};
	}

	render(request, {
		prerender
	} = {}) {
		// TODO remove this for 1.0
		if (Object.keys(request).sort().join() !== 'headers,method,rawBody,url') {
			throw new Error('Adapters should call app.render({ url, method, headers, rawBody })');
		}

		const host = request.headers["host"];
		const protocol = default_protocol;

		return respond({ ...request, url: new URL(request.url, protocol + '://' + host) }, this.options, { prerender });
	}
}
