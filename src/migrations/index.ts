import * as migration_20250303_151100 from './20250303_151100';

export const migrations = [
  {
    up: migration_20250303_151100.up,
    down: migration_20250303_151100.down,
    name: '20250303_151100'
  },
];
