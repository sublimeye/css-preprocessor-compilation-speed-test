css-preprocessor-compilation-speed-test
=======================================

There are several Grunt tasks that `clean` and then `compile` sources 10x times in a row.
They are: `grunt test-less`, `grunt test-compass`, `grunt test-stylus`

Absolute compilation time of each preprocessor:
LESS: ~500ms
Stylus: ~650ms
Compass: ~2s (however compass says it is ~1600ms)

If you find a way to increase grunt performance please share.

Comilation LOG
====

LESS (grunt-contrib-less)
----

```sh
$ grunt test-less

#...

Execution Time (2013-12-24 00:29:42 UTC)
loading tasks     542ms  ■■■■■■■■■■ 9%
less:development  658ms  ■■■■■■■■■■■■ 11%
less:development  546ms  ■■■■■■■■■■ 9%
less:development  562ms  ■■■■■■■■■■■ 10%
less:development  452ms  ■■■■■■■■■ 8%
less:development  577ms  ■■■■■■■■■■■ 10%
less:development  453ms  ■■■■■■■■■ 8%
less:development  499ms  ■■■■■■■■■■ 9%
less:development  483ms  ■■■■■■■■■ 8%
less:development  484ms  ■■■■■■■■■ 8%
less:development  500ms  ■■■■■■■■■■ 9%
Total 6s

Stylus (grunt-contrib-stylus)
----

```sh
$ grunt test-stylus
Running "test-stylus" task

Execution Time (2013-12-24 00:29:27 UTC)
loading tasks     542ms  ■■■■■■■■ 7%
stylus:bootstrap     1s  ■■■■■■■■■■■■■■■ 14%
stylus:bootstrap  725ms  ■■■■■■■■■■■ 10%
stylus:bootstrap  664ms  ■■■■■■■■■■ 9%
stylus:bootstrap  675ms  ■■■■■■■■■■ 9%
stylus:bootstrap  633ms  ■■■■■■■■■ 8%
stylus:bootstrap  670ms  ■■■■■■■■■■ 9%
stylus:bootstrap  641ms  ■■■■■■■■■ 9%
stylus:bootstrap  655ms  ■■■■■■■■■■ 9%
stylus:bootstrap  653ms  ■■■■■■■■■■ 9%
stylus:bootstrap  597ms  ■■■■■■■■■ 8%
Total 7s

Compass (grunt-contrib-compass)
----

```sh
$ grunt test-compass
Running "test-compass" task

Running "compass:dist" (compass) task
   create sass/compiled/bootstrap.css (1.618s)
Compilation took 1.621s

 ...
 ...
 ...

Done, without errors.

Execution Time (2013-12-24 00:28:33 UTC)
loading tasks  536ms  ■■■ 2%
compass:dist      2s  ■■■■■■■■■■■ 10%
compass:dist      2s  ■■■■■■■■■■■ 10%
compass:dist      2s  ■■■■■■■■■■■ 10%
compass:dist      2s  ■■■■■■■■■■■ 10%
compass:dist      2s  ■■■■■■■■■■■ 10%
compass:dist      2s  ■■■■■■■■■■■■ 10%
compass:dist      2s  ■■■■■■■■■■■ 10%
compass:dist      2s  ■■■■■■■■■■■ 10%
compass:dist      2s  ■■■■■■■■■■■ 10%
compass:dist      2s  ■■■■■■■■■■■ 10%
Total 23s
```