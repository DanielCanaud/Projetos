import { Box, Container, Grid, Typography, styled } from "@mui/material"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"
import Typewriter from "../../../../components/Typewriter/Typewriter"
import Avatar from "../../../../assets/images/avatar.jpg"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from "../../../../components/StyledButton/StyledButton";

const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const handleWhatsApp = () => {
        const phone = '351968208602';
        const message = 'Olá! Vi seu portfólio e gostaria de conversar.';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    const handleInstagram = () => {
        const url = 'https://www.instagram.com/canaudd?igsh=cnZudm5mdWVnaGhi&utm_source=qr';
        window.open(url, '_blank');
    };

    const handleLinkedIn = () => {
        const url = 'https://www.linkedin.com/in/danielcanaud-dev/';
        window.open(url, '_blank');
    };

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" pb={3}>
                                <Box width={"150%"} position="absolute" top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" pb={2} textAlign="center">
                                Daniel Canaud
                            </Typography>
                            <Typewriter text="I'm a Software Engineer" delay={120} variant="h2" color="primary.contrastText" />
                            <Box mt={3}>
                                <Grid container spacing={3} display="flex" justifyContent="center">
                                    <Grid item xs={10} sm={4} md={3}>
                                        <StyledButton onClick={() => handleWhatsApp()} aria-label="WhatsApp">
                                            <WhatsAppIcon sx={{ fontSize: 32 }} />
                                            <Typography>WhatsApp</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={10} sm={4} md={3}>
                                        <StyledButton onClick={() => handleInstagram()} aria-label="Instagram">
                                            <InstagramIcon sx={{ fontSize: 32 }} />
                                            <Typography>Instagram</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid item xs={10} sm={4} md={3}>
                                        <StyledButton onClick={() => handleLinkedIn()} aria-label="LinkedIn">
                                            <LinkedInIcon sx={{ fontSize: 32 }} />
                                            <Typography>LinkedIn</Typography>
                                        </StyledButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default HeroSection
