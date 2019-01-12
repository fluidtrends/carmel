#!/bin/bash

keosd_pid=$(pgrep -x "keosd")
if [ -z "$keosd_pid" ]
then
  echo "[ok] keosd is already stopped"
else
  echo "stopping keosd ..."
  sudo kill -9 $keosd_pid
fi

nodeos_pid=$(pgrep -x "nodeos")
if [ -z "$nodeos_pid" ]
then
  echo "[ok] nodeos is already stopped"
else
  echo "stopping nodeos ..."
  sudo kill -9 $nodeos_pid
fi
