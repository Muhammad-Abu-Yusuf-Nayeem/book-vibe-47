@echo off
REM ==========================
REM Directory Tree Generator
REM ==========================

:: Set output file name
set OUTPUT=directory_tree.txt

echo Generating directory tree...
echo.

:: Use the built-in TREE command
:: /F = includes files
:: /A = uses ASCII (so it's viewable in any text editor)
tree /F /A > "%OUTPUT%"

echo.
echo Directory tree saved to %OUTPUT%
pause