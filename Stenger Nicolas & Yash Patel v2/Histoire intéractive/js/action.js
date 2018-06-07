var btn = document.querySelector('.home-btn');
var snd = document.querySelector('.home-snd');
var img1 = document.querySelector('.home-image1');
var img2 = document.querySelector('.home-image2');
var img3 = document.querySelector('.home-image3');
var img4 = document.querySelector('.home-image4');
var img5 = document.querySelector('.home-image5');
var img6 = document.querySelector('.home-image6');
var one = document.querySelector('.home-answerone');
var two = document.querySelector('.home-answertwo');
var eau = document.querySelector('.home-fourthanswertwo');
var home = document.querySelector('.home');
var five = document.querySelector('.home-five');
var thai = document.querySelector('.home-sndanswertwo');
var glace = document.querySelector('.home-fourthanswerone');
var first = document.querySelector('.home-first');
var third = document.querySelector('.home-third');
var retry = document.querySelector('.home-retry');
var tacos = document.querySelector('.home-sndanswerthree');
var fourth = document.querySelector('.home-fourth');
var salade = document.querySelector('.home-sndanswerone');
var viandes = document.querySelector('.home-thirdanswerone');
var vanille = document.querySelector('.home-fiveanswerone');
var gameover = document.querySelector('.home-gameover');
var textOver = document.querySelector('.home-textOver');
var greentea = document.querySelector('.home-fiveanswertwo');
var gigatacos = document.querySelector('.home-thirdanswertwo');
var titleover = document.querySelector('.home-titleOver');
var homecontainer = document.querySelector('.home-container');
var slt= document.querySelector('.slt');

btn.addEventListener('click', function() {
  homecontainer.style.display = 'none';
  first.style.display = 'block';
});

one.addEventListener('click', function() {
  first.style.display = 'none';
  titleover.textContent = "GAME OVER";
  retry.style.backgroundColor = '#D0021B';
  titleover.style.color = '#D0021B';
  textOver.textContent = "Meurt de faim sale noob";
  gameover.style.display = 'block'
  slt.style.display = 'block';
  img6.style.display = "block";
  home.style.display = 'none';
});

two.addEventListener('click', function() {
  first.style.display = 'none';
  snd.style.display = 'block';
});

retry.addEventListener('click', function() {
  gameover.style.display = 'none';
  slt.style.display = 'none';
  homecontainer.style.display = 'block';
  home.style.display = 'block';
  img1.style.display = 'none';
  img2.style.display = 'none';
  img3.style.display = 'none';
  img4.style.display = 'none';
  img5.style.display = 'none';
  img6.style.display = 'none';
});

salade.addEventListener('click', function() {
  snd.style.display = 'none';
  gameover.style.display = 'block';
  slt.style.display = 'block';
  titleover.textContent = "GAME OVER";
  retry.style.backgroundColor = '#D0021B';
  titleover.style.color = '#D0021B';
  textOver.textContent = "Ouah t'es devenu un lapin vegan ?";
  img2.style.display = "block";
  home.style.display = 'none';
});

tacos.addEventListener('click', function() {
  snd.style.display = 'none';
  third.style.display = 'block';
});

gigatacos.addEventListener('click', function() {
  third.style.display = 'none';
  gameover.style.display = 'block';
  slt.style.display = 'block';
  titleover.textContent = "GAME OVER";
  titleover.style.color = '#D0021B';
  retry.style.backgroundColor = '#D0021B';
  textOver.textContent = "Notre héros fait une overdose et meurt";
  img3.style.display = "block";
  home.style.display = 'none';
});

viandes.addEventListener('click', function() {
  third.style.display = 'none';
  gameover.style.display = 'block';
  slt.style.display = 'block';
  titleover.textContent = "VICTOIRE";
  titleover.style.color = '#02D040';
  retry.style.backgroundColor = '#02D040';
  textOver.textContent = "Notre héros s'est bien rempli la panse";
  img1.style.display = "block";
  home.style.display = 'none';
});

thai.addEventListener('click', function() {
  snd.style.display = 'none';
  fourth.style.display = 'block';
});

eau.addEventListener('click', function() {
  fourth.style.display = 'none';
  gameover.style.display = 'block';
  slt.style.display = 'block';
  titleover.textContent = "GAME OVER";
  titleover.style.color = '#D0021B';
  retry.style.backgroundColor = '#D0021B';
  textOver.textContent = "ÇA CHANGE RIEN PUTAIN !!!";
  img4.style.display = "block";
  home.style.display = 'none';
});

glace.addEventListener('click', function() {
  fourth.style.display = 'none';
  five.style.display = 'block';
});

greentea.addEventListener('click', function() {
  five.style.display = 'none';
  gameover.style.display = 'block';
  slt.style.display = 'block';
  titleover.textContent = "GAME OVER";
  retry.style.backgroundColor = '#D0021B';
  titleover.style.color = '#D0021B';
  textOver.textContent = "La glace a apaisé les babines mais le goût le fait vomir";
  img5.style.display = "block";
  home.style.display = 'none';
});

vanille.addEventListener('click', function() {
  five.style.display = 'none';
  gameover.style.display = 'block';
  slt.style.display = 'block';
  titleover.textContent = "VICTOIRE";
  retry.style.backgroundColor = '#02D040';
  titleover.style.color = '#02D040';
  img1.style.display = "block";
  textOver.textContent = "La glace a apaisé les babines. Notre héros est heureux :)";
  home.style.display = 'none';
});
