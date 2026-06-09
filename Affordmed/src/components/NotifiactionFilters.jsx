import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function Filters({
  type,
  setType,
}) {
  return (
    <FormControl fullWidth>
      <InputLabel>
        Notification Type
      </InputLabel>

      <Select
        value={type}
        onChange={(e) =>
          setType(e.target.value)
        }
      >
        <MenuItem value="">
          All
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>
      </Select>
    </FormControl>
  );
}