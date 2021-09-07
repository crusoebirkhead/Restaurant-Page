function reservation(){
    const res = document.createElement('div')
    res.id = 'reservation'
  
    const form = document.createElement('form')
    res.appendChild(form)
  
    const firstLabel = document.createElement('label')
    const lastLabel = document.createElement('label')
    const dateLabel = document.createElement('label')
    const first = document.createElement('input')
    const last = document.createElement('input')
    const date = document.createElement('input')
  
    first.type = 'text'
    last.type = 'text'
    date.type = 'date'
  
    firstLabel.innerHTML = 'First Name'
    lastLabel.innerHTML = 'Last Name'
    dateLabel.innerHTML = 'Date'
  
    form.appendChild(firstLabel)
    form.appendChild(first)
    form.appendChild(lastLabel)
    form.appendChild(last)
    form.appendChild(dateLabel)
    form.appendChild(date)

    return res
}

export default reservation