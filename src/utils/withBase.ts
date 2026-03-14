export function withBase(path: string) {
	if (!path.startsWith('/')) {
		return path;
	}
	const base = import.meta.env.BASE_URL.endsWith('/')
		? import.meta.env.BASE_URL
		: `${import.meta.env.BASE_URL}/`;
	return `${base}${path.replace(/^\/+/, '')}`;
}
