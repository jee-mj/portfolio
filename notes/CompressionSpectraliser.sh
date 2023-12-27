#!/bin/bash
mkdir -p out
mkdir -p out/jpg
mkdir -p out/webp
mkdir -p out/webm
mkdir -p out/webm/mars
mkdir -p out/webm/earth
# JPEG Compression
for ((quality=0; quality<=100; quality++)); do
  for i in {1,2,3,4,5,6,9,12,15,20,24}; do
    # Calculate new dimensions 
    orig_dim=$(identify -format "%wx%h" bg.jpeg)
    orig_width=$(echo $orig_dim | cut -dx -f1)
    orig_height=$(echo $orig_dim | cut -dx -f2)

    new_width=$(echo "$orig_width * $i / 24" | bc)
    new_height=$(echo "$orig_height * $i / 24" | bc)

    # Resize and compress the image
    convert bg.jpeg -resize ${new_width}x${new_height} -quality $quality out/jpg/bg-${new_width}x${new_height}-${quality}.jpg
    # WebP Compression
    for ((compression_level=0; compression_level<=6; compression_level++)); do
      # Convert compressed JPEG to WebP
      ffmpeg -i out/jpg/bg-${new_width}x${new_height}-$quality.jpg -compression_level $compression_level out/webp/bg-${new_width}x${new_height}-${quality}_${compression_level}.webp
    done
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
