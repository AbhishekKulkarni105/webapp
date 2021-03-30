import React from "react";
import classes from './TeamDetail.module.css'

class TeamDetail extends React.Component {

     render() {
       
        return (
            <div className = {classes.Container}>
            <h3 className = {classes.mainHead}>Practice Arena</h3>
            <h5 className = {classes.skills}>All Skills</h5>
         
        </div>
        )
     }     
}

export default TeamDetail; 