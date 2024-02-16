import { Container } from "react-bootstrap";


function NosValeurs() {
  return (
    <>
<br /><br />
<Container style={{}} >

    <br />

<center><p

style={{color : '#fea62b', fontFamily : 'Montserrat', fontWeight : 'bold', fontSize :'13px'}}

>NOS VALEURS</p>

<p

style={{color : '#16697a', fontFamily : 'Montserrat', fontWeight : 'bold', fontSize :'35px'}}

>Intevoo, le créateur de portfolio numérique.</p><br />


</center>


</Container>
    
<Container style={{display :'flex',  flexWrap : 'wrap', justifyContent :'space-between'}} >

    

<div className="Hover" style={{height : '400px', width :'350px', backgroundColor : 'white', borderRadius : '2px'}}> 

<br /><br /><img src="3-01.png" alt="" height={160} width={245} className="image"/><br /><br />

<p style={{color : '#16697a', fontFamily : 'Montserrat', fontWeight : 'bold', fontSize :'25px'}}>Portfolio adapté</p>
<p style={{ fontFamily : 'Calibri', fontSize :'18px', marginLeft :'25px', marginRight :'25px'}}>
    
    Profitez de nos modèles prêts à l'emploi en fonction de votre profil et de votre goût.</p>

</div>



<div className="Hover" style={{height : '400px', width :'350px', backgroundColor : 'white', borderRadius : '2px'}}>
    
<br /><br /><img src="4-01.png" alt="" height={160} width={245} className="image"/><br /><br />

<p style={{color : '#16697a', fontFamily : 'Montserrat', fontWeight : 'bold', fontSize :'25px'}}>Couriel en Live</p>
<p style={{ fontFamily : 'Calibri', fontSize :'18px', marginLeft :'25px', marginRight :'25px'}}>
    
Les professionnels conquis par votre profil peuvent vous contacter directement via votre profil.</p>

 </div>


<div className="Hover" style={{height : '400px', width :'350px', backgroundColor : 'white', borderRadius : '2px'}}> 

<br /><br /><img src="5-01.png" alt="" height={160} width={245} className="image"/><br /><br />

<p style={{color : '#16697a', fontFamily : 'Montserrat', fontWeight : 'bold', fontSize :'25px' }}>En ligne 24/7</p>
<p style={{ fontFamily : 'Calibri', fontSize :'18px', marginLeft :'25px', marginRight :'25px'}}>
    
Disponible peu importe l’endroit où vous êtes et cela grâce à un lien ou un code QR personnalisés.</p>

</div>




   </Container><br /><br />



    </>
    
    
   



   

    
  );
}

export default NosValeurs;