import Typography from 'typography';
import theme from 'typography-theme-wordpress-2016';

const typography = new Typography({
  ...theme,
  headerFontFamily: ['Merriweather Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['900', '700', '500', '300', '100'],
    },
    {
      name: 'Merriweather Sans',
      styles: ['800', '800i', '700', '700i', '400', '400i', '300', '300i'],
    },
  ],
});

export default typography;
