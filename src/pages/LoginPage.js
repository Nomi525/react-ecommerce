import Login from "../features/auth/components/Login";
import NavBar from "../features/navbar/Navbar";

function LoginPage() {
  return (
    <> 
       <NavBar>
      <Login></Login>
      </NavBar>
    </>
  );
}

export default LoginPage;
