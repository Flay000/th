import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "./assets/xx.png"; // logo ou imagem pequena para header
import foto1 from "./assets/foto1.png";
import foto2 from "./assets/foto2.png";
import foto3 from "./assets/foto3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/cinzel"; // Importa peso padrão (400)
import "@fontsource/cinzel/700.css"; // Importa peso bold


import ContentCutIcon from "@mui/icons-material/ContentCut";


const photos = [foto1, foto2, foto3];

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box sx={{ minHeight: "100vh", background: "linear-gradient(180deg, #888888 0%, #000000 100%)",
      fontFamily: "'Cinzel', serif",
     }}>
      
      {/* Header fixa no topo */}
      <AppBar
  position="fixed"
  sx={{
    backgroundColor: "#111",
    boxShadow: "0px 2px 10px rgba(0,0,0,0.5)",
    transition: "0.3s ease-in-out",
  }}
>
  <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
    <ContentCutIcon sx={{ color: "#fff", fontSize: 40 }} />
    <Typography
      variant="h6"
      component="div"
      sx={{
        fontWeight: "bold",
        color: "#fff",
        fontFamily: "'Oswald', sans-serif",
        letterSpacing: 1,
      }}
    >
      Sussa Barbearia
    </Typography>

    <Typography
      variant="body1"
      sx={{
        color: "#aaa",
        fontStyle: "italic",
        fontSize: "0.9rem",
      }}
    >
      Estilo, tradição e pontualidade
    </Typography>
  </Toolbar>
</AppBar>


      {/* Espaço para o conteúdo não ficar "embaixo" do header */}
      <Toolbar />

      {/* Fundo com imagem principal */}
      <Box
        sx={{
          height: { xs: 300, md: 450 },
          backgroundImage: `url(${logo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Container>
          {/* <Typography variant="h3" fontWeight="bold" gutterBottom>
            Sussa Barbearia
          </Typography> */}
          {/* <Typography variant="h6">
            Estilo, tradição e atendimento de primeira. Agende seu horário agora mesmo!
          </Typography> */}
        </Container>
      </Box>

      {/* Carrossel de fotos */}
      <Container sx={{ py: 5 }}>
       <Typography
  variant="h4"
  align="center"
  gutterBottom
  color="white"
  fontWeight="bold"
  sx={{ fontFamily: "'Cinzel', serif" }}
>
  Nossos Cortes
</Typography>


        <Box sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          <Slider {...settings}>
            {photos.map((photo, index) => (
              <Box key={index}>
                <Box
                  component="img"
                  src={photo}
                  alt={`Corte ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: 300,
                    objectFit: index === 0 ? "contain" : "cover",
                    borderRadius: 2,
                    boxShadow: 3,
                    // backgroundColor: index === 0 ? "#111" : "transparent", // evita fundo vazio com contain
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

       <Box display="flex" flexDirection="column" gap={2}>
      <Button
        variant="contained"
        color="success"
        size="large"
        startIcon={<WhatsAppIcon />}
        href="https://wa.me/5527997825349?text=Olá%2C+gostaria+de+agendar+um+horário+na+Sussa+Barbearia"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 15px rgba(0, 255, 0, 0.3)",
          },
        }}
      >
        Agende um Horário Online
      </Button>

      <Button
        variant="contained"
        size="large"
        startIcon={<InstagramIcon />}
        href="https://www.instagram.com/sussabarbearia/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          backgroundImage:
            "linear-gradient(45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)",
          color: "#fff",
          transition: "0.3s",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          },
        }}
      >
        Siga-nos no Instagram
      </Button>
    </Box>
      </Container>
    </Box>
  );
}
