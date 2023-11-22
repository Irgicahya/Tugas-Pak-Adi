var belanja = parseInt(prompt("Masukan Total Belanja"));
document.writeln(`Anda Belanja = ${belanja}`)
document.writeln("\n")

if (belanja < 100000){
  document.writeln("Anda Tidak Mendapat Diskon")
}
else if(belanja >=  100000 && belanja <= 200000){
  let diskon = belanja *  10 / 100 ;
  document.writeln(`anda mendapat diskon 10% total menjadi ${belanja - diskon} `);
}else if(belanja >= 200000){
  let diskon = belanja * 25 / 100;
  document.writeln(`Anda mendapat diskon 25% dan total menjadi ${belanja - diskon}`);
}
// }else if(belanja < 100000){
//   ("tidak dapat diskon")
// }
// if(belanja < 100000){
//   alert("tidak dapat diskon")
// }else if (belanja >= 100000 && belanja <= 200000){
//   // diskon = 0.1;
//   alert("Anda Mendapat Diskon Sebesar 10%");
// }else if(belanja > 200000){
//   // diskon = 2.5;
//   alert("Anda Mendapat Diskon Sebesar 25%");
// }
