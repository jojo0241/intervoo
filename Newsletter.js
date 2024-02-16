import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Container } from 'react-bootstrap';


function Newsletter() {
  return (
    <>
<br /><br />

<div style={{height : '200px', width :'100%', backgroundColor : '#f6f9ff'}}> <br /><br />

<p style={{color : '#16697a', fontFamily : 'Montserrat', fontWeight : 'bold', fontSize :'25px'}}>Nos Newsletters</p><br />



<center>
<InputGroup className="mb-3" style={{height : '50px', width : '40%'}}>
        
        <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1" 
        />
        <Button variant="outline-secondary" id="button-addon1" style={{backgroundColor : '#fea62b', color: 'white' , borderRadius : '5px', width:'20%'}}>
          Souscrire
        </Button>
      </InputGroup>


</center>


</div><br /> <br />


    </>
    
    
   



   

    
  );
}

export default Newsletter;