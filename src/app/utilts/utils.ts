const checkAuthStatus = async () => {
    try {
        await fetch("/api/auth/verify").then((verification)=>{
            console.log(verification);
            if(verification?.status === 200) {
            } else {

            }
        }).catch((e)=>{

            console.log(e);
        });

    } catch(e) {
 
        return false;
    }
}