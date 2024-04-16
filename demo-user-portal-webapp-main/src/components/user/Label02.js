import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import React from "react";

export const Label02 = ({portalData,props}) => {
    const label02Text = portalData?.label02Text?.value  || "-";
    const label02Value = portalData?.label02Value?.value || "-";
    return(

        <Card
            sx={{ height: '100%' }}
            {...props}
        >
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="overline"
                        >
                            {label02Text!=="-" &&
                            label02Text
                            }
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            {label02Value!=="-" &&
                            label02Value
                            }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: 'warning.main',
                                height: 56,
                                width: 56
                            }}
                        >
                            <PriceCheckIcon />
                        </Avatar>
                    </Grid>
                </Grid>
                {/*<Box*/}
                {/*    sx={{*/}
                {/*        pt: 2,*/}
                {/*        display: 'flex',*/}
                {/*        alignItems: 'center'*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <ArrowDownwardIcon color="error" />*/}
                {/*    <Typography*/}
                {/*        color="error"*/}
                {/*        sx={{*/}
                {/*            mr: 1*/}
                {/*        }}*/}
                {/*        variant="body2"*/}
                {/*    >*/}
                {/*        12%*/}
                {/*    </Typography>*/}
                {/*    <Typography*/}
                {/*        color="textSecondary"*/}
                {/*        variant="caption"*/}
                {/*    >*/}
                {/*        Since last month*/}
                {/*    </Typography>*/}
                {/*</Box>*/}
            </CardContent>
        </Card>
    );
}
