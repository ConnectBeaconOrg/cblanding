import { Avatar, Button, Container, Fade, Grid2, Icon, IconButton, Stack, Typography } from "@mui/material"
import SitemarkIcon from "./SitemarkIcon"
import React from "react";
import { Link } from "react-scroll";
import { ContactEmergencyOutlined, EmailRounded, Facebook, Instagram, LocationCityOutlined, LocationCityTwoTone, MobileFriendly, MobileFriendlyOutlined, MobileFriendlyRounded, PinDrop, SupportAgentRounded, Twitter } from "@mui/icons-material";
import { SUPPORT_EMAIL_ADDRESS } from "../utils/consants";
import ConnectBeaconLogo from '../assets/connect_beacon_logo.jfif'

const Footer = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    const containerRef = React.useRef(null);

    React.useEffect(() => {
        const x = containerRef.current
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1, // Trigger when 10% of the container is visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (x) {
                observer.unobserve(x);
            }
        };
    }, []);
    return <footer style={{ backgroundColor: "#d3e1ef5c", color: "gray" }}>

        <Container
            sx={{
                gap: { xs: 3, sm: 6 },
            }}
            ref={containerRef}
        >
            <Fade appear in={isVisible} style={{ transitionDelay: `${200}ms` }}>
                <Grid2 container pt={5} pb={3} justifyContent={'space-evenly'} spacing={{ xs: 2, md: 5 }} >
                    <Grid2 size={{ xs: 12, sm: 6, md: 4 }} item  >
                        <Stack direction={'column'} gap={2}>
                            <Avatar
                                src={ConnectBeaconLogo}
                                sx={{ height: '80px', width: "80px" }}
                                variant="square"
                            />
                            <Typography textAlign={'justify'}>Connect Beacon is a leading services company focused on delivering innovative connectivity solutions and cutting-edge SaaS products.</Typography>
                            <Stack direction={'row'}>
                                <IconButton><Twitter sx={{ color: "#1DA1F2" }} /></IconButton>
                                <IconButton><Instagram sx={{ color: "#cd486b" }} /></IconButton>
                                <IconButton><Facebook sx={{ color: "#4267B2" }} /></IconButton>
                            </Stack>
                        </Stack>
                    </Grid2 >
                    <Grid2 size={{ xs: 12, sm: 6, md: 2.5 }} item  >
                        <Stack direction={'column'} gap={2}>
                            <Typography variant="h5" color="textPrimary" fontSize={'24px'} borderBottom={'1px solid #eee'} fontWeight={600}>
                                Explore
                            </Typography>
                            <Link
                                to="home"
                                smooth={true}
                                duration={500}
                            >
                                Home
                            </Link>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                            >
                                About
                            </Link>
                            <Link
                                to="services"
                                smooth={true}
                                duration={500}
                            >
                                Services
                            </Link>
                        </Stack>
                    </Grid2 >
                    <Grid2 size={{ xs: 12, sm: 6, md: 2.5 }} item  >
                        <Stack direction={'column'} gap={2}>
                            <Typography variant="h5" color="textPrimary" fontSize={'24px'} borderBottom={'1px solid #eee'} fontWeight={600}>
                                Legal
                            </Typography>
                            <Link
                                to="terms"
                                smooth={true}
                                duration={500}
                            >
                                Terms
                            </Link>
                            <Link
                                to="privacy"
                                smooth={true}
                                duration={500}
                            >
                                Privacy
                            </Link>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </Stack>
                    </Grid2 >
                    <Grid2 size={{ xs: 12, sm: 6, md: 3 }} item  >
                        <Stack direction={'column'} gap={2}>
                            <Typography variant="h5" color="textPrimary" fontSize={'24px'} borderBottom={'1px solid #eee'} fontWeight={600}>
                                Get In Touch
                            </Typography>
                            <Stack direction={'row'} alignItems={'center'} gap={2}>
                                <PinDrop color="primary" />
                                <Typography>Hyderabad,
                                    India
                                </Typography>

                            </Stack>
                            {/* <Stack direction={'row'} alignItems={'center'} gap={2}>
                                <SupportAgentRounded color="success" />
                                <Typography>+91-919999999
                                </Typography>

                            </Stack> */}
                            <Stack direction={'row'} alignItems={'center'} gap={2}>
                                <EmailRounded color="warning" />
                                <Typography>{SUPPORT_EMAIL_ADDRESS}
                                </Typography>

                            </Stack>

                        </Stack>
                    </Grid2 >

                </Grid2>

            </Fade>

        </Container>
        <Stack sx={{ backgroundColor: "black", height: "50px" }} justifyContent={'center'} alignItems={'center'}>
            <Typography>Copyright  &#169; 2024 Connect Beacon. All Rights Reserved.</Typography>
        </Stack>
    </footer>
}

export default Footer