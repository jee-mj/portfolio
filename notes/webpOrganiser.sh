#!/bin/bash

# Directory containing the files
SOURCE_DIR="./out/webp"

# Change to the source directory
cd "$SOURCE_DIR"

# Loop through all .webp files
for file in *.webp; do
  # Extract resolution and compression from the filename
  resolution=$(echo "$file" | cut -d'-' -f2)
  compression=$(echo "$file" | cut -d'-' -f3 | cut -d'_' -f1)
  new_filename=$(echo "$file" | sed "s/-${resolution}-${compression}_/_/")

  # Create directory structure if it doesn't exist
  mkdir -p "./${resolution}/${compression}"

  # Move and rename the file
  mv "$file" "./${resolution}/${compression}/${new_filename}"
done
