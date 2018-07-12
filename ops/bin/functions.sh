#!/bin/bash

source bin/globals.sh

_os() {
  case "$OSTYPE" in
    darwin*)  echo $__MAC ;; 
    msys*)    echo $__WINDOWS ;;
    linux*)   echo $__LINUX ;;
    *)        return "unknown" ;;
  esac
}

_install_location() {
  case "$OSTYPE" in
    darwin*)  echo $__MAC_INSTALL_LOCATION ;; 
    msys*)    echo $__WINDOWS_INSTALL_LOCATION ;;
    linux*)   echo $__LINUX_INSTALL_LOCATION ;;
    *)        return "unknown" ;;
  esac
}

_is_session() {
  if [ -d "$__SESSION_DIR" ]; then
    return 0
  fi

  return 1
}

_log() {
  echo [Carmel:$_OS] $1
}

_log_ok() {
  echo [Carmel:$_OS] ✓ $1
}
