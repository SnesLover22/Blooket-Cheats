/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#4560","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tautoAnswer.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");const{state:{question:o,stage:e,feedback:t},props:{client:{question:c}}}=Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];try{"typing"!=o.qType?("feedback"===e||t?document.querySelector('[class*="feedback"]')?.firstChild:[...document.querySelectorAll('[class*="answerContainer"]')][(o||c).answers.map((e,t)=>(o||c).correctAnswers.includes(e)?t:null).filter(e=>null!=e)[0]])?.click?.():Object.values(document.querySelector("[class*='typingAnswerWrapper']"))[1].children._owner.stateNode.sendAnswer(o.answers[0])}catch{}})();