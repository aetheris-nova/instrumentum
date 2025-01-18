import chalk from 'chalk';
import { readdirSync, type Stats, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import * as process from 'node:process';

/**
 * Script that creates the index.ts file in the `src/` directory.
 */
function main(): void {
  const exports = [
    '// exports will be generated automatically generated using: npm run generate:index',
    `export * from './constants';`,
    `export * from './components';`,
    `export * from './providers';`,
    `export * from './types';`,
    `export { default as theme } from './theme';`,
  ];
  const srcDir = 'src';
  const utilsPath = join(srcDir, 'hooks');
  let indexFilePath: string;
  let stat: Stats;

  // get utils
  for (const item of readdirSync(utilsPath)) {
    stat = statSync(join(utilsPath, item));

    // if it is not a directory, move on
    if (!stat.isDirectory()) {
      continue;
    }

    exports.push(`export { default as ${item} } from './hooks/${item}';`);
  }

  indexFilePath = join(srcDir, 'index.ts');

  // write to index file
  writeFileSync(indexFilePath, `${exports.join('\n')}\n`, 'utf-8');

  console.log(`${chalk.yellow('[INFO]')}: generated indexes for components to "./src/index.ts"`);

  process.exit(0);
}

main();
