import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const EmployeeList = () => {

    const [employs, setEmploys] = useState([]);

    useEffect(() => {
        getEmploys();
    }, []);
    console.log(employs)

    const getEmploys = async () => {
        const { data } = await axios('http://localhost:8080/employee');
		setEmploys(data);
    }
    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        {employs.map(ele => (
            <Link key={ele.id} to={`./${ele.id}`}>
                <div className="employee_card">
                    <img 
                        className="employee_image" 
                        src={ele.image}
                        alt={ele.employee_name}
                    />
                    <span className="employee_name">{ele.employee_name}</span>
                    <span className="employee_title">{ele.title}</span>
                </div>
            </Link>
        ))}
      </div>
    );
  };