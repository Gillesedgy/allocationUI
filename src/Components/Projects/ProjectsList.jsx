import React, {useEffect, useState} from "react";
import axios from "axios";


const ProjectsList = ({searchName}) => {
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


   useEffect(() => {
    const fetchProject = async ()=> {
        if(searchName.trim()){
            setLoading(true);
            setError("");
            try {
                const resp = await axios.get(`http://localhost:8080/api/projects/getAllProjects/${searchName}`)
                if (resp.data.length > 0){
                    setProject(resp.data[0]);
                } else {
                    setProject(null);
                }
            } catch (err) {
                setError("Error fetching the project name");
            } finally {
                setLoading(false);
            }
        } else {
            setProject(null);
        }
    };
    fetchProject();    
   }, [searchName]);

   if (loading) return <p>Loading...</p>;

   return (
    <div className="p-4">
        {project && (
            <div>
                <h3>{project.name}</h3>
                <p>Client ID: {project.clientId}</p>
                <p>Description: {project.description}</p>
                <p>Start Date: {project.startDate}</p>
                <p>End Date: {project.endDate}</p>
            </div>
        )}

    </div>
   )



}


export default ProjectsList;