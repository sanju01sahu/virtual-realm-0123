function passwordChecker(pass){
    if(pass.length<8){
        return false;
    }

    const aplhabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "1234567890";
    const special = "!@#$%^&*()_+,./{}[]\|;:";
    const flag1=false;
    const flag2=false;
    const flag3=false;

    for(let i=0;i<pass.length;i++){
        if(aplhabet.includes(pass[i])){
            flag1=true
        }
        if(number.includes(pass[i])){
            flag2=true
        }
        if(special.includes(pass[i])){
            flag3=true
        }
    }

    return flag1 && flag2 && flag3 ;

}

module.exports = passwordChecker;