import React from 'react'
import TotEvents from './totevents'
import styled from 'styled-components'
import TotProject from './TotProject'
import MyCYSCOM from './MyCYSCOM'
import Contribution from './Contribution'
import Workhours from './Workhours'
import Sparkspace from './Sparkspace'


const Container=styled.div`
display:grid;
gap:10px;
`

const Dashboard = () => {
  return (
    <Container>
    <Contribution/>
    <Workhours/>
    <MyCYSCOM/>
    <TotProject/>
    <TotEvents/>
    <Sparkspace/>
    </Container>
  )
}

export default Dashboard
