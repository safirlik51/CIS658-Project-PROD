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
        "InquiryNumber": "1Z12345E0291980793"
    }
};

const jsonString = JSON.stringify(toSend);
console.log(jsonString);
const xhr = new XMLHttpRequest();

xhr.open("POST", "https://wwwcie.ups.com/rest/Track", true);
xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept");
xhr.setRequestHeader("Access-Control-Allow-Methods", "POST");
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.send(jsonString);
}

let test = document.getElementById('trackButton');
test.addEventListener('click', sendRequest);