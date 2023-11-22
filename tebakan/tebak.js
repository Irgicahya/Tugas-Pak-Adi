var soal1 = prompt("1. 90 x 8 ")
var point = 0

if (soal1 == 720){
  point += 1
  alert(`Jawaban Anda Benar, Point Anda Sekarang ${point}`)
  var soal2 = prompt("2. Apa yang lahir di Arab, besar di Arab, tapi enggak bisa bicara bahasa Arab? ")
  if(soal2 == "unta"){
    point += 1 
    alert(`Jawaban Anda Benar, Point Anda Sekarang ${point}`)
    var soal3 = prompt("3. Kalau orang jadi monyet, monyet jadi apa? ")
    if(soal3 == "jadi banyak"){
      point += 1
      alert(`Jawaban Anda Benar, Point Anda Sekarang ${point}`)
    }
    else{
      point += 0
      alert(`Jawaban Anda Salah, Point Anda Sekarang ${point}`)
    }
  }
else{
  point += 0
  alert(`Jawaban Anda Salah, Point Anda Sekarang ${point}`)
  }
}
else{
  point += 0
  alert(`Jawaban Anda Salah, Point Anda Sekarang ${point}`)
}