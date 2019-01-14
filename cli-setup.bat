@echo off

NET SESSION >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
	echo This setup needs admin permissions. Please run this file as admin.
	pause
	exit
)

set NODE_VER=null
set NODE_EXEC=node-v8.12.0-x86.msi
set SETUP_DIR=%CD%
node -v >tmp.txt
set /p NODE_VER=<tmp.txt
del tmp.txt
IF %NODE_VER% == null (
	echo INSTALLING node ...
	mkdir tmp
	IF NOT EXIST tmp/%NODE_EXEC% (
		echo Node setup file does not exist. Downloading ...
		cd ../bin
		START /WAIT wget http://nodejs.org/dist/v8.12.0/%NODE_EXEC%
		move %NODE_EXEC% %SETUP_DIR%/tmp
	)
	cd %SETUP_DIR%/tmp
	START /WAIT %NODE_EXEC%
	cd %SETUP_DIR%
) ELSE (
	echo Node is already installed. Proceeding ...
)

cd ../..
echo INSTALLING Window Build Tools
call npm install -g windows-build-tools
echo INSTALLING Chunky Cli ...
call npm install -g chunky-cli

cd %SETUP_DIR%
echo Done! Now let's do some challenges on carmel.io