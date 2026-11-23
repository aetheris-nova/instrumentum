import createReleaseConfig from '../../scripts/create-release-config.mjs';
import packageJSON from './package.json' with { type: 'json' };

export default createReleaseConfig(packageJSON.name);
