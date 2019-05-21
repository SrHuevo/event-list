var buttons = document.getElementsByTagName('button')
var list = JSON.parse(localStorage.getItem('list'))
if(!list) {
  list = {}
  localStorage.setItem('list', '{}')
}
for(var i = 0; i < buttons.length; i++) {
  var button = buttons[i];
  var item = button.parentElement.parentElement
  var name = item.children[1].placeholder
  if(!list[name]) {
    button.innerHTML = '&#10007;'
    button.classList.remove('btn-success')
    button.classList.add('btn-secondary')
  } else {
    button.innerHTML = '&#10003;'
    button.classList.remove('btn-secondary')
    button.classList.add('btn-success')
  }
  button.addEventListener('click', function () {
    item = this.parentElement.parentElement
    name = item.children[1].placeholder
    var isCheck = this.classList.contains('btn-success')
    if(isCheck) {
      this.innerHTML = '&#10007;'
      this.classList.remove('btn-success')
      this.classList.add('btn-secondary')
    } else {
      this.innerHTML = '&#10003;'
      this.classList.remove('btn-secondary')
      this.classList.add('btn-success')
    }
    list = JSON.parse(localStorage.getItem('list'))
    list[name] = !isCheck
    localStorage.setItem('list', JSON.stringify(list))
  })
}