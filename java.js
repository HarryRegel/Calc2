var flag, exp, pass, ans;
function myFunctionOn() {
    var x = document.getElementById("back");
    x.style.display = "block";
}

function myFunctionOff() {
    var x = document.getElementById("back");
    x.style.display = "none";
}

function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
}
function equal(flag, pass) {
    if (flag == 1)
        SciCalc(pass);
    else {
        exp = document.form.textview.value;
        document.form.textview.value = eval(exp) + ' ';
        exp = '';
    }
}
function clean() {
    document.form.textview.value = "";
    flag = '', exp = '', pass = '', ans = '';
}
function back() {
    exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.length - 1);
}
function SciDisplay(arg) {
    flag = 1;
    if (arg == 0) {
        document.form.textview.value = 'sin ';
        pass = 0;
    }
    else if (arg == 1) {
        document.form.textview.value = 'cos ';
        pass = 1;
    }
    else if (arg == 2) {
        document.form.textview.value = 'tan ';
        pass = 2;
    }
    else if (arg == 3) {
        document.form.textview.value = 'ln ';
        pass = 3;
    }
    else if (arg == 4) {
        document.form.textview.value = 'log ';
        pass = 4;
    }
    else if (arg == 5) {
        document.form.textview.value = '√ ';
        pass = 5;
    }
    else if (arg == 6) {
        document.form.textview.value = document.form.textview.value + ' %';
        pass = 6;
    }
    else if (arg == 7) {
        document.form.textview.value = document.form.textview.value + '!';
        pass = 7;
    }
    else if (arg == 8) {
        document.form.textview.value = document.form.textview.value + ' ^ ';
        pass = 8;
    }
}
function SciCalc(pass) {
    exp = document.form.textview.value;
    ans = exp.substring(4);
    if (pass == 0) {
        ans = eval(ans);
        ans = ans * ((3.14159265359) / 180);
        document.form.textview.value = Math.sin(ans);
    }
    else if (pass == 1) {
        ans = eval(ans);
        ans = ans * ((3.14159265359) / 180);
        document.form.textview.value = Math.cos(ans);
    }
    else if (pass == 2) {
        ans = eval(ans);
        ans = ans * ((3.14159265359) / 180);
        document.form.textview.value = Math.tan(ans);
    }
    else if (pass == 3) {
        ans = exp.substring(3);
        ans = eval(ans);
        document.form.textview.value = Math.log(ans);
    }
    else if (pass == 4) {
        ans = eval(ans);
        document.form.textview.value = (Math.log(ans)) / 2.303;
    }
    else if (pass == 5) {
        ans = exp.substring(2);
        ans = eval(ans);
        document.form.textview.value = Math.sqrt(ans);
    }
    else if (pass == 6) {
        ans = exp.substring(0, (exp.length - 2));
        document.form.textview.value = (eval(ans) * 100) + ' %';
    }
    else if (pass == 7) {
        ans = exp.substring(0, (exp.length - 1));
        document.form.textview.value = factorial(eval(ans));
    }
    else if (pass == 8) {
        var index = exp.indexOf('^');
        var base = exp.substring(0, index - 1);
        var expo = exp.substring(index + 2);
        document.form.textview.value = Math.pow(eval(base), eval(expo));
    }
    exp = '';
    ans = '';
}

function factorial(ans) {
    return ans ? ans * factorial(ans - 1) : 1;
}