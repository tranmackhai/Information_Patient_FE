import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CreateUser from "./CreateUser";

const UserDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <section className="user-detail">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Box
          sx={{
            margin: "64px 0",
            background: "#fff",
            textAlign: "center",
            width: "100%",
            maxWidth: "600px",
            padding: 10,
            borderRadius: "4px",
            outline: "none",
            boxShadow: "rgba(0, 0, 0, 0.32) -3.67394e-16px 2px 8px 0px",
          }}
        >
          {<CreateUser />}
          <button
            style={{
              width: "100%",
              padding: "12px 0",
              marginTop: "12px",
              borderRadius: "4px",
              outline: "none",
              cursor: "pointer",
              backgroundColor: "#767C75",
              color: "#fff",
              fontWeight: "600",
              border: "none",
              textTransform: "uppercase",
            }}
            onClick={() => {
              handleBack();
            }}
          >
            Quay lại
          </button>
        </Box>
      </Box>
    </section>
  );
};

export default UserDetail;
