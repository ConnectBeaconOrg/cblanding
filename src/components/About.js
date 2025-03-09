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
                <Typography color='grey.600'>Connect Beacon is a leading services company focused on delivering innovative connectivity solutions, cutting-edge SaaS products, and advanced AI/ML technologies. We empower businesses to connect seamlessly, optimize operations, and enhance user experiences through intelligent automation, including chatbot AI, predictive analytics, and AI-driven network management. Our solutions are designed to drive efficiency, scalability, and digital transformation in today's fast-paced technological landscape. </Typography>

            </Stack>

        </Stack>
    </Container>
}

export default About
