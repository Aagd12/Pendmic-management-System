import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Main/Home";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Covid from "./components/Main/Covid";
import EmailVerify from "./components/EmailVerify"
import  Contact  from "./components/Main/Contact";
import  Testing  from "./components/Main/Testing";
import  Vaccination  from "./components/Main/Vaccination";
import Vaccinationstatus from "./components/Login/ShowVaccination"
import Showdata from "./components/Login/Showdata";
import Admin from "./components/admin/Admin";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user &&
			    <>
				<Route path="/" exact element={<Home/>} />
				<Route path="/covid" exact element={<Covid />} />
				<Route path="/contact" exact element={<Contact />} />
				<Route path="/testing" exact element={<Testing />} />
				<Route path="/vaccination" exact element={<Vaccination />} />
				<Route path="/vaccinationstatus" exact element={<Vaccinationstatus />} />
				<Route path="/showdata" exact element={<Showdata />} />

				</>
				

			}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/modifydata" exact element={<Admin />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/covid" element={<Navigate replace to="/login" />} />
			<Route path="/contact" element={<Navigate replace to="/login" />} />
			<Route path="/vaccination" element={<Navigate replace to="/login" />} />
			<Route path="/vaccinationstatus" element={<Navigate replace to="/login" />} />
			<Route path="/showdata" element={<Navigate replace to="/login" />} />
			<Route path="/testing" element={<Navigate replace to="/login" />} />
			<Route path="/users/:id/verify/:token" element={<EmailVerify />} />
		</Routes>
	);
}

export default App;
