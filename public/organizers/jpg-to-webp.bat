@echo off
for %%f in (*.png) do cwebp -q 70 %%~nf.png -o %%~nf.webp
del *.png
for %%f in (*.jpg) do cwebp -q 70 %%~nf.jpg -o %%~nf.webp
del *.jpg
for %%f in (*.jpeg) do cwebp -q 70 %%~nf.jpeg -o %%~nf.webp
del *.jpeg