
import './App.css';
import TopBar from "./Components/Topbar"
import Homepage from './Container/Homepage';
import Footer from './Components/Footer';
import TeamDetail from './Container/TeamDetail';
import axios from 'axios';  
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import React from 'react';
class App extends React.Component {
//   state = {
//         cardGrid: [],
//     }
//  componentDidMount() {
 
  
//       axios.get("https://5ee248988b27f30016094878.mockapi.io/CourseCard")
//         .then(response => {
//             window.localStorage.setItem("myData", JSON.stringify(response.data[0]["CourseData"]))
       
//         })
//         .catch(err => {
//           console.log(err)
//         })
    
//   }
  render(){
  return (

      <div>   
      <BrowserRouter>  
          <TopBar/>
         <Switch>
               <Route exact path = "/" component ={Homepage} />
               <Route exact path = "/TeamDetail" component ={TeamDetail} />
                </Switch>
            <Footer/>
         </BrowserRouter> 
      </div>
    
  );
  }
}

export default App;
