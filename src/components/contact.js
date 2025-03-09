import { Avatar, Container, Grid2, Stack, Typography } from "@mui/material"
import contactus from "../assets/contact.jpg";
import { SUPPORT_EMAIL_ADDRESS } from "../utils/consants";
const Contact = () => {

    return <Container id="contact" sx={{ mb: 8 }}>
        <Grid2 container spacing={2} alignItems={'center'}>
            <Grid2 item size={{ xs: 6 }}>
                <Stack direction={'column'}>
                    <Typography component="h2" variant="h4" gutterBottom>Contact Us</Typography>
                    <Typography color='grey.600'>
                        We’re here to assist you with your connectivity, SaaS, and AI/ML needs. Whether you’re looking for collaboration opportunities, have inquiries, or want to explore how Connect Beacon can drive your business forward, we’d love to hear from you.

		      Email: ({SUPPORT_EMAIL_ADDRESS})
	              Let’s innovate and connect seamlessly!
                    </Typography>

                </Stack>
            </Grid2>
            <Grid2 item size={{ xs: 6 }}>
                <Avatar
                    src={contactus}
                    sx={{ borderRadius: "8px", width: "auto", height: "auto" }}
                />
            </Grid2>
        </Grid2>
    </Container>
}

export default Contact
