import { mkdirSync, writeFileSync } from "node:fs";

const entry = "deploy: merged my own PR, approved my own PR, broke prod by 5pm";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
