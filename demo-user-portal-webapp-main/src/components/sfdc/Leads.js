import React, {useContext} from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import {SeverityPill} from "../severity-pill";
import {
    Box,
    Button,
    Card,
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Tooltip, Typography
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {pastLeads} from "../../__mocks__";
import {StoreCtx} from "../../context";


export const Leads = ({customLeadsData,...props}) => {
    const { state } = useContext(StoreCtx);
    const {userData} = state;
    let mocksLeads = pastLeads;
    if(typeof customLeadsData === 'string'){
        try{
            const customLeadsDataJson = JSON.parse(customLeadsData);
            if(customLeadsDataJson && Array.isArray(customLeadsDataJson))
                mocksLeads = customLeadsDataJson;
        }catch(e){
            console.error("leads property => \n"+customLeadsData+"\n => is not a json object : ",e);
        }
    };


    const currentLead = [];
    if(userData && userData.profileProperties?.sfdc__leadID){
        const {profileProperties : user} = userData;
        const leadID = user?.sfdc__leadID || "-";
        const leadSource = user?.sfdc__leadSource || "-";
        const leadStatus = user?.sfdc__leadStatus || "-";
        //sfdc__leadQuality,
        const assignedToEmail = user?.sfdc__assignedToEmail || "-";
        const assignedToPhone = user?.sfdc__assignedToPhone || "-";
        const leadAssignedTo = user?.sfdc__leadAssignedTo || "Not yet assigned";
        //sfdc__leadComments,
        //sfdc__leadPreferences,
        currentLead.push(
            {
                id:leadID,
                src:leadSource,
                status:leadStatus,
                contact:{
                    fullname : leadAssignedTo,
                    email : assignedToEmail,
                    phone : assignedToPhone
                }
            }
        )
    }

    const leads=[...currentLead,...mocksLeads]
    return (
        <Card {...props}>
            <CardHeader title="My leads" />
            <PerfectScrollbar>
                <Box sx={{ minWidth: 500 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Lead ID
                                </TableCell>
                                <TableCell>
                                    Lead Source
                                </TableCell>
                                <TableCell sortDirection="desc">
                                    <Tooltip
                                        enterDelay={300}
                                        title="Sort"
                                    >
                                        <TableSortLabel
                                            active
                                            direction="desc"
                                        >
                                            Lead Status
                                        </TableSortLabel>
                                    </Tooltip>
                                </TableCell>
                                <TableCell>
                                    Your contact
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leads.map((lead) => (
                                <TableRow
                                    hover
                                    key={lead.id}
                                >
                                    <TableCell>
                                        {lead.id}
                                    </TableCell>
                                    <TableCell>
                                        {lead.src}
                                    </TableCell>
                                    <TableCell>
                                        <SeverityPill
                                            color={(lead.status === 'Closed' && 'success')
                                            || (lead.status === 'Contacted' && 'warning')
                                            || 'error'}
                                        >
                                            {lead.status}
                                        </SeverityPill>
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="textPrimary"
                                            gutterBottom
                                            variant="h6"
                                        >
                                            {lead.contact.fullname}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            variant="body2"
                                        >
                                            email: {lead.contact.email}
                                        </Typography>
                                        <Typography
                                            color="textSecondary"
                                            variant="body2"
                                        >
                                            phone: {lead.contact.phone}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </PerfectScrollbar>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    p: 2
                }}
            >
                <Button
                    color="primary"
                    endIcon={<ArrowRightIcon fontSize="small" />}
                    size="small"
                    variant="text"
                >
                    View all
                </Button>
            </Box>
        </Card>
    )
}
