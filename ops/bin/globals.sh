#!/bin/bash

__NAME=Carmel
__VERSION=0.4
__ID=io.carmel
__BUILD=1

__MAC=mac
__WINDOWS=windows
__LINUX=linux
__MAC_INSTALL_LOCATION=/Applications
__WINDOWS_INSTALL_LOCATION=/C
__LINUX_INSTALL_LOCATION=/Applications
__INSTALLER_FILE=${__NAME}.dmg
__SESSION_DIR=_session
__SESSION_DIST_DIR=_session/dist
__SESSION_PKG_MANIFEST=_session/${__NAME}_raw.plist
__SESSION_PKG_FILE=_session/${__NAME}_raw.pkg
__SESSION_PKG_VERSION=$__BUILD
__SESSION_PKG_ID=$__ID
__SESSION_PKG_DIST=_session/${__NAME}_raw.xml
__SESSION_PKG_DIST_FINAL=_session/${__NAME}.xml
