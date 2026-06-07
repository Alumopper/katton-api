import { spawn } from "node:child_process";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

const require = createRequire(import.meta.url);
const vitepressPackageDir = dirname(require.resolve("vitepress/package.json"));
const vitepressBin = join(vitepressPackageDir, "bin", "vitepress.js");

const child = spawn(
  process.execPath,
  [vitepressBin, "dev", ...process.argv.slice(2)],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      NODE_ENV: "development",
    },
  },
);

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});
