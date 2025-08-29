# Photo Integration Guide

## Adding Your Personal Photo

Your portfolio is set up with a modern photo integration system that includes a beautiful B&W to color transition effect. Here's how to add your photo:

### 1. Photo Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Minimum 800x800px (square aspect ratio works best)
- **Quality**: High resolution for crisp display
- **Background**: Clean background or professional headshot style

### 2. Adding Your Photo

1. Place your photo in the `public` directory
2. Name it something like `erick-photo.jpg` or `profile-photo.jpg`
3. Update the Hero component at `src/components/hero.tsx`

### 3. Code Update

In `src/components/hero.tsx`, find this section (around line 290):

```tsx
{/* Uncomment and replace with your actual photo */}
{/* <Image
  src="/path-to-your-photo.jpg"
  alt="Erick Koine"
  fill
  className="object-cover"
  priority
/> */}
```

Replace it with:

```tsx
<Image
  src="/your-photo-filename.jpg"
  alt="Erick Koine"
  fill
  className="object-cover"
  priority
/>
```

### 4. Remove the Placeholder

After adding your photo, you can remove or comment out the placeholder div:

```tsx
{/* Remove this placeholder div */}
<div className="w-full h-full bg-gradient-to-br from-[color:var(--brand-blue)]/20 to-[color:var(--brand-green)]/20 flex items-center justify-center">
  <span className="text-6xl font-bold text-foreground/30">EK</span>
</div>
```

### 5. Photo Effects

The photo already includes:
- ✅ B&W to color transition on hover
- ✅ Smooth scaling animation
- ✅ Abstract gradient frame
- ✅ Floating emoji elements
- ✅ Professional shadow effects

### 6. Optional: Additional Photos

If you want to add a secondary photo in the About section, you can:

1. Add another photo to the `public` directory
2. Update the About section in `src/components/sections/about.tsx`
3. Follow the same pattern as the Hero section

### 7. Asset Optimization

For best performance:
- Use Next.js Image component (already implemented)
- Consider using WebP format for smaller file sizes
- Ensure photos are optimized for web (compressed but high quality)

## Logo Assets

Your logo assets are already properly set up:
- ✅ Light theme logo: `/emk-logo-light.svg`
- ✅ Dark theme logo: `/emk-logo-dark.svg`
- ✅ Color logo: `/emk-logo-color.svg`

The logo automatically switches between light and dark versions based on the theme.

## Next Steps

1. Add your professional photo to the `public` directory
2. Update the Hero component with your photo path
3. Test the B&W to color transition effect
4. Ensure the photo looks good on both desktop and mobile
5. Consider adding a secondary photo to the About section if desired

Your portfolio is now ready with a modern, professional photo integration system!
