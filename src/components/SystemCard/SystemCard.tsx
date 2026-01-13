import type { System } from "../../types/types";
import {
  Typography,
  Card,
  CardContent,
  Box,
  Chip,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface SystemCardProps {
  system: System;
}

export const SystemCard = (props: SystemCardProps) => {
  const { system } = props;

  const uniqueDataCategories = [
    ...new Set(system.privacy_declarations.flatMap((d) => d.data_categories)),
  ].map((category) => category.split(".").pop());

  return (
    <Card
      sx={{
        borderRadius: 3,
        boxShadow: 2,
        maxWidth: "32%",
      }}
    >
      <CardContent>
        <Accordion sx={{ borderRadius: 3, marginBottom: "15px" }}>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography sx={{ fontWeight: "bold" }} component="div">
              {system.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{system.description}</Typography>
          </AccordionDetails>
        </Accordion>

        <Box
          sx={{
            display: "flex",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          {uniqueDataCategories.map((category) => (
            <Chip label={category} variant="outlined" />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
