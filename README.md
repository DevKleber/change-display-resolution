# change-display-resolution
Mudando resolução do monitor para uma que não apareça nas opções


The changes are lost after reboot, to set up the resolution persistently, create the file ~/.xprofile with the content:
caso não consiga manter a resolução após reiniciar o sistema, favor acrescentar as linhas do comando no arquivo /.profile

Ex:  
#!/bin/sh
xrandr --newmode "1680x1050_60.00"  146.25  1680 1784 1960 2240  1050 1053 1059 1089 -hsync +vsync  
xrandr --addmode VGA-0 1680x1050_60.00
