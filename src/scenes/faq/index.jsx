/* eslint-disable no-unused-vars */
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { tokens } from "../../theme";
import { GridExpandMoreIcon } from "@mui/x-data-grid";

const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<GridExpandMoreIcon />}>
                    <Typography colors={colors.greenAccent[500]} variant="h5">
                        An Important Questions
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<GridExpandMoreIcon />}>

                </AccordionSummary>
            </Accordion>
        </Box>
    );
}