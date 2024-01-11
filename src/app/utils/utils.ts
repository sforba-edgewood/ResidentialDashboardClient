const checkAuthStatus = async () => {
    try {
        await fetch("/api/auth/verify").then((verification)=>{

            if(verification?.status === 200) {
            } else {

            }
        }).catch((e)=>{

            console.error(e);
            throw e;
        });

    } catch(e) {
 
        return false;
    }
}