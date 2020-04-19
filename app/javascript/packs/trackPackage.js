let getPackages = document.getElementsByClassName('card-text');

let sendRequest = function() {
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
            "InquiryNumber": "1Z967FF40295551399"
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
            let data = xhr.response;
            console.log(data);
        }
    }
}
let test = document.getElementById('trackButton');
test.addEventListener('click', sendRequest);