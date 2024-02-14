//Javascript method to generate numeric OTP
function generateOTP(){
    let otp = "";
    let digits = "1234567890";
    for(let i=0; i<4; i++){
        otp += digits[Math.floor(Math.random() *10)];
    }
    return otp;
}

console.log(generateOTP());