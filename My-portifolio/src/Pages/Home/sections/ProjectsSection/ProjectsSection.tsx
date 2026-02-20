import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Projeto PetCare",
            subtitle: "Janeiro 2026 - Fevereiro 2026",
            srcImg: "/src/assets/images/petcare.png",
            description: "Projeto de um sitie para cuidar dos pets, onde o usuário pode escolher o serviço que deseja, como banho e tosa, consulta veterinária, vacinação entre outras. o usuário ira agendar o serviço colocando seu nome e do pet, telefone data e horario. ",
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://projetos-ten-teal.vercel.app/",
            codeURL: "https://github.com/DanielCanaud/Projetos/tree/main/projeto-PetCare-main",
        },
        {
            title: "Projeto Loja de Carros",
            subtitle: "Novembro 2025 - Dezembro de 2025",
            srcImg: "/src/assets/images/Loja-carros.png",
            description: "Projeto academico  para uma loja de carros,  com transição do carros para ir ao seguinte",
            technologies: "Technologies: JavaScript, HTML, CSS",
            websiteURL: "https://projetos-j1f2.vercel.app/",
            codeURL: "https://github.com/DanielCanaud/Projetos/tree/main/Projeto-Criativo-Carros",
        },
        {
            title: "Project Landing page profissional",
            subtitle: "outubro de 2025 - Dezembro de 2025",
            srcImg: "/src/assets/images/canaud.png",
            description: "Projeto profissional feito para entregar uma landing page, com foco em marcação de aulas que que levam ao whatsApp, um piano interativo e um design moderno e responsivo",
            technologies: "Technologies: JavaScript, HTML, CSS, React, Tailwind, next.js",
            websiteURL: "https://v0-fernandacanaud.vercel.app/",
            codeURL: "https://github.com/DanielCanaud/Projetos/tree/main/projeto%20fernanda%20canaud",
        },
        {
            title: "Project Linktree",
            subtitle: "Janeiro de 2026 - Janeiro de 2026",
            srcImg: "/src/assets/images/linktree.png",
            description: "Projeto pessoal para criar um linktree, tem um design moderno e responsivo, aonde tem botões para acessar minhas redes",
            technologies: "Technologies: JavaScript, HTML, CSS,",
            websiteURL: "https://projetos-zd44.vercel.app/",
            codeURL: "https://github.com/DanielCanaud/Projetos/tree/main/Projeto-linktree-main",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
