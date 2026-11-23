/**
 * Creates the release config.
 *
 * @typedef {import('semantic-release').GlobalConfig} GlobalConfig
 * @param {string} packageName - The name of the package.
 * @returns {GlobalConfig} The release config.
 */
export default function createReleaseConfig(packageName) {
  return {
    branches: [
      'main',
      {
        name: 'beta',
        prerelease: true,
      },
    ],
    extends: 'semantic-release-monorepo',
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/changelog',
      '@anolilab/semantic-release-pnpm',
      [
        '@semantic-release/git',
        {
          assets: ['package.json', 'CHANGELOG.md'],
          message: `chore(release): ${packageName}-v$\{nextRelease.version}

$\{nextRelease.notes}`
        }
      ],
      [
        '@semantic-release/github',
        {
          releasedLabels: ['🚀 released']
        },
      ],
    ],
  };
}
