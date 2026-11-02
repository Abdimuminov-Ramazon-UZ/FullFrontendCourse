// alert(6);
//regular expressions bu stringlar va numberlarni binary ko'rinishida ishlatish usllari hisoblanadi
// let str = "We we like go every shopping";
// let number = 5;
//match() metodidian keyin esa turli xil flaglardan foydalanish mumkinn agar gi qo'yilsa unda match katta va kichik harflarhga e'tibor qilmaydi agar bunday element mavjud bo'lmasa null qaytaradui
// alert(str.match(/we/i));
// alert(str.replace(/we/i, "Max"));
// Doimiy ifoda naqsh va ixtiyoriy bayroqlardan iborat: g, i, m, u, s, y.
// Bayroqlar va maxsus belgilarsiz (keyinroq o’rganamiz), regexp bo’yicha qidiruv pastki satr qidiruvi bilan bir xil.
// str.match(regexp) metodi mosliklarni qidiradi: g bayrog’i bo’lsa barchasini, aks holda faqat birinchisini.
// str.replace(regexp, replacement) metodi regexp yordamida topilgan mosliklarni replacement bilan almashtiradi: g bayrog’i bo’lsa barchasini, aks holda faqat birinchisini.
// regexp.test(str) metodi kamida bitta moslik bo’lsa true, aks holda false qaytaradi.
// let regexp = /like/gi;
// alert(regexp.test(str));
//2-qism
//class of signs
//\d - digit
// s - spaceni qidir
// \w ingiz tiliga oid bo'lmagan belgi masalan krillcha yoki digit ya'ni alifboga tegishli bo'lmasa bo'ldi
//\D \S \W larni ularga teskari deb qarsh mumkin
// g hamasini qidir degani shu sinfga oid
// let number = "+79081055 644";
// let regexp = /\d/g;
// let regexp = /\s/g;
// let regexp = /\w/;
// alert(number.match(regexp));
// alert("I love HTML5!".match(/\s\w\w\w\w\d/)); // ' HTML5'
//3-qism
//\p pattern esa bizga unicode yoki utf-8 dagi 4 baytlik elementlarbilan ishlash imkoniyatlarini beradi bunda biz \p{Lc} deb alfavitdagi harflarni so'raymiz
//u flagi esa unicodedan qidir degan so'rovni beradi
// let regexp = /\p{Sc}\d/gu;

// let str = `Prices: $2, €1, ¥9`;

// alert(str.match(regexp)); // $2,€1,¥9
//4-qism
//Langarlar va karetlar
//agar biz string ko'rinishodagi ma'lumotni boshi qanday boshlangan va oxiri qanday tugaganini bilmoqchi bo'lsak boshi uchun ^ (karet) belgisidan oxiri uchun $ (langar) belgisidan foydalanamz
// alert(/^Price/.test(str));
//5-qism
//ko'p qatorli langarlar
// let str = `1st place: Winnie
// 2nd place: Piglet
// 3rd place: Eeyore`;

// alert( str.match(/^\d/gm) );//karet
// alert(str.match(/\d$/gm)); // 1,2,3
// langar va karet waylari formulasidan foydalanib /n ya'ni empty spaceni qidirsak unda regexp dvigateli yoki boshini yoki oxirini chala o'qydi
// alert( str.match(/\d\n/gm) ); // 1\n,2\n
//6-qism
//\b patterni esa ma'lum text ichidan ajratilgan so'zni ko'rsatib beradi
//\w faqat lotin aifbosi uchun ishltiladi
// alert("Salom, Java!".match(/\bJava\b/)); // Java
//7-qism
//monitoring
//odatda qidiruvlar \ belgisi bilan amalga oshiriladi  uni yanad kuchliroq qilish uchun boshqa belgilardan foydalanadi
// alert("function g()".match(/g\(\)/)); // "g()"
//Maxsus belgilar [ \ ^ $ . | ? * + ( ) ni tom ma’noda qidirish uchun ularning oldiga teskari chiziq \ qo’yishimiz kerak (“ularni ekranlash”).
// Agar biz /.../ ichida bo’lsak, / ni ham ekranlashimiz kerak (lekin new RegExp ichida emas).
// new RegExp ga satr uzatishda biz teskari chiziqlarni ikki marta \\ yozishimiz kerak, chunki satr qo’shtirnoqlari ulardan birini iste’mol qiladi.
// 8-qism
//to'plamlar va diapazonlar
//biz ma'lumo oraliqlar berib ham elementlarni izlashimiz mumkin bunda [] orasidan foydalanamiz agar a-A gacha element;ar bo'lsa diapazon 0-9 kabi coomon digit bo'lsa unda to'plam bo'ladi
// alert("Voila".match(/V[oi]la/)); // null, moslik yo'q
// alert("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g)); // xAF
//9-qism
//miqdor beruvchilar
//miqdor beruvchilar xuddi diapazon singari alohida patternlar ichidagi miqdorlarni belgilaydi bunda \d{3-5} deb izlatishimiz mumkin
// alert("0 1 12.345 7890".match(/\d+\.\d+/g)); // 12.345
//</w+> kabi izlatishlar HTML teglarini qidiradi u <[a-z][a-z0-9]*> ifoda bilan bir xil
//10-qism
//miqdorchi deylgan izlash usuli butun butun satrlarni qidiradi va topadi shu tariqa uni ikki xil usulda yozish mumkin g'ijjalab izlash yoki dangasa lazy modda
// let str1 = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
// let str2 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
// let regexp = /<a href="[^"]*" class="doc">/g;

// // Ishlaydi!
// alert( str1.match(regexp) ); // null, moslik yo'q, bu to'g'ri
// alert( str2.match(regexp) ); // <a href="link1" class="doc">, <a href="link2"
// Miqdorchilarning ikkita ish rejimi bor:

// Ochko’z
// Sukut bo’yicha doimiy ifoda dvigateli miqdorli belgini imkon qadar ko’p marta takrorlashga harakat qiladi. Masalan, \d+ barcha mumkin bo’lgan raqamlarni iste’mol qiladi. Ko’proq iste’mol qilish imkonsiz bo’lganda (boshqa raqamlar yo’q yoki satr oxiri), u naqshning qolgan qismiga mos kelishni davom ettiradi. Agar moslik bo’lmasa, u takrorlanish sonini kamaytiradi (orqaga qaytadi) va yana harakat qiladi.
// Dangasa
// Miqdorchidan keyin savol belgisi ? bilan yoqiladi. Regexp dvigateli miqdorli belgining har bir takrorlanishidan oldin naqshning qolgan qismiga mos kelishga harakat qiladi.
// Ko’rganimizdek, dangasa rejim ochko’z qidiruvdan “davo” emas. Muqobil – istisno bilan “nozik sozlangan” ochko’z qidiruv, "[^"]+" naqshidagidek.
//11-qism
//qavslar
// Qavslar doimiy ifodaning bir qismini birlashtirib guruhlaydi, shunda miqdorchi unga butunlay qo’llaniladi.

// Qavslar guruhlari chapdan o’ngga raqamlanadi va ixtiyoriy ravishda (?<name>...) bilan nomlanishi mumkin.

// Guruh tomonidan moslashtirilgan mazmunni natijalarda olish mumkin:

// str.match metodi faqat g bayrog’isiz ushlash guruhlarini qaytaradi.
// str.matchAll metodi har doim ushlash guruhlarini qaytaradi.
// Agar qavslarning nomi bo’lmasa, ularning mazmuni moslik massivida raqami bo’yicha mavjud. Nomlangan qavslar groups xususiyatida ham mavjud.

// Shuningdek, str.replace da almashtirish satrida qavslar mazmunidan foydalanishimiz mumkin: raqam $n yoki nom $<name> bo’yicha.

// {/* Guruhni boshiga ?: qo’shish orqali raqamlashdan chiqarib tashlash mumkin. Bu butun guruhga miqdorchi qo’llashimiz kerak bo’lganda, lekin uni natijalar massivida alohida element sifatida istamaganimizda ishlatiladi. Shuningdek, bunday qavslarni almashtirish satrida ham ishlatib bo’lmaydi. */}
// let str = "Gogogo John!";

// // ?: 'go' ni ushlashdan chiqarib tashlaydi
// let regexp = /(?:go)+ (\w+)/i;

// let result = str.match(regexp);

// alert( result[0] ); // Gogogo John (to'liq moslik)
// alert( result[1] ); // John
// alert( result.length ); // 2 (massivda boshqa elementlar yo'q)
// 12-qism
//havolali qiidirish
// let str = `He said: "She's the one!".`;

// let regexp = /(?<quote>['"])(.*?)\k<quote>/g;

// alert( str.match(regexp) ); // "She's the one!"
//13-qism
//Alternatsiya | operatori
//pastdagi kodda kelritilgan | operatori yoki  OR operatorini bajaradi va [0-5] ifodasi o va 5 o'rtasidagi digitni yoki elementni qidir degan ma'noni beradi bunda kod quyidagicha ishlaydi => / qidir => ( [01] 0 bo'lmasa 1 ni tanla \d digit bo'lsin yoki 2[0-3] 2 yonida [0-3] noldan 3 gacha biror raqam bo'lsin ) qavs orqali mana bu elementlarni birlashtir /g esa hammasi shu tariqa u soatni ya'ni vaqtni chiqarib beradi
// let regexp = /([01]\d|2[0-3]):[0-5]\d/g;

// alert("00:00 10:10 23:59 25:99 1:2".match(regexp)); // 00:00,10:10,23:59
//14-qism
//oldinga va orqaga qarash
//agar 1 dollar for 100p degan frzadan p ga yopsuihgan digitni qidir deb izlatsak unda machine 1 ni ko'rmaydi faqat 100p ni ko'radi va bu oldinga qarash deyiladi
let str = "1 turkey costs 30€";

alert(str.match(/\d+(?=€)/)); // 30, 1 raqami e'tiborga olinmaydi, chunki u € bilan kuzatib borilmaydi
let str1 = "1 turkey costs $30";
//mana bu esa orqaga qarash d-di
// dollar belgisi ekranlangan \$
alert(str1.match(/(?<=\$)\d+/)); // 30 (yagona raqam o'tkazib yuborildi)
//15-qism
//2darajasi n -1 holatda Regexp osilib qolishimumkin bunday holatda imkon boricha soddalashtirib tashlash kerak bunda directionni bir tomonga yo'naltirish kerak aks holda CPU kodni otib yuboradi
//16-qism
//str.exec() kabi aslida modernizatsiya qilingan obekt qaytaradigan metodlarda y patterni metod empty indexlardan metod o'tib ketishini ta'minlaydi
let str2 = 'let varName = "value"';

let regexp = /\w+/y;

regexp.lastIndex = 3;
alert( regexp.exec(str2) ); // null (3 pozitsiyasida bo'sh joy bor, so'z emas)

regexp.lastIndex = 4;
alert( regexp.exec(str2) ); // varName (4 pozitsiyasida so'z)
//17-qism
//regexp va string metodlari
//str.match(regexp) str.matchAll(regexp) berilgan regexp kodidagi mosliklarni qidiradi
//str.search(/siyoh/i) positziysa qaytaradigan metod 
//str.replace() va str.replaceAll() berilgan elementni almashtirish uchun qo'llaniladigan metodlar
//regexp.exec() u mathcga o'xshaydi farqi str.match deb chaqirib keyin regexp bersak exec() regexpga str ni chaqiradi
//str.test() true yoki false qaytaradi u kodlarni osilib qolishdan saqlaydi mathcga o'xhshash