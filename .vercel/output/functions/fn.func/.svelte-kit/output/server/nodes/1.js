

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d440c2f5.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.8d9fd66a.js","_app/immutable/chunks/singletons.339437ca.js"];
export const stylesheets = [];
export const fonts = [];
