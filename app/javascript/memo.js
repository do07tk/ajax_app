function post(){
  const submit = document.getElementById('submit');
  submit.addEventListener('click',function(){
    console.log('イベント発火')
  });
}

window.addEventListener('load',post);