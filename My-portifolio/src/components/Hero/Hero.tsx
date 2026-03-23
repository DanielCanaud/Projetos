import React from 'react';
import { Box, Avatar, Typography, IconButton, Link, alpha, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typewriter from '../Typewriter/Typewriter';
import { portfolioProjects } from '../../data/portfolioData';

interface HeroProps {
  image?: string;
  name?: string;
  whatsapp?: string;
}

const Hero: React.FC<HeroProps> = ({ image, name = 'Seu Nome', whatsapp = '+5511999999999' }) => {
  const theme = useTheme();
  const waHref = `https://wa.me/${whatsapp.replace(/\D/g, '')}`;

  const getProjectPreview = (project: any) =>
    project.thumbnail ?? project.previewImage ?? `https://image.thum.io/get/width/1200/crop/700/noanimate/${project.websiteURL}`;

  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        px: 3,
        py: { xs: 12, md: 14 },
        bgcolor: 'background.default',
        color: 'text.primary',
        fontFamily: 'Poppins, Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
        backgroundImage: `radial-gradient(circle at 10% 10%, ${alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.12 : 0.08)}, transparent 30%), linear-gradient(180deg, ${theme.palette.background.default} 0%, ${theme.palette.background.paper} 72%)`,
        backgroundBlendMode: 'normal'
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1080,
          display: 'flex',
          gap: { xs: 3, md: 5 },
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
            <Avatar
              src={image}
              alt={name}
              sx={{
                width: { xs: 160, md: 290 },
                height: { xs: 160, md: 290 },
                mt: { xs: 0, md: 2 },
                boxShadow: theme.palette.mode === 'dark' ? '0 16px 38px rgba(0,0,0,0.42)' : '0 16px 34px rgba(14, 24, 16, 0.18)',
                border: `6px solid ${alpha(theme.palette.secondary.main, theme.palette.mode === 'dark' ? 0.22 : 0.14)}`
              }}
            />

            <Box sx={{ flex: 1, maxWidth: 680, textAlign: 'center', ml: { xs: 0, md: 2 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  letterSpacing: 1,
                  lineHeight: 1,
                  mb: 0.5,
                  fontSize: { xs: '2rem', md: '3.4rem' },
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, #f1f7f2, #a9d993, #8ecfc0)'
                    : 'linear-gradient(90deg, #1e2b1f, #345a2b, #2f6f62)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: theme.palette.mode === 'dark' ? '0 5px 24px rgba(0,0,0,0.45)' : '0 4px 18px rgba(45,62,47,0.16)'
                }}
              >
                {name}
              </Typography>

              <Box sx={{ mt: 0.5, mb: 1 }}>
                <Typewriter text="Desenvolvedor Full Stack" delay={50} variant="h4" color={theme.palette.secondary.main} startDelay={300} />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typewriter text="Projetos objetivos, bem desenhados e funcionais." delay={28} variant="body1" color={theme.palette.text.secondary} startDelay={1800} />
              </Box>

              <Box sx={{ display: 'flex', gap: 1, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Link href="https://www.linkedin.com" target="_blank" rel="noopener" underline="none" sx={{ '&:hover': { opacity: 0.9 } }}>
                  <IconButton aria-label="linkedin" sx={{ color: '#0A66C2' }}>
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Link>

                <Link href="https://github.com" target="_blank" rel="noopener" underline="none" sx={{ '&:hover': { opacity: 0.92 } }}>
                  <IconButton aria-label="github" sx={{ color: theme.palette.mode === 'dark' ? '#f2f4f3' : '#111814' }}>
                    <GitHubIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Link>

                <Link href="https://www.instagram.com" target="_blank" rel="noopener" underline="none" sx={{ '&:hover': { opacity: 0.9 } }}>
                  <IconButton aria-label="instagram" sx={{ color: '#E1306C' }}>
                    <InstagramIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 1200, mt: { xs: 4, md: 6 }, overflow: 'hidden' }}>
            <Box
              sx={{
                display: 'flex',
                gap: 1.6,
                width: 'max-content',
                animation: 'marquee 30s linear infinite',
                alignItems: 'center',
                '@keyframes marquee': {
                  '0%': { transform: 'translateX(0)' },
                  '100%': { transform: 'translateX(-50%)' }
                },
                '&:hover': {
                  animationPlayState: 'paused',
                },
              }}
            >
              {[...portfolioProjects, ...portfolioProjects].map((project, idx) => (
                <Box
                  key={`${project.title}-${idx}`}
                  component="a"
                  href={project.websiteURL ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: 'none',
                    display: 'block',
                    width: { xs: 210, md: 240 },
                    height: { xs: 90, md: 98 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.35)), url(${getProjectPreview(project)})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: theme.palette.mode === 'dark'
                      ? '0 10px 22px rgba(0,0,0,0.35)'
                      : '0 10px 22px rgba(17,25,20,0.15)',
                    border: `1px solid ${alpha(theme.palette.divider, 0.85)}`,
                    transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                    '&:hover': {
                      transform: 'translateY(-4px) scale(1.015)',
                      boxShadow: theme.palette.mode === 'dark'
                        ? '0 14px 28px rgba(0,0,0,0.48)'
                        : '0 14px 28px rgba(17,25,20,0.2)',
                      borderColor: alpha(theme.palette.secondary.main, 0.6),
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      px: 1.5,
                      py: 1,
                    }}
                  >
                    <Typography sx={{ color: '#fff', fontWeight: 700, lineHeight: 1.1 }}>
                      {project.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: 12 }}>
                      {project.thumbLabel}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <IconButton
            component="a"
            href={waHref}
            target="_blank"
            rel="noopener"
            aria-label="whatsapp"
            sx={{
              position: 'fixed',
              right: 18,
              bottom: 18,
              width: 64,
              height: 64,
              bgcolor: '#25D366',
              color: '#fff',
              '&:hover': { bgcolor: '#20b858', transform: 'translateY(-2px) scale(1.03)' },
              boxShadow: '0 10px 26px rgba(37,211,102,0.35)'
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 36 }} />
          </IconButton>
        </Box>
      );
    };

    export default Hero;
