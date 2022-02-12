#!/usr/bin/env node
const fs = require("fs");

function incPatch(ver) {
	let [major, minor, patch] = ver.split(".");
	patch++;
	return [major, minor, patch].join(".");
}

const csprojFiles = [
	"CSharpApiSpec/CSharpApiSpec/CSharpApiSpec.csproj",
	"CSharpApiClient/CSharpApiClient/CSharpApiClient.csproj"
];
for(let file of csprojFiles)
	fs.writeFileSync(file, fs.readFileSync(file, "utf8").split("\n").map(line => {
		return line.replace(/<Version>(.+)<\/Version>/, ($0, $1) => {
			return `<Version>${incPatch($1)}</Version>`;
		});
	}).join("\n"));

const packageJsonFile = "js-api-spec/package.json";

let package = JSON.parse(fs.readFileSync(packageJsonFile, "utf8"));
package.version = incPatch(package.version);
fs.writeFileSync(packageJsonFile, JSON.stringify(package, null, "  "));
