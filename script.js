var check;
var mang = [];
var soNguyenTo;
function nhapMang () {
    for (let i = 0; i < 4; i++) {
        soNguyenTo = Number(prompt("Moi ban nhap vao so: "));
        mang.push(soNguyenTo)   
    }
    return mang;
}

nhapMang();
for (let j = 3; j >= 0; j--) {
    let count = 0;
    if (mang[j] < 2) {
        mang.pop();
    } else {
        for (let i = 2; i < mang[j]; i++) {
            if (mang[j] % i == 0) {
                count ++;
            }
        }
        console.log(count)
        if (count >= 1) {
            mang.pop();
        }
       count = 0; 
    }
}
alert(mang)