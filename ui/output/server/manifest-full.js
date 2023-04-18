export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bookmark.png","copy.png","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-8912acff.js","imports":["_app/immutable/start-8912acff.js","_app/immutable/chunks/index-62719346.js","_app/immutable/chunks/singletons-d06fed44.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: () => import('./entries/endpoints/_server.js')
			},
			{
				id: "/delete",
				pattern: /^\/delete\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/delete/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
