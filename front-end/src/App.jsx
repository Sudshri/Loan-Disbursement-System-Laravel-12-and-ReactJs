import { Routes, Route , Outlet , Navigate } from "react-router-dom"
import Login from "./components/auth/login"
import AdminLayout from "./components/layout/AdminLayout"
import Index from "./components/dashboard/Index"
import CreateAgent from "./components/agent/CreateAgent"
import "./App.css"; 
import AgentList from "./components/agent/AgentList"

function App() {
return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Index />}/>
        <Route path="agent/create" element={<CreateAgent/>}/>
        <Route path="agent/list" element={<AgentList/>}/>

      </Route>
     
    </Routes>
  )
}

export default App
