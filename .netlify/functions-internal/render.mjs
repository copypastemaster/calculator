import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.965cf2f7.js","app":"_app/immutable/entry/app.44b4ee31.js","imports":["_app/immutable/entry/start.965cf2f7.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.39f75224.js","_app/immutable/entry/app.44b4ee31.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.8d9fd66a.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/calc",
				pattern: /^\/api\/calc\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../server/entries/endpoints/api/calc/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
