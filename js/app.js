  runVantaJs();

  const elMainTemplate = document.querySelector('.js-main-template');
  const elPlayBtn = document.querySelector('.js-play-btn');
  elPlayBtn.addEventListener('click', (evt) => {
    document.body.innerHTML = '';
    document.body.append(elMainTemplate.content.cloneNode(true));
    run();
  });

  function run() {
    runVantaJs();
    runAnimeJs();
    const elCard = document.querySelector('.js-card');
    const elForm = document.querySelector('.js-form');
    const fragment = new DocumentFragment();
    const elQuizTemp = document.querySelector('.js-quiz-template');
    const elPreviewTemp = document.querySelector('.js-preview-template');
    const elResultsTemp = document.querySelector('.js-results-template');
    const elCounter = document.querySelector('.js-counter');
    const elTime = document.querySelector('.js-time');
    const userAnswers = [];

    const deepCopyQuestions = [...questions];
    const generate = generatorQuestion();
    const index = generate.next().value;
    const question  = deepCopyQuestions.splice(0, 1);
    renderQuestion(question, elForm);
    const elNextBtn = document.querySelector('.js-next-btn');
    const elQuizInputs = Array.from(document.querySelectorAll('.js-quiz-input'));
    add_event_to_quiz_inputs_and_save_answer(elQuizInputs, elNextBtn, index);
    add_event_to_next_button(elNextBtn);

    const minutes = document.querySelector('.js-minutes');
    const seconds = document.querySelector('.js-seconds');

    const timer = setInterval(() => {

        let minutesValue = Number(minutes.textContent); 
        let secondsValue = Number(seconds.textContent); 
        if(secondsValue == 60) {
            minutesValue++;
            secondsValue = 0;
        }
        secondsValue++;
        minutesValue = String(minutesValue).padStart(2, '0');
        secondsValue = String(secondsValue).padStart(2, '0');
        elTime.setAttribute('datetime', `${minutesValue}:${secondsValue}`);
        minutes.textContent = minutesValue;
        seconds.textContent = secondsValue;

    }, 1000);

    function* generatorQuestion() {
      for(let i = 0; i < questions.length; i++) {
         yield i;
      }
  
      return true;
   }
  
  
    function add_event_to_quiz_inputs_and_save_answer(inputs, nextBtn, index) {
      inputs.forEach(inp => {
          inp.addEventListener('change', (evt) => {
               if(inp.checked) {
                   nextBtn.removeAttribute('disabled');
                   userAnswers[index] = inp.value;
               }
          });
         });
    }
  
    function add_event_to_next_button(nextBtn) {
      nextBtn.addEventListener('click', (evt) => {
          const index = generate.next().value;
          if(index === true) {
              previewResult();
              return;
          }
          elCounter.textContent = `${index + 1} / ${questions.length}`;
          const question  = deepCopyQuestions.splice(0, 1);
          renderQuestion(question, elForm, true);
          const elNextBtn = document.querySelector('.js-next-btn');
          const elQuizInputs = Array.from(document.querySelectorAll('.js-quiz-input'));
          add_event_to_quiz_inputs_and_save_answer(elQuizInputs, elNextBtn, index);
          add_event_to_next_button(elNextBtn);
        });
    }
  
    function renderQuestion(arr, node, animate = false) {
      node.innerHTML = '';
      arr.forEach(item => {
          const temp = elQuizTemp.content.cloneNode(true);
          temp.querySelector('.js-question-title').textContent = item.title;
          temp.querySelector('.js-question-title').title = item.title;
          temp.querySelector('.js-a').textContent = item.answers?.a;
          console.log(temp.querySelector('.js-a'));
          temp.querySelector('.js-b').textContent = item.answers?.b;
          temp.querySelector('.js-c').textContent = item.answers?.c;
          temp.querySelector('.js-d').textContent = item.answers?.d;
          temp.querySelector('.js-next-btn').setAttribute('disabled', '');
          node.append(temp);      
        });
        
    }
  
  
  
    function previewResult() {
          clearInterval(timer);
          elCard.innerHTML = '';
          const temp = elPreviewTemp.content.cloneNode(true);
          elCard.append(temp);
          const elPreviewBtn = document.querySelector('.js-preview-btn');
  
          elPreviewBtn.addEventListener('click', (evt) => {
              renderResult();
          });
    }
  
    function renderResult() {
          const result = userAnswers.map((item, index) => {
              if(item === questions[index].trueAnswer) return true;
              else return false;
          });
          const trueAnswers = result.reduce((acc, item) => {
              if(item) acc++;
              return acc;
          }, 0);
  
          elCard.innerHTML = '';
          const temp = elResultsTemp.content.cloneNode(true);
          temp.querySelector('.js-results-title').textContent = `Siz ${questions.length} tadan ${trueAnswers} ta to'gri javob berdingiz!`;
          temp.querySelector('.js-results-title').title = `Siz ${questions.length} tadan ${trueAnswers} ta to'gri javob berdingiz!`;
          if(Number(minutes.textContent) > 0) temp.querySelector('.js-spent-time').textContent = `${Number(minutes.textContent)} daqiqa ${Number(seconds.textContent)} soniya`;
          else temp.querySelector('.js-spent-time').textContent = `${Number(seconds.textContent)} soniya`;
          temp.querySelector('.js-result-list').innerHTML = '';
          result.forEach((item, index) => {
              const li = document.createElement("li");
              li.classList.add('quiz__results__item', item ? 'correct' : 'incorrect');
              li.textContent = `${String(index + 1)}. ${userAnswers[index]}`;
              fragment.append(li);
          });
          temp.querySelector('.js-result-list').append(fragment);
          elCard.append(temp);
    }
    
  
  }



  function runVantaJs() {
    VANTA.NET({
      el: ".site-body",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0xffcf19,
      backgroundColor: 0x0
    });
  
  }

  function runAnimeJs() {
    anime({
      targets: '.site-main',
      scale: [
        {value: 0, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      delay: anime.stagger(0, {grid: [14, 5], from: 'center'})
    });
  } 

  function runInputAnimeJs() {
    anime({
      targets: '.quiz__label',
      translateX: 540,
      duration: 3000,
      delay: anime.stagger(500, {direction: 'alternate'})
    });
  }