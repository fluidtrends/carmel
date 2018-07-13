#!/bin/bash

# Import the global static variables
source bin/globals.sh

# Import the helper functions
source bin/functions.sh

# Define dynamic globals
_OS=`_os`
_INSTALL_LOCATION=`_install_location`
_FILES_DIR="files/$_OS"
_APPS_DIR="files/$_OS/apps"
_VERSION=${__VERSION}.${__BUILD}
_ASSETS_DIR="files/$_OS/assets"
_SCRIPTS_DIR="files/$_OS/scripts"
_PACKAGES_DIR="files/$_OS/packages"
_PACKAGE_FILE=${__SESSION_DIST_DIR}/${__NAME}.pkg

_cmd_init_session() {
  mkdir $__SESSION_DIR
  mkdir $__SESSION_DIST_DIR
}

_cmd_clear_session() {
  rm -rf $__SESSION_DIR
}

_cmd_fail() {
  _cmd_clear_session
  echo Error: $1
  exit -1
}

_cmd_build_manifest() {
  _log "Creating the package manifest ..."
  pkgbuild --analyze --root $_APPS_DIR $__SESSION_PKG_MANIFEST &>/dev/null
  [ -f $__SESSION_PKG_MANIFEST ] || _cmd_fail "The package manifest could not be created"
  _log_ok "The package manifest was created successfully."
}

_cmd_build_package() {
  _log "Building the package ..."
  pkgbuild --nopayload --identifier $__SESSION_PKG_ID --scripts $_SCRIPTS_DIR  --install-location $_INSTALL_LOCATION --version $__SESSION_PKG_VERSION --component-plist $__SESSION_PKG_MANIFEST --root $_APPS_DIR  $__SESSION_PKG_FILE &>/dev/null
  [ -f $__SESSION_PKG_FILE ] || _cmd_fail "The package could not be built"
  _log_ok "The package was built successfully."
}

_cmd_build_distribution() {
  _log "Preparing the package distribution ..."
  packages="--package $__SESSION_PKG_FILE"
  productbuild --synthesize $packages $__SESSION_PKG_DIST &>/dev/null
  [ -f $__SESSION_PKG_DIST ] || _cmd_fail "The package distribution was not created"

  sed -e '$ d' $__SESSION_PKG_DIST > $__SESSION_PKG_DIST_FINAL
  echo "<title> Carmel </title>" >> $__SESSION_PKG_DIST_FINAL
  echo "<background file=\"background.png\" mime-type=\"image/png\"/>" >> $__SESSION_PKG_DIST_FINAL
  echo "</installer-gui-script>" >> $__SESSION_PKG_DIST_FINAL

  _log_ok "The package distribution was created successfully."
}

_cmd_build_installer() {
  _log "Creating the installer package ..."
  productbuild --distribution $__SESSION_PKG_DIST_FINAL --package-path $__SESSION_DIR --resources $_ASSETS_DIR $_PACKAGE_FILE &>/dev/null
  cp $_ASSETS_DIR/.VolumeIcon.icns $__SESSION_DIST_DIR
  hdiutil create -fs HFS+ -srcfolder $__SESSION_DIST_DIR -volname $__NAME $__INSTALLER_FILE
}
