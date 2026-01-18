const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Bl4EolZA.js",app:"_app/immutable/entry/app.B9KmOazS.js",imports:["_app/immutable/entry/start.Bl4EolZA.js","_app/immutable/chunks/Bhtw52VT.js","_app/immutable/chunks/FDJVdg6N.js","_app/immutable/chunks/D0R8c60d.js","_app/immutable/chunks/SFo0NkBZ.js","_app/immutable/entry/app.B9KmOazS.js","_app/immutable/chunks/FDJVdg6N.js","_app/immutable/chunks/CVHiStKa.js","_app/immutable/chunks/DCFGUy-H.js","_app/immutable/chunks/SFo0NkBZ.js","_app/immutable/chunks/D_xLUXZv.js","_app/immutable/chunks/D0R8c60d.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-C7dna2Tv.js')),
			__memo(() => import('./chunks/1-D1JfTEBH.js')),
			__memo(() => import('./chunks/2-2vsQZKqs.js')),
			__memo(() => import('./chunks/3-CthqK-xd.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/dashboard",
				pattern: /^\/dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
