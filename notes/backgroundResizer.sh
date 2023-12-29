#!/bin/bash
mkdir -p out out/jpg out/webp

# Function to process images
process_image() {
  quality=$1
  i=$2
  compression_level=$3

  # Calculate new dimensions
  orig_dim=$(identify -format "%wx%h" bg.jpeg)
  orig_width=$(echo $orig_dim | cut -dx -f1)
  orig_height=$(echo $orig_dim | cut -dx -f2)

  new_width=$(echo "$orig_width * $i / 24" | bc)
  new_height=$(echo "$orig_height * $i / 24" | bc)

  # Resize and compress the image using ImageMagick
  convert bg.jpeg -resize ${new_width}x${new_height} -quality $quality out/jpg/bg-${new_width}x${new_height}-${quality}.jpg

  # Convert to WebP using ffmpeg with GPU support
  ffmpeg -hwaccel cuda -i out/jpg/bg-${new_width}x${new_height}-$quality.jpg -compression_level $compression_level out/webp/bg-${new_width}x${new_height}-${quality}_${compression_level}.webp
}

export -f process_image

# Parallel execution
parallel process_image ::: {0..100} ::: {1,2,3,4,5,6,9,12,15,20,24} ::: {0..6}
