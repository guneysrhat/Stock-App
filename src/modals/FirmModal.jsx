import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { flexCenter, modalStyle } from "../styles/globalStyle";
import { Button, TextField } from "@mui/material";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const handleSumbit = (e) => {
    e.preventDefault();
    
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box sx={flexCenter} componenet="form" onSubmit={handleSumbit}>
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info?.name || ""}
              onChange={handleChange}
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info?.phone || ""}
              onChange={handleChange}
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info?.address || ""}
              onChange={handleChange}
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info?.image || ""}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              {" "}
              Sumbit Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}