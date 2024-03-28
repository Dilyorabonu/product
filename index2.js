let a = prompt('ismingizni yozing')
let b = prompt('summangizni kiriting')
let yolkira = 500
let mexmonxona = 250
let muzey = 120
let dollar = 11000.34
let yevro = 12354.03
let javob = (yolkira * dollar) + (mexmonxona * dollar) + (muzey * yevro)
if (b >= javob){
    alert('Oq yol,' + a)
}
else {
    alert(a + 'Ozgina sabr qilishingiz kerak')
}