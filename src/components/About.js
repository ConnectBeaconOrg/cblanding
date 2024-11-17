import { Avatar, Container, Stack, Typography } from "@mui/material"
import aboutus from "../assets/about.png";
const About = () => {

    return <Container id="about" sx={{ mb: 2 }}>
        <Stack direction={'row'} gap={2} alignItems={'center'}>
            <Avatar
                src={aboutus}
                sx={{ borderRadius: "8px", width: "50%", height: "auto" }}
            />
            <Stack direction={'column'}>
                <Typography component="h2" variant="h4" gutterBottom>About Us</Typography>
                <Typography color='grey.600'>Connect Beacon is a leading services company focused on delivering innovative connectivity solutions and cutting-edge SaaS products. We empower businesses to connect seamlessly and operate efficiently in today's fast-paced technological landscape.</Typography>

            </Stack>

        </Stack>
    </Container>
}

export default About