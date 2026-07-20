/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./**/*.html",
    "./**/*.js",                  // Scans ALL JS files in the root (like your include.js)
    "./components/**/*.{html,js}", // Scans everything inside your components folder
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        "on-tertiary-fixed": "#1d1b19",
        "inverse-primary": "#e9c349",
        "secondary-fixed-dim": "#e4beb5",
        "tertiary-fixed": "#e6e2de",
        "tertiary-container": "#b6b2af",
        "background": "#fff8f5",
        "on-error-container": "#93000a",
        "tertiary": "#605e5b",
        "primary-fixed": "#ffe088",
        "primary-fixed-dim": "#e9c349",
        "surface-dim": "#f2d4bf",
        "outline-variant": "#d0c5af",
        "primary-container": "#d4af37",
        "on-secondary": "#ffffff",
        "on-primary-container": "#554300",
        "on-secondary-fixed-variant": "#5b403a",
        "on-error": "#ffffff",
        "primary": "#735c00",
        "secondary": "#755850",
        "outline": "#7f7663",
        "on-tertiary-fixed-variant": "#484644",
        "error-container": "#ffdad6",
        "on-surface-variant": "#4d4635",
        "on-secondary-fixed": "#2b1611",
        "secondary-container": "#fed7ce",
        "surface-container": "#ffeadc",
        "surface-container-highest": "#fbddc7",
        "on-background": "#28180b",
        "on-secondary-container": "#795c54",
        "on-surface": "#28180b",
        "surface-container-high": "#ffe3cf",
        "inverse-on-surface": "#ffede2",
        "surface-container-low": "#fff1e9",
        "tertiary-fixed-dim": "#cac6c2",
        "on-tertiary-container": "#474542",
        "inverse-surface": "#3f2d1e",
        "secondary-fixed": "#ffdad2",
        "surface-tint": "#735c00",
        "surface-container-lowest": "#ffffff",
        "on-primary-fixed": "#241a00",
        "surface-variant": "#fbddc7",
        "surface": "#fff8f5",
        "on-tertiary": "#ffffff",
        "on-primary": "#ffffff",
        "surface-bright": "#fff8f5",
        "error": "#ba1a1a",
        "on-primary-fixed-variant": "#574500"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-max": "1200px",
        "section-padding": "80px",
        "gutter": "24px",
        "unit": "8px",
        "margin-mobile": "20px",
        "section-padding":"80px"
      },
      fontFamily: {
        "body-lg": ["Montserrat", "sans-serif"],
        "label-sm": ["Montserrat", "sans-serif"],
        "headline-sm": ["Playfair Display", "serif"],
        "display-lg-mobile": ["Playfair Display", "serif"],
        "body-md": ["Montserrat", "sans-serif"],
        "display-lg": ["Playfair Display", "serif"],
        "headline-md": ["Playfair Display", "serif"],
        "label-md": ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-sm": ["12px", { "lineHeight": "1", "fontWeight": "500" }],
        "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
        "display-lg-mobile": ["36px", { "lineHeight": "1.2", "fontWeight": "600" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "display-lg": ["48px", { "lineHeight": "1.2", "letterSpacing": "-0.02em", "fontWeight": "600" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "500" }],
        "label-md": ["14px", { "lineHeight": "1", "letterSpacing": "0.1em", "fontWeight": "600" }]
      }
    },
  },
  plugins: [],
}
