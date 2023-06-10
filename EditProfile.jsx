import React from 'react'
import Editbox from './Editbox'


const Container=styled.div`
display:grid;
gap:10px;
`

const EditProfile = () => {
  return (
    <Container>
       <Editbox/>
    </Container>
  )
}

export default EditProfile
