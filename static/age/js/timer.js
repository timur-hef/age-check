/* 
 * Licensed to secundomer.ru
 * 
 */
var _0x99b8 = ['innerHTML', 'length', 'hidden', 'remove', 'onload', 'start_button', 'classList', 'add', 'target', 'getAttribute', 'value', 'Пауза', 'setAttribute', 'Продолжить', 'getElementById', 'onclick', 'getTime', 'clear_button', 'pause_button', 'minutes', 'seconds', 'charAt', 'charCodeAt', 'floor'];
(function(a, d) {
    var b = function(b) {
        while (--b) {
            a['push'](a['shift']());
        }
    };
    var c = function() {
        var a = {
            'data': {
                'key': 'cookie',
                'value': 'timeout'
            },
            'setCookie': function(b, h, i, e) {
                e = e || {};
                var c = h + '=' + i;
                var a = 0x0;
                for (var a = 0x0, f = b['length']; a < f; a++) {
                    var g = b[a];
                    c += ';\x20' + g;
                    var d = b[g];
                    b['push'](d);
                    f = b['length'];
                    if (d !== !![]) {
                        c += '=' + d;
                    }
                }
                e['cookie'] = c;
            },
            'removeCookie': function() {
                return 'dev';
            },
            'getCookie': function(a, f) {
                a = a || function(a) {
                    return a;
                }
                ;
                var c = a(new RegExp('(?:^|;\x20)' + f['replace'](/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
                var e = function(a, b) {
                    a(++b);
                };
                e(b, d);
                return c ? decodeURIComponent(c[0x1]) : undefined;
            }
        };
        var e = function() {
            var b = new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');
            return b['test'](a['removeCookie']['toString']());
        };
        a['updateCookie'] = e;
        var f = '';
        var c = a['updateCookie']();
        if (!c) {
            a['setCookie'](['*'], 'counter', 0x1);
        } else if (c) {
            f = a['getCookie'](null, 'counter');
        } else {
            a['removeCookie']();
        }
    };
    c();
}(_0x99b8, 0x1cc));
var _0x899b = function(a, c) {
    a = a - 0x0;
    var b = _0x99b8[a];
    return b;
};
var curr_seconds = 0x0;
var debug_start_time = 0x0;
var math = Math;
var d = document;
function c(b) {
    var c = function() {
        var a = !![];
        return function(d, b) {
            var c = a ? function() {
                if (b) {
                    var a = b['apply'](d, arguments);
                    b = null;
                    return a;
                }
            }
            : function() {}
            ;
            a = ![];
            return c;
        }
        ;
    }();
    var d = c(this, function() {
        var b = function() {
            return '\x64\x65\x76';
        }
          , c = function() {
            return '\x77\x69\x6e\x64\x6f\x77';
        };
        var d = function() {
            var a = new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');
            return !a['\x74\x65\x73\x74'](b['\x74\x6f\x53\x74\x72\x69\x6e\x67']());
        };
        var e = function() {
            var a = new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');
            return a['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());
        };
        var a = function(a) {
            var b = ~-0x1 >> 0x1 + 0xff % 0x0;
            if (a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69' === b)) {
                f(a);
            }
        };
        var f = function(b) {
            var c = ~-0x4 >> 0x1 + 0xff % 0x0;
            if (b['\x69\x6e\x64\x65\x78\x4f\x66']((!![] + '')[0x3]) !== c) {
                a(b);
            }
        };
        if (!d()) {
            if (!e()) {
                a('\x69\x6e\x64\u0435\x78\x4f\x66');
            } else {
                a('\x69\x6e\x64\x65\x78\x4f\x66');
            }
        } else {
            a('\x69\x6e\x64\u0435\x78\x4f\x66');
        }
    });
    d();
    var a = '';
    for (var e in b) {
        a += String['fromCharCode'](b[e]);
    }
    return a;
}
var sqrt = math[c([0x73, 0x71, 0x72, 0x74])];
var lll = d[c([sqrt(0x2d90), sqrt(0x3021), sqrt(0x2649), sqrt(0x24c1), sqrt(0x3490), sqrt(0x2b11), sqrt(0x3021), sqrt(0x2f44)])][c([0x68, 0x6f, 0x73, 0x74])];
window[_0x899b('0x0')] = function() {
    document['getElementById'](_0x899b('0x1'))[_0x899b('0x2')][_0x899b('0x3')](_0x899b('0x1'));
    document['getElementById']('pause_button')['onclick'] = function(c) {
        var a = c[_0x899b('0x4')];
        var b = a[_0x899b('0x5')](_0x899b('0x6'));
        if (b == _0x899b('0x7')) {
            clearInterval(intervalVariable);
            a[_0x899b('0x8')](_0x899b('0x6'), _0x899b('0x9'));
        } else {
            intervalVariable = setInterval(timerTick, 0x3e8);
            a[_0x899b('0x8')]('value', _0x899b('0x7'));
        }
    }
    ;
    document[_0x899b('0xa')]('start_button')[_0x899b('0xb')] = function(b) {
        hide(b[_0x899b('0x4')]);
        show(document[_0x899b('0xa')]('pause_button'));
        intervalVariable = setInterval(timerTick, 0x3e8);
        var a = new Date();
        debug_start_time = a[_0x899b('0xc')]();
    }
    ;
    document[_0x899b('0xa')](_0x899b('0xd'))['onclick'] = function(a) {
        curr_seconds = 0x0;
        clearInterval(intervalVariable);
        secondsToTime(curr_seconds);
        document[_0x899b('0xa')](_0x899b('0xe'))[_0x899b('0x8')](_0x899b('0x6'), _0x899b('0x7'));
        hide(document[_0x899b('0xa')](_0x899b('0xe')));
        show(document[_0x899b('0xa')]('start_button'));
    }
    ;
    panel_hours = document[_0x899b('0xa')]('hours');
    panel_minutes = document[_0x899b('0xa')](_0x899b('0xf'));
    panel_seconds = document[_0x899b('0xa')](_0x899b('0x10'));
}
;
var minus_one = -0x1;
var one = minus_one * -0x1;
var five = (minus_one + minus_one + minus_one + minus_one + minus_one) * one * minus_one;
var three = (one + minus_one + minus_one + minus_one + minus_one) * minus_one;
var charAt = _0x899b('0x11');
var charCodeAt = _0x899b('0x12');
var not_eq = function(a, b) {
    return a != b;
};
var r = [lll[charAt](minus_one + one)[charCodeAt](0x0), lll[charAt](one + minus_one + one + minus_one + one + minus_one + one + minus_one + one)[charCodeAt](0x0), lll[charAt](one + minus_one + one + minus_one + one + minus_one + one + one + minus_one + one)[charCodeAt](0x0), lll[charAt](five - one - one)[charCodeAt](0x0), lll[charAt](five + minus_one)[charCodeAt](0x0), lll[charAt](minus_one * sqrt(five * five) * minus_one)[charCodeAt](0x0), lll[charAt](five + one + minus_one + one)[charCodeAt](0x0), lll[charAt](five + five + minus_one + minus_one + minus_one)[charCodeAt](0x0), lll[charAt]((one + one) * (one + one) * (one + one))[charCodeAt](0x0), lll[charAt](sqrt(three * three * (three * three)))[charCodeAt](0x0), lll[charAt](five * one + five)[charCodeAt](0x0), lll[charAt](five * one + five + one + minus_one + one)[charCodeAt](0x0), lll[charAt]((one + one) * (one + one) * (one + one) * (one + one) - five + minus_one + one + one)[charCodeAt](0x0)];
function timerTick() {
    curr_seconds++;
    var b = new Date();
    var a = b[_0x899b('0xc')]() - debug_start_time;
    if (Math[_0x899b('0x13')](a / 0x3e8) == curr_seconds)
        secondsToTime(Math['floor'](a / 0x3e8));
    else
        secondsToTime(curr_seconds);
}
function secondsToTime(a) {
    var b = parseInt(a / 0xe10 % 0x18);
    var c = parseInt(a / 0x3c % 0x3c);
    var d = parseInt(a % 0x3c);
    panel_hours[_0x899b('0x14')] = zeroLeading(parseInt(b));
    panel_minutes[_0x899b('0x14')] = zeroLeading(parseInt(c));
    panel_seconds['innerHTML'] = zeroLeading(parseInt(d));
}
function zeroLeading(b) {
    var a = b + '';
    if (a[_0x899b('0x15')] < 0x2) {
        a = '0' + a;
    }
    ;return a;
}
var rr = [sqrt(0x33a9), sqrt(0x27d9), sqrt(0x2649), sqrt(0x3579), sqrt(0x2f44), sqrt(0x2710), sqrt(0x3021), sqrt(0x2e69), sqrt(0x27d9), sqrt(0x32c4), sqrt(0x844), sqrt(0x32c4), sqrt(0x3579)];
function hide(a) {
    a[_0x899b('0x2')][_0x899b('0x3')](_0x899b('0x16'));
}
function show(a) {
    a['classList'][_0x899b('0x17')](_0x899b('0x16'));
}
for (var i in r) {
    loc = not_eq(r[i], rr[i]) ? d[c([0x6c, 0x6f, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e])] = c([0x68, 0x74, 0x74, 0x70, 0x3a, 0x2f, 0x2f, 0x73, 0x65, 0x63, 0x75, 0x6e, 0x64, 0x6f, 0x6d, 0x65, 0x72, 0x2e, 0x72, 0x75]) : 0x1;
}
function renderTimerPanel(a, b, c) {
    panel_hours['innerHTML'] = a;
    panel_minutes[_0x899b('0x14')] = b;
    panel_seconds['innerHTML'] = c;
}
