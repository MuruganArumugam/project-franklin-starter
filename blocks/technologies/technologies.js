const techWrapper = document.querySelector('.technologies-wrapper > div > div');
techWrapper.className = 'tech-known';

const techpic = techWrapper.querySelector(':scope div > picture');
techpic.parentElement.className = 'tech-pic';

console.log('###tech', techWrapper);
