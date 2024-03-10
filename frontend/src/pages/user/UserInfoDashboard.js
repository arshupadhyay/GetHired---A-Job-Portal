import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';


//palette.secondary.midNightBlue
const UserInfoDashboard = () => {
    const { user } = useSelector(state => state.userProfile);
    // const { palette } = useTheme();
    return (
        <>
            <Box sx={{ maxWidth: "50%", margin: "auto", pt: 10 }}>
                <Card sx={{ minWidth: 275, bgcolor: 'white' }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 16 }} color="wheatwhite" gutterBottom>
                            Personal Info
                        </Typography>
                        <hr style={{ marginBottom: "30px" }} />
                        <Typography variant="h6" component="div" sx={{ color: "black" }} >
                            First name: {user && user.firstName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black" }} >
                            Last name: {user && user.lastName}
                        </Typography>
                        <Typography variant="h6" component="div" sx={{ color: "black" }} >
                            E-mail:  {user && user.email}
                        </Typography>
                        <Typography sx={{ mb: 1.5, color: "black", pt: 2 }} color="text.secondary">
                            Status: {user && user.role === 0 ? "Regular user" : "Admin"}
                        </Typography>

                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default UserInfoDashboard
