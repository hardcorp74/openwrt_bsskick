# OpenWrt Bsskick

This is a service for checking Wi-Fi hosts that send message "bss_termination_delay" and reject change Wi-Fi AP.

Bsskick force disconnect Wi-Fi hosts from old Wi-Fi AP and it can bee used with Usteer and DAWN.
For new settings Apply need restart service bsskick in System - Startup or:
```
/etc/init.d/bsskick restart
```
