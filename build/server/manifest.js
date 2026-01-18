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
		client: {start:"_app/immutable/entry/start.BOB5Blz3.js",app:"_app/immutable/entry/app.D52b2e4c.js",imports:["_app/immutable/entry/start.BOB5Blz3.js","_app/immutable/chunks/Du0H-1DZ.js","_app/immutable/chunks/DzctSk2S.js","_app/immutable/chunks/DOtwcUHp.js","_app/immutable/entry/app.D52b2e4c.js","_app/immutable/chunks/DzctSk2S.js","_app/immutable/chunks/FsW_oMgN.js","_app/immutable/chunks/D0sDxuqe.js","_app/immutable/chunks/DOtwcUHp.js","_app/immutable/chunks/CIzgDWB-.js","_app/immutable/chunks/tRRvMEK0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-C9Fonq2I.js')),
			__memo(() => import('./chunks/1-DNJoafqC.js')),
			__memo(() => import('./chunks/2-C-381Qqc.js')),
			__memo(() => import('./chunks/3-BvYSk7FX.js'))
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
