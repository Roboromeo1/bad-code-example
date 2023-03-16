import * as React from "react";
import { RadioGroup, Box, Radio } from "@mui/joy";
import PropTypes from "prop-types";

function FilterSegment({ onFilterChange, currentFilter }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <RadioGroup
        orientation="horizontal"
        name="filter"
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value)}
        sx={{
          minHeight: 48,
          padding: "4px",
          borderRadius: "md",
          bgcolor: "neutral.softBg",
          "--RadioGroup-gap": "4px",
          "--Radio-action-radius": "8px"
        }}
      >
        {["Completed", "In progress", "All"].map((item) => (
          <Radio
            key={item}
            value={item}
            label={item}
            disableIcon
            variant="plain"
            sx={{
              px: 2,
              alignItems: "center"
            }}
            slotProps={{
              action: ({ checked }) => ({
                sx: {
                  ...(checked && {
                    bgcolor: "background.surface",
                    boxShadow: "md",
                    "&:hover": {
                      bgcolor: "background.surface"
                    }
                  })
                }
              })
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
}

FilterSegment.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired
};

export default FilterSegment;
