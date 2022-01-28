 //////////////////////////////////日時の取得用スクリプト//////////////////////////////////
 function nowDate() {
    const now = new Date();
    const year = now.getFullYear();
    var month = now.getMonth() + 1;  //月は必ず +１をする（0から1月が始まる）
    var date = now.getDate();

    //二桁にする
    month = ('0' + month).slice(-2);
    date = ('0' + date).slice(-2);

    return (year + "." + month + "." + date);
}