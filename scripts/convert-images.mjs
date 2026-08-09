// One-time WebP conversion for performance optimization.
// Run with: node scripts/convert-images.mjs
import sharp from "sharp";
import { resolve } from "path";
import { readdir, stat } from "fs/promises";

const base = resolve("public/assets");

const conversions = [
  { src: `${base}/laura/Laura.png`,            out: `${base}/laura/Laura.webp`,   quality: 82 },
  { src: `${base}/laura/Laura_2.jpg`,          out: `${base}/laura/Laura_2.webp`, quality: 80 },
  { src: `${base}/laura/Laura_3.jpg`,          out: `${base}/laura/Laura_3.webp`, quality: 80 },
];

// Testimonial logos batch
const testimonialsDir = `${base}/testimonials`;
const logoFiles = (await readdir(testimonialsDir)).filter(f => f.endsWith(".png"));
for (const file of logoFiles) {
  conversions.push({
    src: `${testimonialsDir}/${file}`,
    out: `${testimonialsDir}/${file.replace(".png", ".webp")}`,
    quality: 85,
  });
}

for (const { src, out, quality } of conversions) {
  const inKB  = Math.round((await stat(src)).size / 1024);
  const info  = await sharp(src).webp({ quality }).toFile(out);
  const outKB = Math.round(info.size / 1024);
  console.log(`${src.split("/").pop()} → ${out.split("/").pop()}  ${inKB} KB → ${outKB} KB`);
}
