let elItem =  document.querySelectorAll('.list__item')



elItem.forEach((e,i)=>{
      e.addEventListener('click', (evnt)=>{
            e.style.transform = 'rotateY(180deg)'
      })
})