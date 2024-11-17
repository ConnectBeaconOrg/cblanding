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
                        We're here to assist you with your connectivity and SaaS needs. Reach out to us at ({SUPPORT_EMAIL_ADDRESS}) for collaboration, inquiries, or to learn more about how Connect Beacon can drive your business forward.
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