// 트랜스폼 rotate 각도 정보함수
// 각도정보만 가져가기
// $(element).rotationInfo().deg;

$.fn.rotationInfo = function () {
    var el = $(this),
        tr =
            el.css("-webkit-transform") ||
            el.css("-moz-transform") ||
            el.css("-ms-transform") ||
            el.css("-o-transform") ||
            "",
        info = { rad: 0, deg: 0 };
    if ((tr = tr.match("matrix\\((.*)\\)"))) {
        tr = tr[1].split(",");
        if (typeof tr[0] != "undefined" && typeof tr[1] != "undefined") {
            info.rad = Math.atan2(tr[1], tr[0]);
            info.deg = parseFloat(((info.rad * 180) / Math.PI).toFixed(1));
        }
    }
    return info;
};
