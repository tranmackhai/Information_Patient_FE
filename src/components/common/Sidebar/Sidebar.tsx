import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import categoryConfig from "../../../apis/modules/category.api";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <Box
        sx={{
          maxWidth: "280px",
          display: "flex",
          flexDirection: "column",
          minHeight: `calc{100vh - 110px}`,
        }}
      >
        {categoryConfig.category.map((data) => {
          return (
            <Box
              key={data.id}
              sx={{
                textAlign: "left",
                padding: "6px",
                width: "100%",
                a: {
                  display: "block",
                  textTransform: "capitalize",
                  position: "relative",
                  width: "100%",
                  padding: "8px 0",
                  color: "rgb(102 105 102 / 90%)",
                  fontWeight: "500",
                  borderRadius: "6px",
                },
                "a.active": {
                  color: "rgb(64, 224, 58)",
                  backgroundColor: "rgb(238,242,246)",
                },
                "a:hover": {
                  color: "rgb(64, 224, 58)",
                  backgroundColor: "rgb(238,242,246)",
                },
              }}
            >
              <NavLink
                to={data.path}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <i
                  className={data.icon}
                  style={{
                    marginRight: "6px",
                    paddingLeft: "18px",
                    fontSize: "0.7rem",
                    transform: `translateY(${-2}px)`,
                  }}
                ></i>
                {data.title}
              </NavLink>
            </Box>
          );
        })}
      </Box>
    </section>
  );
};

export default Sidebar;
