const data = [{
        Mtn: ['100MB', '200MB','500MB', '1000MB']
        },
        {
            Glo: ['100MB', '200MB','500MB', '1000MB']
        },
        {
            Airtel: ['100MB', '200MB','500MB', '1000MB']
        },
        {
            Etisalat: ['100MB', '200MB','500MB', '1000MB']
        }
];


const div = document.querySelector('.div');
const button = document.querySelector('.send-btn');
   

button.addEventListener("click", () => {
  
    const inputElement = document.querySelector(".input-js");
     const code = Number(inputElement.value);    
    if (code) {
        const simNetWork = prompt("Enter Sim Network");
       
       if(simNetWork === 'mtn'){
        data[0].Mtn.forEach((mtn) => {
            console.log([mtn][0][2]);
            let html = `
                
                <ul class ="mtn-ul">
                <li>${mtn}<img src="images/mtn.png" alt=""></li> 
                </ul>

            `;
           
            div.innerHTML += html;
            
        }) 
       }else if (simNetWork === 'glo') {
         data[1].Glo.forEach((glo, index) => {

            let html = `
                
                <ul class="glo-ul">
                <li>${glo}<img src="images/glo.png" alt=""></li> 
                </ul>

            `;
            div.innerHTML += html;
        }); 

       } else if (simNetWork === 'airtel') {
        data[2].Airtel.forEach((airtel, index) => {

            let html = `
                
                <ul class="airtel-ul">
                <li>${airtel}    <img src="images/airtel.png" alt=""></li> 
                </ul>

            `;
            div.innerHTML += html;
        }); 
       } else if (simNetWork === '9mobile') {
        data[3].Etisalat.forEach((etisalat, index) => {

            let html = `
                
                <ul class="etisalat">
                <li>${etisalat} <img src="images/mobile.png" alt=""></li> 
                </ul>

            `;
            div.innerHTML += html;
        }); 
       }
      
    } 
    else{
        alert("Enter correct phone number");
    }
   
});


    
