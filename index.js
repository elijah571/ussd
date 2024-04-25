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
    const phoneNumber = Number(inputElement.value);
    
    // Validate if phoneNumber is a number and has 11 digits
    if (!isNaN(phoneNumber) && phoneNumber.toString().length === 11) {
        let networkSelected = false; // Flag to track if a network has been selected
        const simNetWork = prompt("Enter Sim Network");
        
        // Check if simNetWork prompt is not cancelled
        if (simNetWork) {
            const simNetworkLowerCase = simNetWork.toLowerCase();
            if (simNetworkLowerCase === 'mtn') {
                if (data && data[0] && data[0].Mtn) {
                    data[0].Mtn.forEach((mtn) => {
                        appendToList(mtn, "mtn-ul", "images/mtn.png");
                    });
                }
                networkSelected = true;
            } else if (simNetworkLowerCase === 'glo') {
                if (data && data[1] && data[1].Glo) {
                    data[1].Glo.forEach((glo) => {
                        appendToList(glo, "glo-ul", "images/glo.png");
                    });
                }
                networkSelected = true;
            } else if (simNetworkLowerCase === 'airtel') {
                if (data && data[2] && data[2].Airtel) {
                    data[2].Airtel.forEach((airtel) => {
                        appendToList(airtel, "airtel-ul", "images/airtel.png");
                    });
                }
                networkSelected = true;
            } else if (simNetworkLowerCase === '9mobile') {
                if (data && data[3] && data[3].Etisalat) {
                    data[3].Etisalat.forEach((etisalat) => {
                        appendToList(etisalat, "etisalat-ul", "images/mobile.png");
                    });
                }
                networkSelected = true;
            } else {
                alert("Invalid SIM Network entered.");
            }
        }

        // If a network has been selected, disable the button
        if (networkSelected) {
            button.disabled = true;
        }
    } else {
        alert("Enter a correct 11-digit phone number.");
    }
});

function appendToList(item, className, imagePath) {
    let html = `
        <ul class="${className}">
            <li>${item}<img src="${imagePath}" alt=""></li> 
        </ul>
    `;
    div.innerHTML += html; // Assuming 'div' is defined somewhere in your code
}
