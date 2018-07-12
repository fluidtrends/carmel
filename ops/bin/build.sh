#!/bin/bash

# Import all the available commands
source bin/commands.sh

[ -d "$_FILES_DIR" ] || _fail "The files directory is missing"

_is_session && _fail "A previous session is still in progress"
_cmd_init_session

_cmd_build_manifest
_cmd_build_package
_cmd_build_distribution
_cmd_build_installer

_cmd_clear_session

