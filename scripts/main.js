
btn.addEventListener("click", () => {
    var otherList = document.getElementById('texts');
    var tagselement = otherList.getElementsByTagName('li');
    for (let i = 0; i < tagselement.length; i++) {
        var text = tagselement[i].innerHTML;
        if (text.startsWith('http://') || text.startsWith('https://')) {
            var link = document.createElement("a");
            link.href = text;
            link.innerHTML = text;
            tagselement[i].innerHTML = "";
            tagselement[i].appendChild(link);
        }
    }
    document.getElementsByTagName('h4')[0].innerText = "Измененный текст с помощью JavaScript";



});
