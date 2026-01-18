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
		client: {start:"_app/immutable/entry/start.CEjW356G.js",app:"_app/immutable/entry/app.DI0iBQq8.js",imports:["_app/immutable/entry/start.CEjW356G.js","_app/immutable/chunks/Cbeg3LxY.js","_app/immutable/chunks/DzctSk2S.js","_app/immutable/chunks/DOtwcUHp.js","_app/immutable/entry/app.DI0iBQq8.js","_app/immutable/chunks/DzctSk2S.js","_app/immutable/chunks/FsW_oMgN.js","_app/immutable/chunks/D0sDxuqe.js","_app/immutable/chunks/DOtwcUHp.js","_app/immutable/chunks/CIzgDWB-.js","_app/immutable/chunks/tRRvMEK0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-C9Fonq2I.js')),
			__memo(() => import('./chunks/1-BI8VB8KS.js')),
			__memo(() => import('./chunks/2-C-381Qqc.js')),
			__memo(() => import('./chunks/3-BrUbR57O.js'))
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
