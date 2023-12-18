#!/bin/bash
mkdir -p out
mkdir -p out/jpg
mkdir -p out/webp
mkdir -p out/webm
mkdir -p out/webm/mars
mkdir -p out/webm/earth
# JPEG Compression
for ((quality=0; quality<=31; quality++)); do
  # Compress JPEG at different quality levels
  ffmpeg -i bg.jpg -q:v $quality out/jpg/bg_compressed_$quality.jpg

  # WebP Compression
  for ((compression_level=0; compression_level<=6; compression_level++)); do
    # Convert compressed JPEG to WebP
    ffmpeg -i out/jpg/bg_compressed_$quality.jpg -compression_level $compression_level -q:v $quality out/webp/bg_${quality}_${compression_level}.webp
  done
done

# VP9 Compression
bitrates=(0 64k 128k 256k 512k)

for ((quality=0; quality<=63; quality++)); do
  for bitrate in "${bitrates[@]}"; do
  
    ffmpeg -y -i earth_best.mp4 -vf "scale=256:256" -c:v libvpx-vp9 -b:v $bitrate -pass 1 -cpu-used 0 -f webm /dev/null
    ffmpeg -i earth_best.mp4 -vf "scale=256:256" -c:v libvpx-vp9 -b:v $bitrate -pass 2 -cpu-used 0 out/webm/earth/earth_${quality}_${bitrate}.webm
    ffmpeg -y -i mars_best.mp4 -vf "scale=256:256" -c:v libvpx-vp9 -b:v $bitrate -pass 1 -cpu-used 0 -f webm /dev/null
    ffmpeg -i mars_best.mp4 -vf "scale=256:256" -c:v libvpx-vp9 -b:v $bitrate -pass 2 -cpu-used 0 out/webm/mars/mars_${quality}_${bitrate}.webm
  done
done
