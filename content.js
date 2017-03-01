viewPassword();

function viewPassword() {
    var passwords = document.getElementsByTagName("input");
    for (var i = 0; i < passwords.length; i++) {
        var password = passwords[i];
        var type = password.type;
        if ("password" != type) {
            continue;
        }

        password.focus();

        showPassword(password);
        showTip();
    }
}

function showPassword(password) {
    var left = getStyle(password, "paddingLeft");
    var top = getStyle(password, "paddingTop");
    var font = getStyle(password, "fontSize");

    var span = document.createElement('span');
    span.setAttribute("name", "showPassword");
    span.style.color = "red";
    span.style.wordWrap = "break-word";
    span.style.cursor = "text";
    span.style.whiteSpace = "nowrap";
    span.style.fontStyle = "normal";
    span.style.fontFamily = "Arial,Helvetica,sans-serif";
    span.style.fontSize = font;
    span.style.display = "inline-block";
    span.style.paddingLeft = left;
    span.style.paddingTop = top;
    span.style.height = 0;

    span.innerHTML = "密码：" + password.value;

    insertAfter(span, password);
}

function showTip() {
    var m = document.createElement('img');
    document.getElementsByTagName('body')[0].appendChild(m);

    m.setAttribute("id", "showTip");
    m.src = "data:image/png;base64,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";
    m.style.position = 'fixed';
    m.style.top = '12px';
    m.style.right = '12px';
    m.style.opacity = 1;
    m.style.width = '64px';
    m.style.height = '64px';
    m.style.zIndex = 9999999;

    for (var i = 1; i < 20; i++) {
        setTimeout("document.getElementById('showTip').style.opacity=" + ((20 - i) * (1 / 20)) + ";", i * 40);
    }
    setTimeout("document.getElementById('showTip').parentNode.removeChild(document.getElementById('showTip'));", 21 * 40);
}

function getStyle(dom, attr) {
    return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr];
}

function insertAfter(newElement, targetElement) { // newElement是要追加的元素 targetElement 是指定元素的位置
    var parent = targetElement.parentNode; // 找到指定元素的父节点
    if (parent.lastChild == targetElement) { // 判断指定元素的是否是节点中的最后一个位置 如果是的话就直接使用appendChild方法
        parent.appendChild(newElement, targetElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

function setCaretPosition(ctrl, pos) {
    if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
    }
    else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}