let image = document.getElementById('icon');
image.style.display = "none";

let sendRequest = function(tNumber) {
    console.log(tNumber);
    const toSend = {
        "UPSSecurity": {
            "UsernameToken": {
                "Username": "SpencerFirlik",
                "Password": "11S.Firlik21"
            },
            "ServiceAccessToken": {
                "AccessLicenseNumber": "FD7C9056A2CBDF5D"
            }
        },
        "TrackRequest": {
            "Request": {
                "RequestOption": "activity",
                "TransactionReference": {
                    "CustomerContext": "Your Test Case Summary Description"
                }
            },
            "InquiryNumber": tNumber
        }
    };

    const jsonString = JSON.stringify(toSend);
    console.log(jsonString);
    const xhr = new XMLHttpRequest();

    xhr.open("POST", "http://localhost:3000/rest/Track", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=utf-8");
    xhr.send(jsonString);

    xhr.onreadystatechange = () => {
        console.log("Detected a change to readyState: " + xhr.readyState);
        console.log(xhr)
        if (xhr.readyState == 4) {
            console.log("The data is ready");
            console.log("Data as received:");
            console.log(xhr.response);
            let data = JSON.parse(xhr.response);
            console.log(data);
            let parsed = JSON.parse(data.body);
            console.log(parsed);
            if (parsed.TrackResponse != null){
                let status = parsed.TrackResponse.Shipment.Package.Activity[0].Status.Description;
                updateStatus(status);
            }
            else{
                let error = parsed.Fault.faultcode
                updateStatus(error);
            }
        }
    }
}

let updateStatus = function(package_status){
    let icon = document.getElementById('icon');
    let index_status = document.getElementById('package-status');
    if (package_status == 'Delivered'){
        icon.style.display = "block";
        icon.src = "https://vistatec.com/wp-content/uploads/2019/08/Excellence-Tick-Icon.jpg";
        index_status.innerText = package_status; 
    }
    else {
        index_status.innerText = "No Information Available!";
        icon.style.display = "block";
        icon.src = "https://openclipart.org/image/400px/svg_to_png/29833/warning.png";
    }
}
let track = document.getElementsByClassName('btn btn-sm btn-outline-dark');
let getPackages = document.getElementsByClassName('card-text');
let tNumber = "";
for(let i=0; i<track.length; i++){
    track[i].addEventListener('click', function(){
        for (let j=0; j<getPackages.length; j++){
            console.log(i);
            console.log(j);
            if (i == j){
                console.log(tNumber = getPackages[j].innerText);
                tNumber = getPackages[j].innerText;
                console.log(tNumber);
            }
        } 
        sendRequest(tNumber);
    });
}


  
   
