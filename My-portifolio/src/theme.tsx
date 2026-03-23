import { alpha, createTheme, responsiveFontSizes, PaletteMode } from '@mui/material/styles';

const sharedTypography = {
    fontFamily: [
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'sans-serif',
    ].join(','),
    h1: { fontWeight: 800, letterSpacing: '-0.04em' },
    h2: { fontWeight: 800, letterSpacing: '-0.03em' },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    h4: { fontWeight: 700, letterSpacing: '-0.01em' },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.65 },
    button: { fontWeight: 700, textTransform: 'none' as const },
};

const sharedComponents = (mode: PaletteMode) => ({
    MuiCssBaseline: {
        styleOverrides: {
            html: { scrollBehavior: 'smooth' },
            body: {
                background: mode === 'light'
                    ? 'linear-gradient(180deg, #f6f7f4 0%, #eef2eb 100%)'
                    : 'linear-gradient(180deg, #121212 0%, #1a1a1a 100%)',
            },
            '*::selection': { backgroundColor: alpha('#4f8e3e', 0.18) },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 999,
                paddingInline: 20,
                minHeight: 48,
                boxShadow: 'none',
                transition: 'transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease',
                '&:hover': {
                    transform: 'translateY(-1px)',
                    boxShadow: mode === 'light' ? '0 8px 22px rgba(20, 29, 25, 0.12)' : '0 10px 24px rgba(0, 0, 0, 0.35)',
                },
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: { borderRadius: 24, boxShadow: mode === 'light' ? '0 18px 55px rgba(35,35,35,0.08)' : '0 18px 55px rgba(0,0,0,0.3)' },
        },
    },
    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: 999,
                fontWeight: 600,
                transition: 'background-color 180ms ease, color 180ms ease, border-color 180ms ease',
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                transition: 'transform 180ms ease, background-color 180ms ease, color 180ms ease',
                '&:hover': {
                    transform: 'translateY(-1px)',
                },
            },
        },
    },
    MuiLink: {
        styleOverrides: {
            root: {
                transition: 'color 180ms ease, opacity 180ms ease',
                '&:hover': {
                    opacity: 0.86,
                },
            },
        },
    },
});

export const buildTheme = (mode: PaletteMode) => {
    let theme = createTheme({
        palette: mode === 'light'
            ? {
                mode: 'light',
                primary: { main: '#232323', light: '#303030', dark: '#171717', contrastText: '#f8fafc' },
                secondary: { main: '#466e39', light: '#5f8f50', dark: '#2f4e25', contrastText: '#f6faf4' },
                background: { default: '#eef2eb', paper: '#f9fcf7' },
                text: { primary: '#1f2a1f', secondary: '#4f5f4d' },
                divider: '#d3dbd0',
            }
            : {
                mode: 'dark',
                primary: { main: '#dfe6df', light: '#f0f5f0', dark: '#b8c4b8', contrastText: '#0e120f' },
                secondary: { main: '#7db369', light: '#98c78a', dark: '#5f944d', contrastText: '#0d170d' },
                background: { default: '#101512', paper: '#18201b' },
                text: { primary: '#e6eee8', secondary: '#b2c1b4' },
                divider: '#2d3a31',
            },
        shape: { borderRadius: 20 },
        typography: sharedTypography,
        components: sharedComponents(mode),
    });
    theme = responsiveFontSizes(theme);
    return theme;
};

const theme = buildTheme('light');
export default theme;