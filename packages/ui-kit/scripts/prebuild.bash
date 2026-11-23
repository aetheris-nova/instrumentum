#!/usr/bin/env bash

#######################################
# Public: Performs pre-build actions such as building dependencies.
# Returns:
#   0 if non-error.
# Examples:
#   ./scripts/prebuild.bash
#######################################
function main {
  # build workspace dependencies
  pnpm -F @aetherisnova/utilities run build

  exit 0
}

# and so, it begins...
main "$@"
