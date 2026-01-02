import fs from "fs-extra";

const FILE = "./src/storage/issues.json";

export async function readCache() {
  if (!(await fs.pathExists(FILE))) return {};
  return fs.readJson(FILE);
}

export async function writeCache(data) {
  await fs.outputJson(FILE, data, { spaces: 2 });
}
