function menu(){
    container.innerHTML = '';
  
    const menu = document.createElement('div')
    menu.id = 'menu'
    container.appendChild(menu)
  
    const titleMenu = document.createElement('h1')
    menu.appendChild(titleMenu)
    titleMenu.textContent += 'What is Omakase?'
  
    const omokaseDef = document.createElement('h3')
    omokaseDef.id = 'descrip'
    omokaseDef.textContent += ("Omakase is a Japanese phrase, used when ordering food in restaurants, that means I'll leave it up to you. The chef will prepare and serve you the seasonal menu regardless if you want it or not, even the sea urchin.")
    
    menu.appendChild(omokaseDef)
}

export{menu}