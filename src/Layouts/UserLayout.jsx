import { NavLink, Outlet } from "react-router-dom";

const UserLayout = () => {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            {/* Sidebar */}
            <aside
                style={{
                    width: "250px",
                    backgroundColor: "#f8f9fa",
                    borderRight: "1px solid #ddd",
                    padding: "1rem",
                    boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
                }}
            >
                <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                    <li style={{ marginBottom: "1rem" }}>
                        <NavLink
                            to="/user/login"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            style={({ isActive }) => ({
                                display: "block",
                                padding: "10px 15px",
                                color: isActive ? "#fff" : "#007bff",
                                backgroundColor: isActive ? "#007bff" : "transparent",
                                borderRadius: "4px",
                                textDecoration: "none",
                            })}
                        >
                            Login
                        </NavLink>
                    </li>
                    <li style={{ marginBottom: "1rem" }}>
                        <NavLink
                            to="/user/register"
                            className={({ isActive }) =>
                                `nav-link ${isActive ? "active" : ""}`
                            }
                            style={({ isActive }) => ({
                                display: "block",
                                padding: "10px 15px",
                                color: isActive ? "#fff" : "#007bff",
                                backgroundColor: isActive ? "#007bff" : "transparent",
                                borderRadius: "4px",
                                textDecoration: "none",
                            })}
                        >
                            Register
                        </NavLink>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: "1rem", backgroundColor: "#fefefe" }}>
                <Outlet />
            </main>
        </div>
    );
};

export default UserLayout;
