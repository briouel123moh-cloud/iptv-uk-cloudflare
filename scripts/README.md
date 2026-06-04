# Bulk image metadata injection (EXIF + IPTC + XMP)

Use this in GitHub Codespaces or any Ubuntu/Linux shell from the repository root.

## Step 1: Install ExifTool

```bash
sudo apt install -y libimage-exiftool-perl
```

## Step 2: Run the script

```bash
python3 scripts/bulk_metadata.py
```

The script will:
- Recursively scan `public/images/`
- Process only `.webp`, `.png`, `.jpg`, `.jpeg`
- Skip `.svg` automatically
- Inject EXIF + IPTC + XMP metadata with 20–30 SEO keywords per image
- Use `-overwrite_original`
- Print progress for each image (name, keyword count, success/failure)

## Step 3: Commit and push

```bash
git add -A && git commit -m "SEO: EXIF+IPTC+XMP metadata" && git push
```

## Optional: dry-run (no metadata written)

```bash
python3 scripts/bulk_metadata.py --dry-run
```
