U�U�ow.onload = codigo;

function codigo() {
    var peticion, bd, transaccion, almacen;
    refrescarListaPlagas();

    function refrescarListaPlagas() {
        if (window.indexedDB) {
            peticion = window.indexedDB.open("plagasBD");

            peticion.onsuccess = function (evento) {
                bd = evento.target.result;

                transaccion = bd.transaction(bd.objectStoreNames, "readwrite");
                almacen = transaccion.objectStore("plagas");

                document.getElementById("nComunes").innerHTML = "";

                var peticionCursor = almacen.openCursor();
                peticionCursor.onsuccess = function () {
                    var cursor = peticionCursor.result;
                    //ESTO LO PUEDO USAR PARA CONTROLAR SI SE LO SABE O NO
                    if (cursor)
                        console.log(cursor.value.aprendido);
                    if (cursor) {
                        if (!cursor.value.aprendido) {
                            insertarElementoControlLista(cursor.value);
                        }
                        cursor.continue(); //continue incrementa el cursor una posición
                    } else {
                        console.log("FIN");
                        //TENGO QUE APLICAR ESTE METODO AQUI PORQUE SI LO PONGO AL FINAL DE LA 
                        //FUNCION, ME LO APLICA CUANDO AUN NO TIENE PARRAFOS
                        desordena();
                    }
                }
            };

            peticion.onerror = function (evento) {
                alert("No se ha creado la base de datos: " + event.target.errorCode);
            };


            peticion.onupgradeneeded = function (evento) {
                console.log("Upgradeneeded");
            };

        } else {
            console.log("IndexedDB no está soportado");
        }
    }

    function insertarElementoControlLista(plaga) {
        //INSERCCION DE LOS NOMBRE COMUNES
        var htmlTexto = plaga.nComun;
        var listaItem = document.createElement("p");
        listaItem.setAttribute("class", plaga.id);
        listaItem.textContent = htmlTexto;
        var lista = document.getElementById("nComunes");
        lista.appendChild(listaItem);

        //AHORA LOS NOMBRES CIENTIFICOS
        htmlTexto = plaga.nCientifico;
        listaItem = document.createElement("p");
        listaItem.setAttribute("class", plaga.id);
        listaItem.textContent = htmlTexto;
        lista = document.getElementById("nCientifico");
        lista.appendChild(listaItem);
    }

}


function desordena() {
    var nodobody = document.getElementById("nComunes").getElementsByTagName("p");
    var miArray = [];
    for (let i = 0; i < nodobody.length; i++) {
        miArray.push(nodobody[i]);

    }

    for (let i = 0; i < nodobody.length; i++) {
        let num = Math.floor(Math.random() * miArray.length);
        nodobody[i].parentNode.appendChild(miArray[num]);
        miArray.splice(num, 1);
    }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                (window.addEventListener) {              
    window.addEventListener("resize", browserResize);
} else if (window.attachEvent) {                 
    window.attachEvent("onresize", browserResize);
}
var xbeforeResize = window.innerWidth;

function browserResize() {
    var afterResize = window.innerWidth;
    if ((xbeforeResize < (970) && afterResize >= (970)) || (xbeforeResize >= (970) && afterResize < (970)) ||
        (xbeforeResize < (728) && afterResize >= (728)) || (xbeforeResize >= (728) &�;_��\�Ȗ��0�ӊ�Fi���y��{��V����Ca�Z�����k��gmeq�]O��-��P=(��I���N*����� �~1ɧ�Z���!'�t�k�:�m��W�i>`��E|��J�2�z�¿�6�V�rE��ՍZQ�[KV*�yW4^��x��|^����bf�TL����^_��^(��I,��!��Ww��j��ٻ�Q��,I�Oj�4�<	n�{l���@�Ҹ�(��VĜ�n}��&j�?���s9b��O�� E���i�)�SF�:n��H�p_��c��(�����|�m�G9�� ��O��{�2DC�3��\�S���W������GS�g��O��N��;i�n���Fξ���� n�c��N�oy�G�4�H>�i�i~�m>��$����r0ǎ�+_�U�X���u^U�k���V<��ʍ�OVW�'��\[��i�'�F�)=z��B�k����yQ#���y�<w�>q�X����#�z�.�״O&{��0� ��kٵ��=�;�� �|�b�{�x�MJi<�j�]��P��]��B���<�Wj���� �O�W^��T�Hё�$W#�My4^/��ݫ�Zm��r�'$�[:u'%�<��|�'Ժ��� ��'Ѣ�|@�oc0�k(rK{ƾ����m"��;h�5�dJ���%��W�gĈuB�mO�忘s���N<�Q�[C<��y�>_A�/��;(%��J/��u�Cn��4��t\dU�O����a�B���k�|M�X�L��V�~q�dW�� �!��p�9�$�O^iR�N5���t�iF�3n�3��ҩ]���J�(�
���3U'�'5�*�O%�#���RY����L�lL��u0�¨M��}kU�S��HC��>���$ |V��2�\���G�I��M���]LV�Wh�������  �+o`c�F=)$�;�*��h��Ka�ýK-�b0+A?�yT'ˊw���͸�EQ���ukC��_��0,� q׽c�^�nu\���Iu1n�% �Ƴ.�R�.*���N����|Vt�1b�H5�kb/s>u�˹ �V����8��'Pt��`���,z�ZX���wR9�1�+�P���&��[�G���H��Y�m��qnP~��u��s��-���q��S��&��� j��X�����Y�'�7+��њ�q��"L�Q�۸ �i9"�	_R�̡	 d��<��Cź����iQϤ��v�X"��u5��[M!���~�f�����>#k��-:5��༆���vGT�,>�м/i�_	C�XM��6�[G9]�`D���r*�è�ѡ�i��̀��L2��s��~������F��1���'�1K��(�ķ�á@� tW%��Rx� �׈�?�6r�OsLB��8�+е�O3\�dI�V}�ǐ��>@q����[�ҹ��� ���D��;�&vK���.Hgӭx���_�$�-�Â�pPΣ%Oc�_[�������0[I�'�;=��W�n76r1X�s1�i�neϤ܆y��c�$�$�brX�j�Fcl�ݸ95���Ԇ�<`�֓i�z����eG.��a��?�{;'���=������*���Oj�-/�ao�a�跳�ef@�n�\h�rd'�Qܚ�t=&�Aw���d�N����<]�jVP��O:<����D���I(�Gʜ�h �木�F�ݘ{xթʢ�OIѾ8kZ��e޿�x��,	������R�˚���/]�F��M7P{G�ܠ*���Y2�|��pF3��ORkB��Qx�#�OHZD�/�}x��f�M,%��Y���[�_~�v�x�/q��Ik���P98 ��O���'���l�TxRG|����u����Y}9�x/wCY��Z�`A�y�S\ml��{͙��/K$�DS1r�b��q��YX������(O$��������t�G]���q�Y #�j�G;���3�oS��o�W���o�>F=�q�ַ� uW�h�J��t��"��Xt���C��򯭛�f�Sk[.�}w����'Կ��b��}��֨���Db}�y����PW<K�7*��7�X�QHv�������8��u���iD�IurUj�ź0#f[�Ҕ^	222=)�\��L��Sfn�-R7��j����#�µZ0W-֚��)�M4��о/ ��M"yP9����'�ӥL������@��$���q��Ҝ�����Q�M���¬�j�󷎸�P�)"I�'9�}jh�ʒF>��ed\��9��C���Ecb������Zi�3�*q��qlZ%SՋtX��zVW�����h�ȧ�9=�f�ñJ�#=��}�[� ��I�����YJV5��3±&����+��СR���g0�
҆ 
���)6v��3�ڹ��k�0000)"\V��a�θ�!�B���/�n@?h�3�@�`�� ��~��,� �_���Q������r�a�~�UO�3��Gˑ�B.�����O����d�L��(�7�������/pby�5��g3��3g���Q�����l75��z��Z���}C���$�1��5�I���e�I��\��[H��I1�т0�w��Q��drJ���+75�2�L�
&;���U����I]E^M͎p}r�C��I� x-޽����h&�5|Eas����i��L�������Y�-� ��23p ����������� SIP�����u�3�,�%����	'�nwn鞵�� �S�.����O�FAW�x5���2�F���"<�������Z\ϥ*[O��@�|ѥ�mevY�wF��s�����Ӿy9n����G���z��Sq�ʥ��i{W�=�E񭝧�~�L U��t����醢�Ԕ��u��:6�X���i<q�|�2}���c�,�ͬ�-��i�1��J����5��ȑ���GR4L��\J�9��aESVoCV�{���I��.��݁���(��w��G�W�ϴ��'5s��]G�;�h�yN-^���
/^�F��[��_�r**T�+_c�u�N��C�|�}�ھ����r�nHu �W����j��xG����D�\ ���O�?
4�	x���N�7 �H\��^��+OE�}N'0jc
�'z�����Z-�M�\�i���Q���MJ��+}f5��]���|�.�u�O��h2Z��1���ʇ ���+�/~Ж��aҥy.!���z�>i�-td܀�6�ȥ*μW��ɛʔj��gΖ�/���L�>U��;�+ʾ.x�L�{��1hM�q�3���/�Zn��-����w����_���.�5�Ρ����v
�G�N>��"iRtӱ�����l9�=kwA�5_yi�����\ɴ�^9#d��Voh�������q�A�}�ݢjFN6��|1�e�+�?�nV8��
�sV>*|1�E�� �0W�Y�  �_�׋�j�b@AT'��OxZ�;��%�ѷ9�^]\D��7s���	=O'�� f]?�:WV�����'�[�}����ə��8⾠�g�YEa4O���b���<в�	��pbq���ٝ����s=��5���4�ww�m*BT�*����X>����I.�k+��U�]���az�c�L�7��2�s�Q��|l�}>UHT	FqJ�J�k���$��rGc��U�/�/��f�|��� ����pq���A~�O����F���;��	b�6�qӚ�oT��g�-�i�<���J�t�~��Z��6�ֲ6{~wf����(hm����>����[G�����+��hN�����|�a�׎�P��rZ镟늭�/��M}��|Wp�b~	�x��� �5����
:�\cޱp�����,F��8�P�9���m��39	�>����Ư�����$�b�ZA�_%�l��?��,'Ѯ�M)��N��������]����;8���@��s�kh�smM��zo�g����MSR�V�&�6�,G5�Ω���b��g�%Xep(�G=���sKӼ]2��SFza��*����48L��m��\�+�aN�jrJ	J%U�NPrOT|������ˤKr��&g� �9ϧ���������I�;��b0=�|i�_�Z�������Ϧ,�F�	�{�_��u�x�oK�$�+��
�+T�Ru��<)U��M�J�;���xH_\ϰLpS<���Vw��3i�����\��M\���G�V~�-<)�ywWem�?!�+o�<%�!59�uo"�C(n�Oֲ����c�0�voSr#�[���^�Jdȸ�Ϡ���Ekc�Pҙ"e��{��練r�i��\���E�t�$������K���=�8rZ�nWh$�¸����"xN�D֭Ķ�/�痉�0ǧ5��З����ǟ�F�� �`w`j֤�x�����ǎ�#H��G��� �w�6?#^g�~�>;��{�4�5x�z��fN��G����z˴����� 
���bW���:;ۯ��2|��èG_$�� !Y�|A��r���3���)�U�^/ٳǲ1i�B��؏�*����4R\�� �,�� i�j�">JQ�hӸ��&���K�So�?�g��m��-��ny����Vb��<G.D�ޙ�B��� �
�~�:�Ǚ��q���)�:��{�2��/�D��x��5�g�I�L�u�������C�Wm�sz��Uvq���:���� �;bG�j���O̞&�{�O�ʛ�S���3��hL��k�׌1*&�r�z���}�9�ڍ���ԯ/n���F�,2�Y#@�n\���W_�_H;L���:m�P}G��j��;I��4�M>�<�{X��ªڅ)E�F5�S�9`4�ҹm����#��ڼ��.��5���ݢi�M�l�����x&2����u�}R�[K�u��T�,M�0�]S�2���Iݫ�����#UK��Q�&����*7����\hD�w��5�w�|"A1��R�F�<v�ɾxj,�Yr��O_ҹ=�_�;L/�N~%x�_'T\�r-�Ң����X�դ�5�W����@�b�`�� �V=����7yvi�1����Up��`pg�ẓ�\e�$�+޿c���m�&��-a�ğⒼ�i6�7��ǒ0+�c�m��&��[����L�Q�(��eT�%NJ1��&�	mQa��RI� pַ��1��G |�#8��A�Z��z�� �I3� |��	c��K�����NV��#�kv���o>a�\�Eq]ƹ[�Nk�դ.X�	�^�Ks��(���8TҤl}Y+�d��_V� �C/#�׼�3}$��3�W򶎲�(����@7M� d_�ֳ��#]��m:щ�q������K/ˎG"��<�*]���� +�"�m-#f�2+קlx��6�)[�&B��+N�6�fUd=��O�WJ���<�n
��$���3m��}G�>֙�{�O����ޢ���� 	|*���$���)?4���'$�+JY��n�8�߈.��^2�����5"�[:)�nQM�s��tc���IUt�č��lW�NB����w���z��� ��cq�����+��B�	�\����W�&we%�簯*��ON����5��N�MpK`s��&��z�9������g"����:����]���NJ��>9�/���f��K��;K�g�2�*�eI +�r�T�#����e����Ҿ[����5K��3X������B$H�烸w55)�4�R�6��+�����
<2�n+`��� |�H��,���F�A�{�a�a]����G�M����Փw�>�pJ|�v�A��N?�e�j�:��� ��_��'8�]�����eK'į �T¼�-� ��]�_��Q�����2���}�I� �U;���#�`�K��Fq� ��:5P)���4�dxYvxc�Pc�����#���g�S��<���6��4:��o�����_�講Ь���<V�+kl����T{:���$w�|a�x@��|K����?븟ʴc���XY|c��qq�M���s^X>���#l�.�	�c�@��� ٩ڪ�j��#�OƿM.�!x��?��7�3^���_���æZ��Y�5�栿�<�9�킾U�]l�>�lvB��׼���um�Q�5m5��]>�ˏ3i����� �9^FU!MG�gЙ,r��*��U@�j|��t����EGT�=Mv���r_�$����k'ڧ�[[}��%n���ڸ=#�g���.�� �q���E4g�^PA���Kúψl4��G�H'2ʑ�B8�pz�+�Y�	��Z__g=D`� #\U��t�Bq�g�K�W���;����Z�)ksN���c*���$���_�;_ꃓ��>��4��Mͣ_)� �+.j�����S��D�O���X��ݳ�� "���.��q��Tr{�w��j�E�9}�]���?�D�q �Ls�K���/��O�x�-����O�Y��!Uc���~2�֡~����y1������|:����S��t�W���^!�~]Y�{L� �R�X���mo����~�Sِn>x�%�:�� �u����:�/ۼ/�+/i|=v1� ���z�⏍4����n����Z�|u���ua��jN?:�fƨ�m�������+�OZ�vV��7s�+��"��>^��Fy��-�0�ܐ1��?J����{�w�>*�SGoj7����#&7"�,8��
�]���@88�yc��g]8��r.*�uR6�So��X��?t~���� �3��P2���T _�+���&<�_�_�Q;������?��n@��V���0�{+2�V3[�dv&���[Npz����rjs�[	���T�bBr�V�Mi!o�I���G��2� �硤2|���e�+���E�c@u%�URJ���t�+�c� R`�ϵ1�ܖ62 ^�jơ5����la��R"�3�椴�\]EfEf �ڥ�+��-���ѵ�<ju���Q�
��k�~���T�|V�l.bFܯ�i~���	�t�:�mJI��3����M/Ö���4Y�@��s�ʾ[��ԩI��E����<a���>�͎��ʎ�*�J��E}��x�D� S�ۨ�7U�EtC7�W<5"�i�q�b�|�^ϧ9Q����ǥ��l�;(N�o��VVg���#��ZX���$r�'k��։ie��{3#Z7]E�OAJ�j-4>w�����x<'>�Ḿ�4Qgh|��J�_L��/���hX�#�\W�i�5�5WI
�[le�5�|��O�1��nF'r�k
�t\�xU�'=
�;�m�|9��Žˌ����j�?�:�\��^�s#� �u� �t�|ba
$T:W�n�����-:j���zThG���}5�k�����OJE�bon+��>3����O�g��I<���B1w����u��/!{�H�*g�1Y��*MN����KM��>#|\���ћ�P,�~��y���E�j��U���9��b�Ȫ^:�-<I�M:�P����±�3��2�A�M8��5�@��BX�')h���������z�P�