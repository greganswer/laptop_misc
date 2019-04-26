#!/usr/bin/env bash
# shellcheck disable=SC2034
# shellcheck disable=SC2059

[[ "${*}" =~ --debug ]] && set -o xtrace # Run in debug mode.

# Output formatting variables and functions.
#
# @see  https://misc.flogisoft.com/bash/tip_colors_and_formatting
NO_COLOR="\033[0m"
BOLD="\033[1m"
UNDERLINE="\033[4m"

DARK_GREY="\033[90m"
RED="\033[91m"
GREEN="\033[92m"
YELLOW="\033[93m"
BLUE="\033[94m"
PURPLE="\033[95m"

# Display a formatted message to the user
#
# Color coding and formatting script output can save time and headache.
# These functions below standardize user messages in a way that
# allows them to quickly parse the results of the script.
#
# @param   $1 Output message
#
# @example
#     $ header "Running database migrations"
#     $ success "Database migrations complete"
header()  { printf "\n${PURPLE}== ${1} ==${NO_COLOR}\n"; }
success() { printf "${GREEN}${1}${NO_COLOR}\n"; }
info()    { printf "${BLUE}INFO${NO_COLOR}: ${1}\n"; }
warn()    { printf "${YELLOW}WARN${NO_COLOR}: ${1}\n"; }
error()   { printf "${RED}ERROR${NO_COLOR}: ${1}\n" >&2; }

# Display a formatted message to the user and abort the script
#
# @param   $1 Output message
# @param   $2 Exit code
# @returns The exit code passed in ${2} or 1
#
# @example
#     $ fatal "Unable to process request" 127
fatal()   {
  printf "${RED}FATAL${NO_COLOR}: ${1}\n" >&2
  exit "${2:-1}"
}
