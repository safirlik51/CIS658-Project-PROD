let image = document.getElementById('icon');
image.style.display = "none";

let sendRequest = function(tNumber) {
    console.log(tNumber);
    const toSend = {
        "UPSSecurity": {
            "UsernameToken": {
                "Username": "SpencerFirlik",
                //Removed for Security Purposes
                "Password": "*******"
            },
            "ServiceAccessToken": {
                //Removed for Security Purposes
                "AccessLicenseNumber": "*******"
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

    xhr.open("POST", "https://packertracker.herokuapp.com/rest/Track", true);
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
                if (parsed.TrackResponse.Shipment.Package.Activity[0]){
                    let status = parsed.TrackResponse.Shipment.Package.Activity[0].Status.Description;
                    let city = parsed.TrackResponse.Shipment.Package.Activity[0].ActivityLocation.Address.City;
                    let state = parsed.TrackResponse.Shipment.Package.Activity[0].ActivityLocation.Address.StateProvinceCode;
                    let location = city + "," + state; 
                    updateStatus(status,location);
                } 
                else{
                    let status = parsed.TrackResponse.Shipment.Package.Activity.Status.Description;
                    let location = "Not Available"; 
                    updateStatus(status,location);
                }
            }
            else {
                let error = "No Information Available!";
                let location = "Unknown";
                updateStatus(error,location);
            }
        }
    }
}

let updateStatus = function(package_status,location){
    let icon = document.getElementById('icon');
    let index_status = document.getElementById('package-status');
    let index_location = document.getElementById('package-location');
    console.log(package_status);
    if (package_status == 'Delivered'){
        icon.style.display = "block";
        icon.src = "https://vistatec.com/wp-content/uploads/2019/08/Excellence-Tick-Icon.jpg";
        index_status.innerText = package_status; 
        index_location.innerText = location;
    }
    else if (package_status == 'In Transit'){
        icon.style.display = "block";
        icon.src = "https://openclipart.org/image/400px/svg_to_png/29833/warning.png";
        index_status.innerText = package_status; 
        index_location.innerText = location;
    }
    else {
        icon.style.display = "block";
        icon.src = "https://openclipart.org/image/400px/svg_to_png/29833/warning.png";
        index_status.innerText = package_status;
        index_location.innerText = location;
    }
}
let track = document.getElementsByClassName('btn btn-sm btn-outline-dark');
let tNumber = "";
for(let i=0; i<track.length; i++){
    track[i].addEventListener('click', function(){
           let parent = track[i].closest('.card-body');
           tNumber = parent.getElementsByClassName('card-text')[0].innerText;
           console.log(tNumber);
           sendRequest(tNumber);  
    });
} 

  
   
