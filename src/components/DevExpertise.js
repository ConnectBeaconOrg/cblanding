import { Box, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import WebIcon from '@mui/icons-material/Web';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

const devSkills = [
  {
    icon: <PhoneIphoneIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Mobile App Development',
    desc: 'Custom Android & iOS apps built with modern frameworks like Flutter and React Native.',
  },
  {
    icon: <WebIcon color="secondary" sx={{ fontSize: 40 }} />,
    title: 'Web Application Development',
    desc: 'Responsive, secure, and high-performance web platforms with React, Vue, and Next.js.',
  },
  {
    icon: <CloudQueueIcon color="success" sx={{ fontSize: 40 }} />,
    title: 'Full-Stack Engineering',
    desc: 'Complete frontend-backend integration using Node.js, Python, Go, and cloud-native stacks.',
  },
];

export default function DevExpertise() {
  return (
    <Box id="expertise" sx={{ py: 10, backgroundColor: '#f8fbff' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={6}>
          Our Development Expertise
        </Typography>
        <Grid container spacing={4}>
          {devSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                <Stack spacing={2} alignItems="center">
                  {skill.icon}
                  <Typography variant="h6" fontWeight="bold">
                    {skill.title}
                  </Typography>
                  <Typography color="text.secondary">{skill.desc}</Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

