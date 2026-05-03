import fs from "node:fs";
const out = process.env.GITHUB_OUTPUT;
if (!out) {
	console.error("GITHUB_OUTPUT is not set");
	process.exit(1)
}
const path = "status.json";
if (!fs.existsSync(path)) {
	fs.appendFileSync(out, "should_release=false\n");
	console.log("status.json missing; skipping build and release.");
	process.exit(0)
}
let needsUpdate = false;
try {
	const j = JSON.parse(fs.readFileSync(path, "utf8"));
	needsUpdate = j.needsUpdate === true
} catch (e) {
	console.error("Invalid status.json:", e.message);
	fs.appendFileSync(out, "should_release=false\n");
	process.exit(0)
}
fs.appendFileSync(out, `should_release=${needsUpdate}\n`);
console.log(needsUpdate ? "needsUpdate is true — running build, pack, and release." : "needsUpdate is false — skipping build, pack, and release.");
