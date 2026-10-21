const menuToggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.time-dot').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.time-dot').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
}));

document.querySelectorAll('.accordion-btn').forEach(btn=>btn.addEventListener('click',()=>{
  const panel=btn.nextElementSibling, open=panel.classList.contains('open');
  document.querySelectorAll('.accordion-panel').forEach(p=>p.classList.remove('open'));
  document.querySelectorAll('.accordion-btn span').forEach(s=>s.textContent='+');
  if(!open){panel.classList.add('open');btn.querySelector('span').textContent='−';}
}));

const people={
"Saint-Simon":"Saint-Simon es presentado en la actividad como uno de los precursores del pensamiento sociológico y como parte de los antecedentes de la disciplina.",
"Auguste Comte":"Auguste Comte es una figura clave del positivismo y uno de los exponentes fundamentales asociados con el desarrollo de la Sociología.",
"Herbert Spencer":"Herbert Spencer aparece entre los exponentes clave señalados para estudiar el desarrollo del pensamiento sociológico.",
"Émile Durkheim":"Émile Durkheim es uno de los principales exponentes de la Sociología y se relaciona con el análisis sistemático de los hechos y la organización social.",
"Karl Marx":"Karl Marx es uno de los pensadores clave del programa y está asociado con el Materialismo Histórico y el análisis de las clases sociales.",
"Max Weber":"Max Weber es uno de los exponentes fundamentales de la Sociología y se relaciona con el estudio comprensivo de la acción social."
};
const modal=document.getElementById('modal');
document.querySelectorAll('.person').forEach(card=>card.addEventListener('click',()=>{
 const name=card.dataset.modal;document.getElementById('modal-title').textContent=name;document.getElementById('modal-text').textContent=people[name];modal.classList.add('show');
}));
document.querySelector('.close').onclick=()=>modal.classList.remove('show');
modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('show')});

const questions=[
["¿Cuál es una diferencia fundamental entre conocimiento científico y sentido común?","El científico busca procedimientos sistemáticos y evidencias.","Son exactamente lo mismo.","El científico depende únicamente de opiniones.","El sentido común siempre utiliza experimentos."],
["¿Cuál pertenece a las Ciencias Sociales?","Sociología.","Astronomía.","Química.","Física."],
["¿Cuál de estos procesos históricos aparece en el contexto de surgimiento de la Sociología?","Revolución Industrial.","Revolución digital de 1990.","Llegada a Marte.","Invención del teléfono móvil."],
["¿Qué pensador está asociado al positivismo?","Auguste Comte.","Karl Marx.","Max Weber.","Herbert Spencer."],
["¿Cuál es una corriente o teoría sociológica contemplada en el proyecto?","Materialismo Histórico.","Teoría de la Relatividad.","Mecánica cuántica.","Geología histórica."],
["¿Qué disciplina estudia principalmente la sociedad y las relaciones sociales?","Sociología.","Astronomía.","Botánica.","Geometría."],
["¿Qué elemento se propone como recurso interactivo para el desarrollo histórico?","Línea de tiempo.","Calculadora financiera.","Editor de imágenes.","Reproductor de música."],
["¿Qué otro pensador aparece entre los exponentes clave?","Émile Durkheim.","Isaac Newton.","Charles Darwin.","Galileo Galilei."]
];
const quizBox=document.getElementById('quiz-box');
questions.forEach((q,i)=>{
 let html=`<div class="quiz-card"><h3>${i+1}. ${q[0]}</h3>`;
 q.slice(1).forEach((a,j)=>html+=`<label class="option"><input type="radio" name="q${i}" value="${j}"> ${a}</label>`);
 html+='</div>';quizBox.innerHTML+=html;
});
document.getElementById('submit-quiz').onclick=()=>{
 let score=0;
 questions.forEach((_,i)=>{const checked=document.querySelector(`input[name="q${i}"]:checked`);if(checked&&checked.value==="0")score++;});
 const pct=Math.round(score/questions.length*100);
 document.getElementById('quiz-result').textContent=`Resultado: ${score}/${questions.length} correctas (${pct}%). ${score>=6?'¡Excelente trabajo!':'Repasa los módulos y vuelve a intentarlo.'}`;
};
