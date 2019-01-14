#!/bin/bash


keosd_pid=$(pgrep -x "keosd")
if [ -z "$keosd_pid" ]
then
  echo "keosd is stopped"
else
  echo "keosd is running with pid $keosd_pid"
fi

nodeos_pid=$(pgrep -x "nodeos")
if [ -z "$nodeos_pid" ]
then
  echo "nodeos is stopped"
else
  echo "nodeos is running with pid $nodeos_pid"
fi
