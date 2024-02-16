import { Container } from "react-bootstrap";


function QuiSommesNous() {
  return (
    <>
<br /><br />
<Container style={{display :'flex',  flexWrap : 'wrap'}} >

    

<div style={{height : '500px', width :'530px', backgroundColor : '#f6f9ff'}}>

<br />
<Container >
    
<p style={{color : '#fea62b', fontFamily : 'Montserrat', marginLeft : '-61%', fontWeight :'bolder', fontSize : '13px' , marginTop : '2%' }} >QUI SOMMES NOUS ?</p>


</Container>


<Container style={{flexWrap : 'wrap', }}>
    
<p style={{
color : '#16697a', 
fontFamily : 'Montserrat', 
 fontWeight :'bolder', marginTop : '2%', textAlign : 'left', fontSize : '20px', marginLeft : '5%', marginRight : '5%' }} >

Intevoo est une startup de technologies de l'emploi innovante.
Chez Intevoo, Nous pensons que votre présence professionnelle en ligne est primordiale 
et le processus de création d'un portfolio numérique devrait être accessible, simple et rapide.

</p>

</Container>

<Container>

<p style={{

fontFamily : 'Calibri', 
 marginTop : '2%', textAlign : 'left', fontSize : '16px', marginLeft : '5%', marginRight : '5%' }}>
Pour cela, nous avons travaillé d'arrache-pied pour concevoir la meilleure plateforme ainsi que les 
meilleurs modèles de portefolio pour atteindre leurs objectifs. Notre mission première est alors simple; 
nous voulons aider les demandeurs d'emploi du monde entier
 à mieux présenter leur profil professionnel, en leur fournissant l’outil idéal et l’assistance qui y est rattachée.
    </p>
</Container>


</div> &nbsp;&nbsp;&nbsp;&nbsp;



<div style={{height : '360px', width :'360px', backgroundColor : 'white', display :'flex', marginTop : '5%'}}>

 <img src="7-01.png" alt="" style={{ }}/>

</div>




</Container>
    
    </>
    
    
   



   

    
  );
}

export default QuiSommesNous;