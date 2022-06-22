import { Box, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const PromotionContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        padding: '40px 0px 40px 0px',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    overFlow: 'hidden',
    background: Colors.secondary,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
    fontFamily: '"Montez", "Cursive"',
    [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
    },
    color: Colors.white,
    fontSize: '1.5rem',
}));