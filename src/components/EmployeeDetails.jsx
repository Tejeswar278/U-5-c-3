import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const EmployeeDetails = () => {
    const [employ, setemploy] = useState({});

    useEffect(()=> {
        getemploy();
    }, []);

    const getemploy = async () => {
        const {data} =  await axios(`http://localhost:8080/employ/${id}`);
        setemploy(data);
    }

    const {id} = useParams();

    return (
      <div className="user_details">
        <img className="user_image" src={empoly.image}/>
        <h4 className="user_name">{empoly.username}</h4>
        <span className="user_salary">${empoly.salary}</span>
        <span className="tasks">
            {empoly?.tasks?.map((t, i) => (
                <li className="task" key={i}>
                    {t}
                </li>
            ))}
        </span>
        Status: <b className="status">{empoly.status}</b>
        Title: <b className="title">{empoly.title}</b>
        {/* Show this button only if user is not already terminated (users status is working) */}
        <button className="fire">Fire Employee</button>
        {/* Show this button only if user is not already team lead or terminated */}
        <button className="promote">promote</button>
      </div>
    );
  };