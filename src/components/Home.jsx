import { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import '../App.css'

export const Home = () => {
    // create statistics for user.
    // get Total user count from DB,
    // other fields are in memory values stored in context API.
    // they will reset to 0
    // if page gets refreshed
  
    // thins to store in context api
    //   total: get from db,
    //   terminated: 0, // inc when user in terminated
    //   promoted: 0,// inc when user in promoted
    //   total_new: 0,// inc when a new user in created
  
    const [totalemploys , setemploy] = useState(0);
    const [totalterm , setemployterm] = useState(0);
    const [totalpromoted , setemploypro] = useState(0);
    const [totalnew , setemploynew] = useState(0);

    useEffect(() =>{
      fetachEmpTotal(); 
    },[]);

    const fetachEmpTotal = async () => {
      const {data} = await axios ("http://localhost:8080/employee");
      setemploy(data.length);
    }

    return (
      <>
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div className="list backg">
            Total Employees: <span className="totalemp">{totalemploys}</span>
          </div>
          <div className="list">
            Total Terminated: <span className="total_terminated">{totalterm}</span>
          </div>
          <div className="list backg">
            Total Promoted: <span className="total_promoted">{totalpromoted}</span>
          </div>
          <div className="list">
            Total New: <span className="total_new">{totalnew}</span>
          </div>
        </div>
      </>
    );
  };