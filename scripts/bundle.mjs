import * as esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { minify } from "terser";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const entry = path.join(root, "source-code/main.js");

const esResult = await esbuild.build({
	entryPoints: [entry],
	bundle: true,
	format: "esm",
	platform: "neutral",
	write: false
});
const bundled = esResult.outputFiles[0].text;

const tResult = await minify(bundled, {
	module: true,
	compress: true,
	mangle: true
});
if (!tResult.code) {
	throw new Error("terser produced no output")
}

const out = path.join(root, "main.js");
fs.writeFileSync(out, tResult.code);
for (const rel of ["docs/main.js", "electron/main.js"]) {
	fs.copyFileSync(out, path.join(root, rel))
}
