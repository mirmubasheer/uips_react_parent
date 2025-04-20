  import React from "react";
  import { Pagination, Box } from "@mui/material";

  interface PaginationControlsProps {
    page: number;
    count: number;
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  }

  const PaginationControls: React.FC<PaginationControlsProps> = ({ page, count, onChange }) => {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={count}
          page={page}
          onChange={onChange}
          color="primary"
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
        />
      </Box>
    );
  };

  export default PaginationControls;
