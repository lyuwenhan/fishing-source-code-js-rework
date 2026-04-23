export default function deepFreeze(value, seen = new WeakSet) {
	if (value === null || typeof value !== "object" && typeof value !== "function") {
		return value
	}
	if (!Object.isExtensible(value) || seen.has(value)) {
		return value
	}
	seen.add(value);
	for (const key of Reflect.ownKeys(value)) {
		const descriptor = Object.getOwnPropertyDescriptor(value, key);
		if (!descriptor) {
			continue
		}
		if ("value" in descriptor) {
			deepFreeze(descriptor.value, seen)
		}
	}
	return Object.freeze(value)
}
