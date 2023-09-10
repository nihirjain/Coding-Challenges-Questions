function blockscope(){
    console.log(a);//Error for execution before declaration
    console.log(b);//Undefined for execution before declaration
    console.log(c);//Error for execution before declaration
    let a = 2;
    var b = 3;
    const c = 4;
    console.log(a);//Result is Showing
    console.log(b);//Result is Showing
    console.log(c);//Result is Showing
}

blockscope()