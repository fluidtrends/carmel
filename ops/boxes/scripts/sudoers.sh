#!/bin/sh -eux

sed -i -e '/Defaults\s\+env_reset/a Defaults\texempt_group=sudo' /etc/sudoers;

# Set up password-less sudo for the carmel user
echo 'carmel ALL=(ALL) NOPASSWD:ALL' >/etc/sudoers.d/99_carmel;
