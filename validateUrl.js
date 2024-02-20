function validateUrl(url){
    try {
        let validateUrl = new URL(url);
        console.log("sucess", validateUrl.origin)
    } catch (error) {
        console.log(error)
    }
}

validateUrl("hwww.facebo/");