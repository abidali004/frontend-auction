import { useState, useRef, useEffect } from 'react'
import { styled } from 'styled-components';
import { useNavigate } from "react-router-dom";
import Routers from './routes/Routers'

const Div = styled.div`
background-color:#faf9f9;
`;

function App() {

  return (
    <>
      <Div className=" pb-2">
        <Routers />
      </Div>
    </>
  )
}

export default App

