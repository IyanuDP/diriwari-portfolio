# Gallery Setup Guide

## 📁 Folder Structure

```
assets/images/
├── the-tech/       ← Add your programming & tech photos here
├── the-mech/       ← Add your engineering & mechanical photos here
└── the-music/      ← Add your music & performance photos here
```

## 🖼️ How to Add Photos

### Step 1: Add Image Files
Place your photos in the appropriate folder:
- **Tech photos** → `assets/images/the-tech/`
- **Mech photos** → `assets/images/the-mech/`
- **Music photos** → `assets/images/the-music/`

Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`

### Step 2: Update the Data File
Edit the corresponding JavaScript file:
- **Tech** → `assets/js/gallery-tech.js`
- **Mech** → `assets/js/gallery-mech.js`
- **Music** → `assets/js/gallery-music.js`

### Example Entry Format

```javascript
{
  image: 'assets/images/the-tech/my-photo.jpg',
  title: 'My Project Title',
  description: 'A brief description of what this photo shows.'
}
```

## 📝 Complete Example

If you add a file called `python-dashboard.jpg` to `assets/images/the-tech/`, update `assets/js/gallery-tech.js`:

```javascript
export const techGallery = [
  {
    image: 'assets/images/the-tech/python-dashboard.jpg',
    title: 'Interactive Data Dashboard',
    description: 'Real-time spectroscopy data visualization built with Python and Plotly.'
  },
  // ... other entries
];
```

## 🎨 Image Guidelines

- **Recommended size**: 800×600 pixels or larger
- **Aspect ratio**: 4:3 or 16:9 work best
- **File size**: Keep under 2MB for faster loading
- **Format**: JPEG for photos, PNG for screenshots

## 🚀 Quick Start

1. Drop your images into the folder
2. Copy an existing entry in the data file
3. Update the `image`, `title`, and `description`
4. Refresh your browser to see the changes!

## 🔗 Gallery Links

- The Tech: http://localhost:8080/the-tech.html
- The Mech: http://localhost:8080/the-mech.html
- The Music: http://localhost:8080/the-music.html
