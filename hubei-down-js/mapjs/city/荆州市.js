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
    echarts.registerMap('荆州市', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "421002",
            "properties": {"name": "沙市区", "cp": [112.357433, 30.315895], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@BCBEBGDE@CCEAAEE@AC@CD@BABABABABCBHF@@BCLHADGLJB"], ["@@AGGECAGCCGCAC@G@AAECAA@C@C@C@ABABAB@B@@CDA@CDEDCDADABCD@DCBG@A@A@A@A@CAI@A@@@A@CAAB@@A@AGY@OBKBGDO@GBCHMDG@@@@CA_aKKAC@EAEAECEEEECEAYIGAE@KAGD@C@EACA@CA[BI@CA@@@E@AA@C@A@ABAFCBC@@@AE@@A@@B@@ABCBG@@@@DAB@@A@AAA@@C@@AAA@@@A@C@ADADBD@B@BEBI@A@@A@IAAAA@GIAABEJ@BCDOEHMBABAA@DA@A@@@ABA@@B@B@@@@ADCGE@@A@E@C@A@E@@@A@C@A@A@@BCBABED@@EDGDI@I@GBSDSDKBABAF@F@H@FADGBMBAAAAAG@ICCEBEFMBGBBBBLDH@JAR@LITKPMNKLOHQJKJMJGFGDE@EBBTABAFAH@BB@BB@BBBABCBAB@@BBB@BADAB@B@BD@@BFFHDDBBFDJDDDBD@DAB@DBDBDBDDFBH@B@D@B@DBBBBD@NDPDB@BBBDBF@JDDF@HAHEB@FEJEJGJEJCDAJBP@LBHDHHHJJVNFHDJFJFJHVNNBLBF@FBJAP@HAFCHAF@HBH@BFDDBHBDHFLDLAHAJ@FCNEHELGNGPGJEHEFGNMNIJA"]],
                "encodeOffsets": [[[115096, 30942]], [[115229, 31124]]]
            }
        }, {
            "type": "Feature",
            "id": "421003",
            "properties": {"name": "荆州区", "cp": [112.095354, 30.450674], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@HGDAFADAHCDADA@ABEBOBC@ABCBAFAH@LADABA@AAICIEICEBIDEFCDCFGHIDKFIHIBGFI@GCIACAI@IBIDGLKFCHCJADDBFBD@FCH@DDDFBHBF@DCFCFEFCDEBIDICICKAGAICO@CBEAC@AAE@CDADAFADAFA@A@CBADCD@F@BBDBBBB@DBD@D@FADCD@DABB@D@DADABABCBA@AAA@CAA@CBAB@F@J@JADBD@DBDBBB@@BFEB@D@BBDDDDDBDBD@B@BABC@CDAH@LAJ@F@RBNDJBHALC@IDGLGJCB@FBJ@D@DABADCBCBCBCBC@E@CBABABCBC@@DA@A@@@AAAAA@A@@@ABA@A@A@AB@@AB@@@AA@@IAA@AAA@@ABCBC@A@A@ACAA@@A@CB@DCBA@A@AB@B@B@BA@A@@@ACC@@AA@A@@@ABABA@@B@BBB@BCBAB@@CBAD@B@@@DIBABAPIPENAIUGIGGGCKAO@IACBIDIFIHIFEFA@GFGBE@CC@IAEACAAA@OCMCC@AAAA@C@A@C@AAGCEACACAC@CBA@CACCCICECAACCEGAE@@ACA@A@CBABA@AA@@BADABAAA@AAAA@@ABGBEBAAS_@M@]EeI_KkM@EBEDCBGBIAIAKES@M@EBEBEBG@EGYAIBEBCDADAD@FBF@D@FC@CBCAAACCAG@CAACAEBCBCHABC@CACCAEACCAC@EBE@C@CCCACCE@CBABADAD@DBF@D@H@HCFEDCBC@ACCCCC@SEGCCCCECCCAIAM@ICCC@A@CBE@EAAE@GBEFAHA@@BE@ABCBEHCBA@CA@CAAA@CAEAAACAABA@@BHLDDBDDHAB@D@DBBBDDDBB@BDJ@JMFC@EBEJ@F@H@H@F@DI@GEEEGGEGMCE@GCGCIEEEGEIAGCE@OCMDKBGFCFBHDFFNDFDFFHDFFJFLHJBBHFFFFDDFDHBF@DDDFDFBLBHBDB@FEHCFILBFJBF@HBDHDPAFAH@B@DCBABABC@CBAB@D@BAB@B@B@BBBFBB@BBBBBF@D@DBDAB@BA@EFOBIFID[TUVMNQXIRGHCF@DBFBHAL@T@LDPBNCZEPGPGJGFABCDCBE@C@A@@AB@BABABA@@AAA@A@EBCDCBA@A@AA@@BA@ADADAFA@@@A@@AAC@E@G@EBCBIFCBA@A@CAC@C@ABCBCDCFCBABCDCB@BAB@DBBBBDBBBBABABA@ABADAD@B@B@BBABCFAD@B@BDDDDBDD@BB@B@@ABA@EBGBCBGDA@@B@BDBDB@BBF@DBDBB@DBF@B@DBD@DBBDBD@H@H@F@@@DAXAD@F@HAB@J@PBDADDFPDVFLJNX^BD@JCJCD@BABABABCBE@EAA@ABEFE@E@CB@BA@BBDBHDJHFNBDCLADABBBDBNFFDB@@BBBDDBBDBBDD@B@B@BBBBB@BDAFBBDDDDBDBRFF@B@BCD@BB@BBB@HDB@B@B@DBB@BBBBBBDBB@F@B@B@BB@D@@B@BDBBB@D@BCAC@ABAJFB@B@FB@@B@@A@AAAA@@AB@BAD@D@@@BBDD@@BD@BH@H@@@"],
                "encodeOffsets": [[114769, 31394]]
            }
        }, {
            "type": "Feature",
            "id": "421024",
            "properties": {"name": "江陵县", "cp": [112.51735, 30.033919], "childNum": 3},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@DEJEVQDCHMDCLKRSFEBCJ]@ADCDCIGAKBO@KDMFGJCHAFADGDGDG@K@G@EEGIIGGEG@E@GDCJGLCPAPBTBLALCJELCLGJAJAL@JAFCJGLGJ@HBN@JEHCB@F@^DJ@DAD@D@D@BC@E@A@E@C@@B@J@S_WO[I@@@CACA@C@C@C@CBC@A@AAAECAAA@A@CJG@C@@AACAAA@G@ACAE@@@@BA@A@EACAA@CF@@A@AA@A@AB@@A@AA@GCAACAEEAC@AJIBADEBA@AAA@AA@IAE@ABABCH@BAD@@A@AACAAACAA@AB@BB@@BADABA@@@@A@CAAECA@CBCBCB@@A@@A@ABAB@DABAB@CCAA@@@A@AAC@IAEAAAGKEGAAEBE@C@CCGCEKOAG@IBEBG@CCCC@A@AAAC@G@CAAEAA@AAAABI@AAAA@E@@A@GAAA@AAADABADCFCDABADEBOFGFADDHGHQFOFODQCKCIAG@ODMC@A@C@C@AE@CAIAGAAE@ECCIBCBADAF@FABA@CAMCCAUGYIA@ED@BAB@BCBM@KBBB@JBJBNDHADAL@JALAPEPALAFAFADADADAHAFCDAFADADADCDCDCFABADCFADCFADCFAFCDEHCBCBEDEBEBEBEBEDKBODMDOBK@MBMDEBIBIBIBK@IA@@@@G@KCKCGAEAGCEAE@EAG@G@A@EBCBC@CBEDGFCDCDCFCBADEFADADCHCFADAFADAFADABCHADADAFAFCFADCFCDAFADAFAD@DAD@D@FBFBFBFDFBBDDDFDDDDBBFDDBBDFDHDBDDBFBHDBBFBFDFBDDDBFBFDFDDBDBDDFBFFDDFDDDDDDBBDDDDFFJDFBBAAHANAFEFADD@JBHBBBBNAHABC@E@G@EBEBALATCTCHAJ@J@HCFC@@FCBADA@AB@B@D@B@@@F@B@D@F@B@@@DABABABABA@ADCD@@BFFBBDF@DCFAHAFAD@HBBBB@J@BB@J@FA@A@AACBCBCD@B@@@B@BB@@@DB@BBB@@@BA@C@@H@DABA@@@AB@@@BF@@D@DABEBAB@D@B@@B@F@@DBJ@\\ADBB@BD@F@DHCLBF@HBZJFBFDFFDFBFBF@FBDLL`bDB@@"], ["@@@BCD@B@@BB@@@BB@@@@@B@@@AA@AB@BAA@@@BA@A@A@@@@A@@@A@"], ["@@HKBCKGAD@@CD@B@@A@A@@@AB@B@@@BCBB@ABABGNPFDC@AFIBA"]],
                "encodeOffsets": [[[115229, 31002]], [[115382, 30733]], [[115091, 30941]]]
            }
        }, {
            "type": "Feature",
            "id": "421023",
            "properties": {"name": "监利县", "cp": [112.904344, 29.920079], "childNum": 6},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@@ACAC@@BBB@D@BB@@CB@BA"], ["@@AECG@CACCEBC@AFEDABABA@CCAAACAAAAEB@BCBAFAFAPDFBBABABCBA@E@A@ADAB@BA@A@C@@@@DA@@B@BBDDDBB@FAHABA@A@C@AA@CBA@A@AEAECO@C@CDABAHCFCDC@CBEBCDE@EAGGM@A@A@AHEFADABA@A@ACACAA]@EBCB@FAB@BA@G@@@A@EAC@@@C@@AA@@CAACNMHEEC@AAACACAAAAAAAC@GAAAA@AAAA@CBA@C@EBEAEAE@@F@DDD@H@B@BCFGHeBE@AF@@CH]`LPHD@RE|s|jÏLmMUYQGIEIPWBCIWGGCCCECAAAAE@AEMSeAABAHCDAFCDCDCFADADADCDADADAFAFCDAFCDADCDAFABAW]SWgcCACIEK@E@AACGGUOucOKEIcsgwuyCCIGGCGBABCDABEBCDEBCAC@C@CAE@E@C@CBCBCDA@C@A@CAC@@@BEBKBOCIGGGCEAG@KFCHEZA^@LCXEXIdENGFKDOBSA_OcWUMQSQ_GEIAQBKHENCTAFABC`CPCTKbGZCVAJS|EL@J@HFHBBLL\\XVTD@FDDBFDDBFBFFDBBDJLJLhZTRJPJRFTFRHhL\\@J@@CFEFG@EAMGGIIOUQ[QGIAECE@EAAACAEEGAEAEACCEAEAE@ACECCECCCCACCCCEAEA@@C@CBCBCDEHAF@N@THdB\\AN@HAD@FCHAHCDCBLPFCLKBD@FBH@JCHEHADMJEDIFQFABM@C@IAIEC@CCAAPCJAFCOOIDQBUAOEeWQOUSQMYOAAOCIC@@OAUCUAQAMBGDIF@LCJ@L@DBB@DBBBBFBF@D@J@PDLFNJHLBNAFBJ@L@BBDAB@DA@@DAB@D@DAFADAB@F@BAD@BCDGHGFC@CAGAAAEAE@K@@@S@IBIBK@A@WCOAEBI@E@C@A[FC@Y\\CBCDWPABCAAAA@@@@BFFFLBDBBBFFJ@LCNCF@FDL@BA@ABABGFADAFBBB@BB@H@BF@B@BB@BAJBBBBB@FBBB@D@HBDBBB@D@DD@DAHAF@JBHLPDFDH@D@DAFBFHBLFBHBBBF@JBD@B@B@@BBDDA@ABCBA@AB@B@BB@@@DADADAB@FDBB@D@B@@B@BABC@AA@@ABAB@DBBBDBBBB@@@BC@ADGBABAF@JBB@@BBB@BABCFABJLB@@@B@@@@@@B@BAB@@B@ABA@@BBB@@A@@@@@A@@A@@AACDBBHDB@@B@BA@@B@BBBB@@@DEB@DBFBB@B@@A@@F@DB@B@HBBDBBB@@@DIH@D@BBBDBBFBBB@D@DAD@D@D@B@BD@D@@\\JXPT`d@h@V@P@^@CDABGPABA@IDIDGFGFCFAFDDFBN@L@J@FDDHDHDH@F@LCHCFCJCHAJDHBFDDDFLAPALAHDHDDHFHBHFFFDHDJBDHFBJCFADC@@@ABA@A@C@EAC@C@ABABAB@FBDBF@F@DANKFABAF@HBJBFBFAHAHCJANAFABABABA@AEM@A@CBCHCHCDCFCDAD@RFFBD@FAHCFCDAD@HBPFDBFFFDJDFBBBBD@DAFENAD@DDBDDHBFBDD@D@BCHAD@D@D@@DDDDDBFBFBHBH@FAHEB@FCFCDEP]DEJEFCHEPMFAFAD@F@FBDBLDHBFBHAHAFADCFEB@"], ["@@@@@ADC@AIKIJ@BBDFFDBDC"], ["@@C@ECAAABA@@B@BBDBBB@B@B@H@BAAAAA"], ["@@D@DA@A@@CAI@aGOEA@AB@@@BDBTDBBJDHDDBH@DA"], ["@@hWPKKOABKHKHUNKDPP"]],
                "encodeOffsets": [[[115746, 30917]], [[115850, 30868]], [[115380, 30737]], [[115422, 30538]], [[115443, 30539]], [[115612, 30507]]]
            }
        }, {
            "type": "Feature",
            "id": "421022",
            "properties": {"name": "公安县", "cp": [112.130179, 30.000065], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@AACEEICECCACCACCCCECCCEEEACCCACAECECEACACCEAECEAAAGCEACAACGCECACCAECAACCCCCECCAACEAEAEAE@E@CBC@CBCBEBCBEDCDEBCDEBEBEBCBCDGBABCBEBCBEBCDEDGBCBCFEBCDADEDCDCHEFCDAD@DAFAB@H@H@FBF@FBHDFBHBLDLDH@@@@@JBL@JAJAJAFANCNAL@PANCPCLAFCFAFAFAFAFCDADAFGDCBEDEBCDEBCDEBCBADEDCDCBCBCBCBEDCBEBGBCBCBCBEBEBKFOBOBK@IBKBCCGAMAI@IAAAKCKCKCGCCCGACAEAGCEACACAEACCECCCECECCACEEEEAACECEAECCAE@CCEAEECGEGEIEICECECEACAAAEAEAAAEAECCCECAACCCEACAEAE@E@EAEBG@E@C@EBGBIBMBKDK@KGME@KCI@I@IBIDKBKBGCCCCEAI@G@MCGCGCGGCKGIGEE@A@C@@@A@A@C@AAA@C@AAA@@@AAEACAA@AAA@@ACAA@A@AAC@AC@@@A@A@@@C@AAC@AAAAAAA@CACACCIE@@AAAAAA@@@A@@@ABABA@A@@@A@A@CAA@@CCAAC@C@ABA@CBC@A@CAA@ACCC@AAA@C@A@C@C@@@A@A@@@A@@@A@@GHCBABABAB@F@BABAB@@CD@BAL@FAJCFCFADABCDC@CDC@ABCB@@C@A@@AA@CC@@AACAAAGAAA@@C@EBABEBC@C@A@A@E@A@E@A@A@C@CA@@A@CB@@ADADABA@AAA@AA@AA@CA@@@@ABADAD@FCF@DABCBADCBGDCFA@ABADAB@BA@A@@ACA@A@AA@CA@@C@@AC@A@ABC@A@A@CAAAA@C@CBCB@@@BAB@DAD@BADADABAD@B@BBBBBB@B@@B@@BB@DAB@B@@ABBD@D@@BB@@B@@@BBD@BBBBDDBB@B@B@B@BAB@B@B@H@D@D@DBD@B@BBDBDBB@@@B@BABA@CBCBAB@@ADADADA@@B@B@BBD@D@BAB@DAD@B@B@BAB@AACAAAAC@AAAA@AA@AE@@AABA@A@@B@BCFCBABA@A@@BA@ABABA@@@A@@@@@AA@AA@@A@ABABABCD@@AB@@A@@@ABA@A@@@A@@@A@@BA@@B@@@@AB@BAD@BA@ADABCB@@C@CBC@C@ABE@CHCBABKFGDEDCDCB@@ABCACAEBABAB@BC@E@A@ABAB@@GRAFA@C@E@CAAAAC@@@@A@C@ABC@A@EBC@CBABEBAB@@A@CAAB@BBB@D@D@@AB@FADAD@@@DAB@B@DBD@@BBBBBDDDDDBBDDBBBBBB@B@DABABABA@C@A@E@G@A@CAA@EACAA@AACAC@A@A@ABEBEBCBAD@@@@ABABC@A@@BABAHCHABAB@B@@@@A@@@@@A@@@@@A@ABC@A@A@AB@@ABA@A@A@@@A@@@A@A@@@@@A@@BA@@@@@A@@@@@@@A@@@A@@@A@A@@BA@@@A@@@AB@@AA@@@@@@A@A@@@A@ABA@@@ABA@@@A@@DBD@DA@A@@@AC@C@CA@GAA@A@CAGAA@A@A@A@ED@B@@CFADCDAD@@CBABIHEB@@ABC@E@A@AAA@CCA@C@@D@DBBBB@D@F@HABA@C@@AA@@@A@@@A@A@ABCBCBCBA@C@CBAB@BBB@B@F@BB@@@B@B@@BBB@@@B@@BBBBB@B@@@B@B@@@@@BA@@B@@@JDH@JDD@NAJ@NAHAJADBTABBBBBBFJFFLFJHLHFF@B@DADCD@BADALAF@JAH@HAHAJAR@BAJ@D@D@DBD@DDBBBDDFJBFFLFHFFFJFHDHHLHJHDHB@D@FAJANALCRAJANCLCLEJGHKFIFDF@BDDBFDFDFHFHHFFDJBF@JBJDFHFDDD@DBDABBD@DBDDBDDFBHBF@BBBBBD@BBFAFBF@F@B@D@B@F@@EACAAHAJANDCEEMCEAGDEHELANCPDF@HDJBHFFFJFHDHDF@NDFHHHFFHFJ@@C@E@G@G@EFIFAD@NE@ICI@AAACCACAA@C@CBACGACCCGK@AB@BADBBBFBDBB@BB@DDBB@DAFGDABAF@@AB@BGFEHAF@BB@FAF@D@BDDJDN@JBDBDDDFDDHDTFD@DDDD@BADCDEFGDG@C@E@CAC@CBABAB@DDFBDDD@D@DAF@FBDDDFBDBBD@DADGBADADBFBDDBH@DBBDBBAD@DEDC@E@EAC@CBCBADAFBJHZ@FAHAFAF@F@NFTBLBJAJAHCDAF@FlN`LfJ^FN@`@FAF@HCHENILIRIPGLKNMLOJS@KBQ@ICGAK"],
                "encodeOffsets": [[114982, 30955]]
            }
        }, {
            "type": "Feature",
            "id": "421083",
            "properties": {"name": "洪湖市", "cp": [113.470304, 29.91297], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@@@FCHCL@NAPBZFD@`NTHDDPDHBFAJ@DAH@PCPIªve_FEDGBKCICMGKMK_åuAAUGaIOCWE]OYUGGSW[eCE_iUYMMWK_IeCEaBaDWDIAiI}[IG_a[]@@SOqYIEMIQIIG[S]UikIG[UKGaYcOYQqe_]QK__u{QUMOABEBCBCDCBEDCBEDEBCBCBCBCDCBCBEBCDCDEDCBGDABBBTfFN@BBFBBDBDFDDHHJXADOXFJHJZRNVKniÐ{{tQFC@OG_KG^@DE@@BAFGfEHADA@G@C@CCE@@@BFBFAF@F@DAB@DBBBBB@BBHBD@BBBBBBDBDBBB@BFDGFMNBDDB@@BB@@@D@@BD@F@B@@@HABA@EBA@AD@FB^DBDB@B@BABCBEBGF@B@B@BHNBH@FCFADAF@DCDEDGDABCB@D@DDPBFBFB@B@DAB@@B@D@BABGBEBA@CACCAAA@@@CB@@@@@D@BABA@CB@B@B@FABADABABEAOCEBEBABADA@BFBBDBBBDB@DABABCBEF@BADDFBD@DDHBF@ADAD@D@F@PAHBDBHBLBLBRFH@F@FBDBFBHBJBJDHBD@D@DADAF@F@FCJCDAH@F@JFF@XAP@R@PBPBRDLBFBJDHFHDJHDFDDDFDFDHBD@D@DDDDDFBF@JALAH@F@FBF@D@TIFEDCHEFCLEHCPKHCL@R@FADCHGDCBCLCHCJAFCLIDCBAA@@AA@@C@@BCBABA@ADCBABC@AB@BABABC@A@A@A@E@AB@@ABANEBADAFEBA@@FABABADABABABABAB@FADABABABABEBA@AA@AA@@AE@C@C@ABCDCFED@BADADAD@FAD@D@@BB@BBBBBBD@BBD@DAHCD@@ADBB@B@BABBD@JFJBBBH@F@DBF@DBDBFDFBD@DBB@R@D@HDB@DAB@D@LDHBTBNFD@B@DABABAFCDAHCFAFAD@DBBBD@JFB@@BFHBDBBBBD@B@B@B@BABAB@FBD@LBD@BBDDDD@BDJ@D@D@DBD@DBBBBDBBBD@HBF@B@@AB@FBB@@BB@@D@BADABAB@@BB@BA@@B@BBBDFB@B@B@B@JCDAB@BABABAB@D@B@@ADGBADABAD@DAFAB@DBB@@B@B@DB@@@BBHA@BB@@B@B@BABBB@@B@D@@@BBBBB@@AB@BA@@FBD@DBLJd^RPBBBB@BAR@@@BAFAFCDHDDBJ@LDDBDBFBB@BADED@D@HDJDB@@BLD"], ["@@B@JDFB@AB@@AA@CAAAGCOIAAECIGCCCCCAAAWOCAAAC@CB@BBDFF@BHJBDFDDDDDBBFDBBFBD@FDJBBBLB"]],
                "encodeOffsets": [[[116600, 30915]], [[116665, 30749]]]
            }
        }, {
            "type": "Feature",
            "id": "421087",
            "properties": {"name": "松滋市", "cp": [111.77818, 30.176037], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@@@@D@BBBBD@BBBDDHBBBBB@B@DAB@DJ@@C@AB@DCB@BA@ADCBABAoO"], ["@@@@AB@@ABCB@@ABC@A@@@E@@@C@C@CBABCBABEBABAB@@A@@@A@@@@@@@@B@@@@@@@@A@@@@@AA@@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@BA@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@A@@B@@@@@@@@@@A@@@@B@@@@A@@@@@@@A@@@@@@@@@A@@@@@@BA@@@@@@@@BA@@A@@@@@@A@@@@@@@A@@@@@@@A@@B@@@@A@@B@@@@@@@@@@@@A@@@@@@@AB@@@@@@A@@@AA@@@@@@@B@@@@@@@@A@@@@@@@A@@B@@@@A@@@A@@B@@@@@@A@@AA@@@AB@@A@A@@@AA@@@@A@A@@@A@@@@B@@@@A@@B@@@@@@A@@@@A@@@@@@@A@@A@@@A@@@@@@BA@@@@@@@@A@@@@@@@@@@AA@@@@@@@@@B@B@@@@@@A@@A@@@@A@@A@@A@@@@@@@A@@@@@AB@@@@A@@@@@@@@BA@@@@@@@A@@A@@@@@@@@B@@@AA@@@@@BA@@@@@A@@@@A@@A@@@@A@@@@@@A@@B@@@@A@@A@@@@@@A@@@@@@@@@@@@A@@@@A@@@@@@A@@@@@AA@@@@B@@@@@@@@@@@BA@@A@@@@@@A@@@@@@@@@@A@@@@@@@@@A@@AA@@A@@@@@@@BA@A@@@@@@@A@@@@@@A@@@@@@@@A@@BA@@@@@@AA@@@@@AB@@@@@AA@@@@A@@@@@@A@@A@@@@@@A@@A@AA@A@@@AA@@@@BA@A@@B@@@A@@A@@@@@A@AA@@@@@A@@@@AB@A@@@@@@@@AA@@@AA@@B@@A@@@@@A@A@A@@A@@A@@A@@@@B@@@@@@A@@B@@A@@A@@A@@@A@@@@AB@@@A@A@@@@@AA@@@@@A@@@A@@@AA@@AA@@A@@@@@@@@@@@@@@AAB@@A@@@A@@@@AA@A@@@A@A@@@@@@BB@@@@@AB@@A@A@@AA@@@@@@AA@@@AA@@@A@@@@CB@A@@A@@@@@A@@@@A@@AB@@AAA@@BA@A@A@@B@@@@@@A@@@@@@BA@A@A@@@A@@A@@@@A@@@AB@AA@@BA@@@BBA@@@@B@@A@@A@@A@@A@@A@A@A@@A@BA@@@@@@AA@@@A@A@@@AB@@@@A@@@A@@B@@A@@A@BAA@BC@A@@@ABA@@@@@@@BB@@@@@B@B@BA@@@A@C@@@AB@@A@@@@BA@@@@@@A@@A@A@A@@@AAAB@@A@AB@@@@@AAAA@@@AB@@A@@@A@@@A@@BA@@@AB@@@@@@A@@A@@@@@A@@@@A@@@A@@A@@AB@@@@@@@B@@@AA@@@@@@@@@@B@@@@@@A@@@@@@@A@@@@@@@@@A@A@@@@@@@@@@AA@@@@@@A@@@@@@@@@@@@@A@@@@@@@@AA@@@@@@A@@@@@@@A@@B@@A@@@AA@@@@AB@@A@A@@@A@@@@@@AA@@@@AA@@@A@@@@@A@A@@@A@@@A@@@@@@@A@@@@@@@@@@@A@@@@@@@A@@@@@@@A@@@A@@@A@@AA@@@@@@@@@AB@@@@@@A@@@@B@@A@@@A@@@@@@@AD@@@@@BA@@@@@@@@@A@@@@@A@@@@@@@A@@AA@@@@@@@@@@@@@A@@@@@@BB@@@@@@B@@@@AB@@@@A@@@@@@@@@@@@BA@@@@@@@@@A@@@@B@@@@@@@@A@@@@@@A@@@@AAA@@@@@@@@@AB@@@@@A@@@@@@A@@@@@@@A@@@@@@@@A@@@@@@@@@@AA@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@AB@@@@@@@AA@@@@B@@@@@@@@A@@@@@@@@B@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@A@ABA@@@@@@@@@@@@@@BA@@@@A@@@@@@A@@@@@@B@@@@@@@AA@@@@@@@A@@@@@@@@@@@A@@B@@@@@AA@@@@@@@@@A@@@A@@@@@@@@@A@@AA@@AA@CACA@BC@ADAD@DABABAB@@CBA@C@@AEBCBAD@B@FCFAB@@ABABCF@@AF@DCDCBC@E@C@A@CAC@CAAAA@CAA@C@CBEAC@CAAA@@ECEAC@CAC@A@C@E@ABEBGDCDADCBA@C@CBE@AC@@AA@AAAA@C@CBC@EDA@EFAB@@A@@@AAECCACAAAA@CAACCCAA@AA@@AAAA@AAA@A@CAA@@@A@@@A@@AEAC@AA@@A@ABA@A@A@A@A@ABA@CBA@CBABABABCDABADAB@@@B@DBDBBBBBBBBB@@B@BBF@@@BA@@@CACACAA@@AA@C@@@AB@@@B@@@B@@@BBBBB@B@@BB@@@@BDBD@B@@@B@@@B@B@@A@@BAA@@ABA@@@A@A@@@A@@B@B@@AB@@@@@B@@A@@@A@E@A@A@AA@@A@AACAA@AAA@@@A@@@A@@@@BA@A@A@A@A@@@C@@@A@@A@@@AACBCAA@A@AA@@AA@@@@@A@CBCDA@@B@@@@ABCJAF@BA@@BA@@B@B@@@B@@@D@@@B@BA@A@ABA@A@A@@@AB@@@@@B@B@@BBBB@@@@@B@@AB@@CB@B@@AB@@@BA@AB@@AB@BA@@@A@A@@@@A@@@@@A@@@@@ACCAA@@A@@@@@A@AB@B@@A@@BADABAD@@A@@B@@A@@@ABA@@@A@@@ABC@A@@@AB@@@BABABABADA@@BAB@D@B@B@@BBBF@B@B@D@@ABCBABAB@@A@A@CDA@@@@B@@CBA@@@@@C@AAA@E@C@@@@@@@AB@@A@AB@@AAA@E@A@@@A@ABAB@B@B@BADAFCFADAFAFABABABABC@C@A@C@A@ABADABFFDBB@D@D@DBBAB@HBH@HBTBL@N@J@H@L@NDHDDHDJBLBLBHDHDFHFNDNDNDFFHFFDLHLDFDDJDHFHJJD@J@H@J@FCHIH@JA@@@@B@HBHCFCDCFAH@FBLBF@D@HAFCJEJGJAP@BAJFHBLFJFH@HAHEHEHEHGDBNFNFJHJHLHLHJBB@@@DBDB@D@D@D@H@BBB@BBD@FALAB@DpP@ABAB@B@BD@B@D@B@BEL@BCBA@ABC@E@A@@A@CI@@@ABCBABA@AB@D@BDNBD@D@BAJD@BBD@D@B@BBBBBB@B@D@BBBBDBB@B@B@DAD@LFBDBBBBBB@BD@BBBDH@F@BDBBBBB@@@BAB@BIFABC@ABC@ABAA@@BE@C@AAAC@A@AB@BABABEBC@CAC@A@ABADAFCP@D@DJ@LBFD^VBFB@BBFLBHFDDHFFDFFJDHBDDHHHHHHDHDLFHBJDNFJFHDHDHDHDHFLFLLDBHFDDJHFFHDJFHDJDHBHBFBF@H@F@H@JAHAFCDAFEFEDEDGBEBE@EBGBGBCBEBEBEDEDEHGFEFGDCDEBADEBCBCFGFBFFD@F@DCBEAG@GBCDED@LBPBPDJ@LANEJANALCHAJBHDDLBJBH@HBH@HBJBHFJFL@B@D@B@FBFBJDHDB@DHFDFJADAJGFAHIHKHODIJORSPQNMDAPONGDAPCLAP@V@VDDAD@BABADA@C@ABGBECOCGGAE@IAAEJKDEFG@ECAGAKAEAECCC@CAECGCEECEEGEAAGIEKEICEEGCEMCIBGBBBBD@FE@A@C@A@E@E@EAEBAAC@AAAA@AAEAGCEACCCCAC@AACBCAC@CCGECEAI@IAECIEEGGGECECEAECC@ACEJELEHGFIDKDKBMBIDQBKBMBI@E@CGAGCGIGKCGEGEIEEEGEKAEEICCAACA@CAC@C@C@CBI@ABQBIBG@GBG@IBEBKBC@ADCBC@C@AEEKGIGKEEEEIAAAAAASBCAIBGBMBI@MBC@ICG@IC@@A@@@AB@@@@A@A@@@A@A@AAAA@@@A@@AA@AA@A@@@A@"]],
                "encodeOffsets": [[[114252, 30872]], [[114495, 30619]]]
            }
        }, {
            "type": "Feature",
            "id": "421081",
            "properties": {"name": "石首市", "cp": [112.50887, 29.716437], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@AECBG@CAGCICGFBBBBABG@A@@FL@JAJAT@@@"], ["@@BEBCHEBABAB@@ACK@EDEDM@KEIAEAAACEKEE@A@@B@BBDBBAXODCDAZ[D@\\EBD@F@J@FAPBXDB@@EA@A@AAAC@A@AB@BABBFDD@HEAASCCA@A@@BAB@PFbHJ@DB@@@BCBC@BFL@F@FBBBHBDBD@HEHGDC@ABC@A@EBABCBE@C@CBA@CB@@CBAAC@A@KAIBEAMGKMIKEOCI@C@E@EAAAAA@CAA@C@KDI@KJEHCNARBVBVDPB@@JDBCBABADCDABABADBBABAACACCACACAAACAAACAACBCBCBABCBG@CAECAC@AAC@A@CAAA@C@C@CBABEBCBA@ACCA@CBIBAAA@CACAC@C@AACACAAC@C@C@CBCACACA@CAACA@C@A@A@ABA@ACCCC@AAAACAAAAAA@CCCCCAC@CBAB@DBDBDABABABEAAAA@CAC@CACCAC@A@C@C@A@C@EACCAAAAACAA@AA@CCCAAACAACEAA@ABC@ABCACAACAC@A@@A@A@CBA@A@AAAC@ABA@@ABC@@@AACACACCAAAAACACBADAB@DADADCDC@C@E@A@CAE@C@ACC@AAACCAAAC@ADAD@BADADAB@@CHCDCBCBA@CDEDBBCBEBC@AAEAEEGCAAGAA@AD@B@BCDA@CBCBGBCBCBABCBC@E@EBCBEBI@@@@AA@AAC@CAECCA@ACAA@@ACAECCA@C@@AAA@CCEAACCCA@A@C@AAA@@@@@ABA@C@EDEBGBIDA@@@A@AB@BA@@@A@AB@AA@A@ABA@@@@@@@AB@@A@ABAB@BAB@B@B@@@F@D@D@@@B@@@@@BAB@@@B@@AB@@A@@BE@CBC@E@CBC@ABA@A@ABA@A@A@C@C@A@EAAAC@A@A@A@ABABA@ABA@ABA@CBA@A@@@CAC@AACACAA@E@@@@@@BA@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@AA@@@A@AA@@AAA@AAA@AAC@@AAAACCAA@AA@AA@@AA@A@A@AAC@A@C@C@C@C@C@AAC@@AAACAA@@AAACAAAAAA@AA@ACAAAAACA@AAAAAACAE@A@AA@@@A@@AA@@@CAC@A@AA@AGAA@@CAAB@@AH@BA@EGCCGGCAAEIKEIAAAAA@A@A@@@A@C@C@CBA@C@C@C@@@CBC@EBG@E@EBEAA@E@CAC@CA@AC@CAACAEAEAG@E@A@A@@A@AAA@CACACAC@AAA@CAEAA@@@C@ABC@@@AAA@@AAA@A@AAA@AAAAA@A@@@CAE@A@CAC@A@@@@@@@AAA@@@AA@@@@@@BAB@@@B@@AFAB@DAF@BAB@D@BBH@J@DBN@D@DBD@BBB@@BBB@BBB@B@B@BBDDBBBB@BBB@B@@BDBBBDBF@B@@BB@B@BBB@BBDBBBD@BBB@B@BBF@D@B@B@BAB@B@BAD@B@@BB@B@B@BA@CDADA@@BADCB@BABA@@@A@A@A@A@AAA@A@C@@BA@C@ABA@A@ABA@ABA@CBA@CBCB@@CBA@ABA@ABAB@@CBABA@AB@@@BA@@@ABA@CB@@G@A@AAA@AAA@@@A@@@ABABAB@@EDA@@B@@@@AB@BAFABABAB@BAB@BAB@B@B@@@DBB@B@DBDBBBD@@BBBDFFB@BBBBBB@DBBBDBD@D@BBB@BBD@B@BBBBD@@BB@BBBBDBF@B@@BB@B@DBB@B@D@B@B@@@D@BFFJHLHHDDHDHDH@N@HBJDFDDHDLALAJCJAJ@J@LDF@HN@LCLALANAJAH@F@D@FAHBF@F@FBFBFBDDFDDBBFDDDFDFBBBFBFBBBDBFBFDFDJDJFHFHFFDBFDF@DBFDDBFDFDFBBFFFFBDDDDFDFDDDFBDBFBDBDDFBHBFBDDHDDDHDLDLBLLAN@DA@ABA@AFCB@ZJVHDBNDDBB@BA@EBEBCDAJADD@FBFHBJBDBF@@B@D@D@BNDPCH@JBLDRDPCPEREHGCGBCHEPEFABCBADCDEBCBABC"]],
                "encodeOffsets": [[[115444, 30542]], [[115302, 30625]]]
            }
        }],
        "UTF8Encoding": true
    });
}));