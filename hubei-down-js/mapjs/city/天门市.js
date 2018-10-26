(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('天门市', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "429006",
            "properties": {"name": "天门市", "cp": [113.165862, 30.653061], "childNum": 6},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@JCFCB@DADAD@BCDAJIBABCFEDGBADEBCDCFADCDCDIBCDCBAFGJIHKHMBCAA@@@@A@A@@@@A@E@AAE@E@C@AAC@@@A@@BAB@FA@ECCCCCA@CACAGCAEAAAACBEDAHCDAHEBABCBCBC@@A@N@@A@@A@A@WB@QA@ACA@@C@@B@@@DA@@@DDA@A@EH@@DKBGBS@ABCXQFBDABE@CBABEB@HADA@EAG@CAC@C@CBEACGACAACGG@C@CBADC@CEA@CBCCECIAACIAACCAACICIAI@E@@AA@QBC@OB@B@BADAFCBADABCBABEDKEMCIKOEMBCDEDC@]DEHEJCPEBAJA@@@ABE@G@EAI@E@ACM@E@GCEAEAI@E@CBCBEBC@C@G@C@CDEAA@MAGCAEAG@CBEBEDQXIDOBMEODOLIJGDK@OBMJOLQFWDSCICICQBSH[FaB¡CYCQCIBGFCLAJCHIHOFGBECGGGMAB@B@B@@C@@@ACACAAE@@@@A@@@A@AB@@AA@GBGLGJMFGDCJEJIJAFAFBHDHBHAFCDKDO@QGIGOGKCM@GBEFAH@LFJDLDHDH@DAFCDEBEASASFMHSPSJKBUB[A]GWGIAIDCDGJIXIXEJKFMFMHIHIDG@OEKKOMGICIAM@GBGJQFO@M@KCIIIMGK@GDODWFQDOJMLGPELGFEJCTEXERGNCHEDE@I@IEKCICEBODMDIBGAUEKCGGGKEICCE@GBIJKNOPEJGNAN@PDTHPPLJDVFLDHFDDDDDLBDAFCFCDMFKDKAGAWGSG]G]CI@E@GDeNOJQPGFAF@HBHL\\LV@DTAD@PDVJRRPPFLXNTPZPVTVL`VrZPJZLTVRLRLFD@AB@BADADA@@D@B@D@@@@A@@@C@A@A@ABA@A@@@A@AB@@@D@BA@@BABC@AB@B@@A@C@@A@AAB@BAB@@ABABA@CAAAC@@AA@A@E@A@A@@B@DABABABA@A@C@C@@FAD@BA@@@AAAACAC@@@ADEBCBA@AAEBA@CBCA@@@@AEB@@A@@AACAA@AB@@AB@@@@A@C@@BAB@@A@@A@C@@A@@@A@@BAD@B@BA@A@@AAC@@A@A@ABADCBABA@A@AA@E@A@AA@@@ACC@@@@A@AA@@@AAA@@AA@@BAB@BBlG@ABA@ABABAD@FABA@@BA@@B@DAB@BADA@EBAB@B@@@B@@@BB@@B@B@BABC@CB@DADADAH@F@D@DBBB@D@FAD@JDDBBDD@BJALAFALBLDDHDHBHDFDJLHLJJFNFNFPFLHJFHJFHHJFHFHJDLDHBHABAFGDAHILCJAL@LDJBNBJ@J@JDFFDLBJANEPBLBJDFH@HAHAHIFANCLAPALCLGDANCLAHBPHF@HFHDLBPBRDHFJJHPVZFJDD@BA@@BABBBFF@BB@D@DCB@BAFCDABB@B@@D@HJ@DA@IHA@@B@BDBD@DAHAD@BBB@DDHNDBJFBB@D@FBBHDHDFLHDNFNDB@D@BAB@@@@A@A@A@@B@B@@@DC@@BA@@AA@@@@BA@@B@B@BB@BBB@BB@B@BABAB@BAB@@@FCJCPEF@@@@BBBBDBDBCD@LE@AB@AC@AAEBIBCDADCBED@LAHBBBD@BC@@ACBA@AB@F@D@BA@@BA@C@IAA@ABA@CBAB@DAB@BA"], ["@@@@BA@AB@D@D@BBDBB@D@@@BC@A@@B@D@@@BABABA@A@EkH@@BB@BBB@@@@@BA@DD"], ["@@@C@GACACACCEAC@AACEAEACACA@CDAF@D@FBD@FAFABCBA@G@E@C@C@ECCMAA@@G@CLAFD@@BFBHB@B@BG@IBACE@BE@CCB@F@@RB@ANB"], ["@@F@HADA@CAC@A@@AAA@C@ABGBBL"], ["@@@@IIEA@BB@BBDDFFBA"], ["@@@@BDBBBBB@@@@ABA@A@CAC@AAAA@@AAE@AA@GMA@AB@B@BBD@@BD@B@B@B@@@@AB@@@@BBB@@BBBBBBD"]],
                "encodeOffsets": [[[116095, 31590]], [[115538, 31467]], [[116163, 31461]], [[115310, 31448]], [[115883, 31167]], [[116177, 31240]]]
            }
        }],
        "UTF8Encoding": true
    });
}));