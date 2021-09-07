import reservation from './reservation.js';

import menu from './menu.js';

import './styles.css';



window.addEventListener('load', event => {
    //Nav
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.id = 'navbar'
  
    const title = document.createElement('h1')
    div.appendChild(title)
    title.id = 'title'
    title.innerHTML = "MK's Sushi"
    
  
    const btnHome = document.createElement('button')
    const btnMenu = document.createElement('button')
    const btnRes = document.createElement('button')
  
    btnHome.id = 'btn-home'
    btnMenu.id = 'btn-menu'
    btnRes.id = 'btn-reservation'
  
    btnHome.innerHTML = 'Home'
    btnMenu.innerHTML = 'Menu'
    btnRes.innerHTML = 'Reservations'
  
    div.appendChild(btnHome)
    div.appendChild(btnMenu)
    div.appendChild(btnRes)
  
    //Homepage
    const container = document.createElement('div')
    document.body.append(container)
    const home = document.createElement('div')
    home.id = 'home'
    container.appendChild(home)
  
    const titleHome = document.createElement('h1')
    titleHome.textContent += 'Artisan omakase, made fresh'
    home.appendChild(titleHome)
  
  
    const caption = document.createElement('h2')
    caption.textContent += 'Hand crafted by master chefs'
    home.appendChild(caption)
  
    //Footer
    const footer = document.createElement('footer')
    const footerText = document.createElement('h2')
    footerText.textContent += 'sushi@gmail.com | 264.569.4315 | 321 Market St. San Francisco, CA 94901'
    document.body.appendChild(footer)
    footer.appendChild(footerText)
  
  
  //Reload Homepage
  btnHome.addEventListener('click', event => {
    container.innerHTML = '';
    const home = document.createElement('div')
    home.id = 'home'
    container.appendChild(home)
  
    const titleHome = document.createElement('h1')
    titleHome.textContent += 'Artisan omakase, made fresh'
    home.appendChild(titleHome)
  
    const caption = document.createElement('h2')
    caption.textContent += 'Hand crafted by master chefs'
    home.appendChild(caption)
  })
  
  //Menu
    btnMenu.addEventListener('click', event => {
        container.innerHTML = '';
        container.appendChild(menu());
    });
    
    //Reservation
    btnRes.addEventListener('click', event => {
        container.innerHTML = '';
        container.appendChild(reservation());
    })
  })