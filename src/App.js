import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect,useState} from 'react';
import Dashborad from './Composont/admin'
import  Navbare from './Composont/navbar'
import Boddy from './Composont/body'
import Nav1 from './Composont/nav';
import Section from './Composont/section';
import Propos from './Composont/propos';
import Section1 from './Composont/section2';
import Footer from './Composont/footer';
import Cards from './Composont/Card';
function App() {
  
  return(

    <div>

<Nav1 />
<Dashborad />
{/* <Navbare />
<Boddy />
<Section />
<Propos />
<Section1 />
<Footer />
<Cards /> */}
    </div>
  )
}

export default App;
