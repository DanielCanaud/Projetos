import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    return (
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/DanielCanaud")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/danielcanaud-dev/")}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="mailto:daniel.canaud@icloud.com" target="_blank">
                            <EmailIcon />
                        </IconButton>
                    </Box>
                    <Typography textAlign="center">
                        © 2026 Daniel Canaud 
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer
