import { useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useColorMode } from "./ColorModeContext";
import avatarImage from "./assets/images/daniel.png";
import Hero from "./components/Hero/Hero";
import {
  PortfolioProject,
  portfolioProjects,
  projectCategories,
  ProjectCategory,
  serviceHighlights,
  skillGroups,
} from "./data/portfolioData";

const navItems = [
  { label: "Início", id: "inicio" },
  { label: "Projetos", id: "projetos" },
  { label: "Skills", id: "skills" },
  { label: "Contato", id: "contato" },
];

const highlightIcons = [
  <RocketLaunchOutlinedIcon key="rocket" />,
  <DesignServicesOutlinedIcon key="design" />,
  <StorageOutlinedIcon key="backend" />,
];

const contactMessage = encodeURIComponent("Olá, Daniel. Vi seu portfólio e gostaria de conversar sobre um projeto.");

const getProjectPreview = (project: PortfolioProject) =>
  project.thumbnail ?? project.previewImage ?? `https://image.thum.io/get/width/1200/crop/700/noanimate/${project.websiteURL}`;

const getProjectFallbackImage = (project: PortfolioProject) => {
  const [start, end] = project.accent;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${start}" />
          <stop offset="100%" stop-color="${end}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#bg)" rx="40" />
      <circle cx="1030" cy="120" r="180" fill="rgba(255,255,255,0.08)" />
      <circle cx="140" cy="620" r="160" fill="rgba(255,255,255,0.06)" />
      <text x="80" y="490" fill="white" font-family="Inter, Arial, sans-serif" font-size="72" font-weight="700">${project.title}</text>
      <text x="80" y="560" fill="rgba(255,255,255,0.82)" font-family="Inter, Arial, sans-serif" font-size="34">${project.thumbLabel}</text>
    </svg>
  `)}`;
};

const openExternalLink = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const App: React.FC = () => {
  const { mode, toggleColorMode } = useColorMode();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Todos");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const collaborativeProjectsCount = portfolioProjects.filter((project) => project.badge === "Colaborativo").length;
  const authorProjectsCount = portfolioProjects.filter((project) => project.badge === "Autoral").length;

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "Todos") {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (id: string) => {
    scrollToSection(id);
    handleCloseMenu();
  };

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: (theme) => alpha(theme.palette.background.paper, theme.palette.mode === "dark" ? 0.88 : 0.8),
          backdropFilter: "blur(16px)",
          borderBottom: (theme) => `1px solid ${alpha(theme.palette.divider, 0.75)}`,
          color: "text.primary",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 76, gap: 2 }}>
            <Stack sx={{ flexGrow: 1 }}>
              <Typography variant="subtitle2" color="secondary.light" fontWeight={800}>
                Daniel Canaud
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Fullstack Developer · Freelancer
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.5} sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item) => (
                <Button key={item.id} color="inherit" onClick={() => handleNavigate(item.id)}>
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Tooltip title={mode === "dark" ? "Modo claro" : "Modo escuro"}>
              <IconButton
                onClick={toggleColorMode}
                color="inherit"
                sx={{ display: { xs: "none", md: "inline-flex" } }}
                aria-label="Alternar modo claro/escuro"
              >
                {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
              </IconButton>
            </Tooltip>

            <Button
              variant="contained"
              color="secondary"
              endIcon={<ArrowOutwardRoundedIcon />}
              sx={{ display: { xs: "none", md: "inline-flex" } }}
              onClick={() => openExternalLink(`https://wa.me/351968208602?text=${contactMessage}`)}
            >
              Falar no WhatsApp
            </Button>

            <IconButton
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              onClick={handleOpenMenu}
              aria-label="Abrir menu"
            >
              <MenuIcon />
            </IconButton>

            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
              {navItems.map((item) => (
                <MenuItem key={item.id} onClick={() => handleNavigate(item.id)}>
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem onClick={() => openExternalLink(`https://wa.me/351968208602?text=${contactMessage}`)}>
                Falar no WhatsApp
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => { toggleColorMode(); handleCloseMenu(); }}>
                {mode === "dark" ? "☀️ Modo claro" : "🌙 Modo escuro"}
              </MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="main">
        <Hero image={avatarImage} name="Daniel Canaud" whatsapp="351968208602" />

        <Box sx={{ py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <Stack spacing={2} mb={4}>
              <Typography variant="overline" color="secondary.main" fontWeight={800}>
                Como eu entrego valor
              </Typography>
              <Typography variant="h2" sx={{ maxWidth: 760 }}>
                Clareza na mensagem, boa estética e execução técnica para transformar visita em oportunidade.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {serviceHighlights.map((item, index) => (
                <Grid item xs={12} md={4} key={item.title}>
                  <Card variant="outlined" sx={{ height: "100%", borderColor: "divider" }}>
                    <CardContent sx={{ p: 3.25 }}>
                      <Stack spacing={2}>
                        <Box
                          sx={{
                            width: 48,
                            height: 48,
                            display: "grid",
                            placeItems: "center",
                            borderRadius: 3,
                            color: "secondary.main",
                            bgcolor: alpha("#4f8e3e", 0.1),
                          }}
                        >
                          {highlightIcons[index]}
                        </Box>
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography color="text.secondary">{item.description}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box id="projetos" sx={{ py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <Stack spacing={2} mb={4}>
              <Typography variant="overline" color="secondary.main" fontWeight={800}>
                Projetos selecionados
              </Typography>
              <Typography variant="h2">Projetos que mostram meu trabalho na prática</Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 760 }}>
                Os projetos colaborativos abaixo deixam explícito que participei como desenvolvedor. Não representam propriedade minha, e sim contribuições reais em desenvolvimento.
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap mb={4}>
              {projectCategories.map((category) => (
                <Chip
                  key={category}
                  label={category}
                  clickable
                  color={selectedCategory === category ? "secondary" : "default"}
                  variant={selectedCategory === category ? "filled" : "outlined"}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </Stack>

            <Grid container spacing={3}>
              {filteredProjects.map((project) => (
                <Grid item xs={12} md={6} key={`${project.title}-${project.websiteURL}`}>
                    <Card sx={{ height: "100%", overflow: "hidden" }}>
                      <Box sx={{ position: "relative", '&:hover .cardActions': { opacity: 1, pointerEvents: 'auto', transform: 'translateY(0)' } }}>
                        <CardMedia
                          component="img"
                          height="240"
                          image={getProjectPreview(project)}
                          alt={`Thumbnail do projeto ${project.title}`}
                          sx={{ objectFit: "cover", objectPosition: "top center", backgroundColor: "#e2e8f0", transition: 'transform 360ms ease' }}
                          onError={(event) => {
                            event.currentTarget.src = getProjectFallbackImage(project);
                          }}
                        />
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          sx={{
                            position: "absolute",
                            insetInline: 16,
                            top: 16,
                          }}
                        >
                          <Chip
                            label={project.badge}
                            size="small"
                            sx={{ bgcolor: alpha("#232323", 0.74), color: "white", backdropFilter: "blur(10px)" }}
                          />
                          <Box
                            sx={{
                              width: 36,
                              height: 36,
                              display: "grid",
                              placeItems: "center",
                              borderRadius: 999,
                              bgcolor: alpha("#232323", 0.74),
                              color: "white",
                              backdropFilter: "blur(10px)",
                            }}
                          >
                            <LanguageRoundedIcon fontSize="small" />
                          </Box>
                        </Stack>

                        <Box className="cardActions" sx={{ position: 'absolute', right: 14, bottom: 14, display: 'flex', gap: 1, opacity: 0, pointerEvents: 'none', transform: 'translateY(8px)', transition: 'all 220ms ease' }}>
                          <Button size="small" variant="contained" color="secondary" onClick={() => openExternalLink(project.websiteURL)} endIcon={<OpenInNewRoundedIcon />}>
                            Ver
                          </Button>
                          {project.codeURL && (
                            <Button size="small" variant="outlined" onClick={() => openExternalLink(project.codeURL)}>
                              Código
                            </Button>
                          )}
                        </Box>
                      </Box>

                    <CardContent sx={{ p: 3 }}>
                      <Stack spacing={2.2}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                          <Chip label={project.badge} color={project.badge === "Autoral" ? "secondary" : "default"} />
                          <Chip label={project.projectType} variant="outlined" />
                        </Stack>

                        <Box>
                          <Typography variant="h4" mb={0.5}>
                            {project.title}
                          </Typography>
                          <Typography color="text.secondary">Categoria: {project.category}</Typography>
                        </Box>

                        <Typography color="text.secondary">{project.description}</Typography>

                        <Box>
                          <Typography variant="subtitle2" fontWeight={800} mb={0.75}>
                            Meu papel
                          </Typography>
                          <Typography color="text.secondary">{project.role}</Typography>
                        </Box>

                        <Box>
                          <Typography variant="subtitle2" fontWeight={800} mb={1}>
                            Stack usada
                          </Typography>
                          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {project.stack.map((tech) => (
                              <Chip
                                key={`${project.title}-${tech}`}
                                label={tech}
                                size="small"
                                sx={{
                                  "&:hover": {
                                    backgroundColor: (theme) => alpha(theme.palette.secondary.main, theme.palette.mode === "dark" ? 0.3 : 0.16),
                                    color: "text.primary",
                                  },
                                }}
                              />
                            ))}
                          </Stack>
                        </Box>

                        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                          <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<OpenInNewRoundedIcon />}
                            onClick={() => openExternalLink(project.websiteURL)}
                          >
                            Ver projeto
                          </Button>
                          {project.codeURL && (
                            <Button
                              variant="outlined"
                              endIcon={<CodeRoundedIcon />}
                              onClick={() => openExternalLink(project.codeURL ?? "")}
                            >
                              Ver código
                            </Button>
                          )}
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box id="skills" sx={{ py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="start">
              <Grid item xs={12} md={5}>
                <Stack spacing={2}>
                  <Typography variant="overline" color="secondary.main" fontWeight={800}>
                    Skills
                  </Typography>
                  <Typography variant="h2">Tecnologias com as quais já entrego projetos</Typography>
                  <Typography color="text.secondary">
                    Meu foco principal está em desenvolvimento web com base sólida em frontend e apoio backend para entregas mais completas.
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={12} md={7}>
                <Grid container spacing={3}>
                  {skillGroups.map((group) => (
                    <Grid item xs={12} key={group.title}>
                      <Card variant="outlined" sx={{ borderColor: "divider" }}>
                        <CardContent sx={{ p: 3 }}>
                          <Stack spacing={2}>
                            <Typography variant="h5">{group.title}</Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                              {group.items.map((item) => (
                                <Chip
                                  key={`${group.title}-${item}`}
                                  label={item}
                                  sx={{
                                    "&:hover": {
                                      backgroundColor: (theme) => alpha(theme.palette.secondary.main, theme.palette.mode === "dark" ? 0.3 : 0.16),
                                      color: "text.primary",
                                    },
                                  }}
                                />
                              ))}
                            </Stack>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box id="contato" sx={{ py: { xs: 6, md: 8 } }}>
          <Container maxWidth="lg">
            <Card
              sx={{
                overflow: "hidden",
                background: (theme) =>
                  `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.secondary.main, theme.palette.mode === "dark" ? 0.15 : 0.09)} 100%)`,
                color: "text.primary",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={7}>
                    <Stack spacing={2}>
                      <Typography variant="overline" color="text.secondary" fontWeight={800}>
                        Contato
                      </Typography>
                      <Typography variant="h2">
                        Se você precisa de uma landing page, site institucional ou interface web, vamos conversar.
                      </Typography>
                      <Typography color="text.secondary">
                        Posso atender demandas freelancer e também conversar sobre oportunidades com recrutadores.
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={5}>
                    <Stack spacing={1.5}>
                      <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        startIcon={<WhatsAppIcon />}
                        onClick={() => openExternalLink(`https://wa.me/351968208602?text=${contactMessage}`)}
                      >
                        WhatsApp
                      </Button>
                      <Button
                        fullWidth
                        variant="outlined"
                        sx={{ borderColor: "divider", color: "text.primary" }}
                        startIcon={<EmailOutlinedIcon />}
                        onClick={() => openExternalLink("mailto:daniel.canaud@icloud.com")}
                      >
                        daniel.canaud@icloud.com
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </Box>
      </Box>

      <Box component="footer" sx={{ py: 3.5, borderTop: (theme) => `1px solid ${theme.palette.divider}` }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
          >
            <Box>
              <Typography fontWeight={800}>Daniel Canaud</Typography>
              <Typography color="text.secondary">Portfólio focado em oportunidades freelancer e recrutamento.</Typography>
            </Box>

            <Stack direction="row" spacing={1.25} alignItems="center">
              <IconButton
                onClick={() => openExternalLink("https://github.com/DanielCanaud")}
                aria-label="GitHub"
                sx={{ color: (theme) => (theme.palette.mode === "dark" ? "#f2f5f3" : "#121a14") }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton onClick={() => openExternalLink("https://www.linkedin.com/in/danielcanaud-dev/")} aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <IconButton onClick={() => openExternalLink("mailto:daniel.canaud@icloud.com")} aria-label="Email">
                <EmailOutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default App;