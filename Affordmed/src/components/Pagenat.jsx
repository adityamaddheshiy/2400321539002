import { Box, Pagination } from "@mui/material";

function PaginationComponent({
  page,
  totalPages,
  onPageChange,
}) {
  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      mt={4}
      mb={2}
    >
      <Pagination
        count={totalPages}
        page={page}
        color="primary"
        onChange={handleChange}
        showFirstButton
        showLastButton
      />
    </Box>
  );
}

export default PaginationComponent;