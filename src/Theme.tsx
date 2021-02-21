import { colors } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Noto Sans JP',
            'Lato',
            '游ゴシック Medium',
            '游ゴシック体',
            'Yu Gothic Medium',
            'YuGothic',
            'ヒラギノ角ゴ ProN',
            'Hiragino Kaku Gothic ProN',
            'メイリオ',
            'Meiryo',
            'ＭＳ Ｐゴシック',
            'MS PGothic',
            'sans-serif',
        ].join(','),
    },
    palette: {
        common: { black: '#000', white: '#fff' },
        background: { paper: '#fff', default: '#fafafa' },
        primary: {
            light: '#d7ffd9',
            main: '#a5d6a7',
            dark: '#75a478',
            contrastText: '#fff',
        },
        secondary: {
            light: 'ffffff',
            main: '#e8eaf6',
            dark: '#c5cae9',
            contrastText: '#fff',
        },
        error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary: 'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
    },
});
