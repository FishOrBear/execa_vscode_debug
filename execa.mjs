import { execa } from 'execa';

await execa({ stdout: { file: "out.txt" } })`npm run tsc`;

console.log(1);
