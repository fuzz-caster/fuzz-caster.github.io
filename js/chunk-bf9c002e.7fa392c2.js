(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf9c002e"],{"0225":function(t,e,a){"use strict";var n={min:61,max:88},i={min:1006.6,max:1013.4},r={min:3,max:14},s={min:24.5,max:29.9};e["a"]={kelembapanUdara:n,tekananUdara:i,kecepatanAngin:r,suhu:s}},2677:function(t,e,a){"use strict";var n=a("8654"),i=(a("7e63"),a("d9bd")),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},s={name:"v-textarea",extends:n["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return r({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||n["a"].options.computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(i["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"}},genInput:function(){var t=n["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){n["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}},o=a("7cf7"),l=a("ab6d");a.d(e,"a",function(){return u});var u={functional:!0,$_wrapperFor:n["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var a=e.props,r=e.data,c=e.slots,d=e.parent;Object(l["a"])(r);var m=Object(o["a"])(c(),t);return a.textarea&&Object(i["d"])("<v-text-field textarea>","<v-textarea outline>",u,d),a.multiLine&&Object(i["d"])("<v-text-field multi-line>","<v-textarea>",u,d),a.textarea||a.multiLine?(r.attrs.outline=a.textarea,t(s,r,m)):t(n["a"],r,m)}}},"504c":function(t,e,a){var n=a("9e1e"),i=a("0d58"),r=a("6821"),s=a("52a7").f;t.exports=function(t){return function(e){var a,o=r(e),l=i(o),u=l.length,c=0,d=[];while(u>c)a=l[c++],n&&!s.call(o,a)||d.push(t?[a,o[a]]:o[a]);return d}}},"5fdb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isForm?a("p-form",{on:{result:t.onResult}}):a("p-result",{attrs:{result:t.mamdaniResult},on:{repeat:t.toggleMode}})],1)},i=[],r=a("cebc"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-container",{staticClass:"cyan grey lighten-3",attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",md12:""}},[a("div",{staticClass:"headline"},[t._v("Hasil Prediksi")]),a("v-btn",{attrs:{large:"",dark:"",depressed:"",color:"indigo darken-2"},on:{click:function(e){return t.$emit("repeat")}}},[t._v("\n          Ulangi\n        ")])],1)],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",md10:"","offset-md2":""}},[a("div",{staticClass:"display-2 py-2"},[t._v("\n          "+t._s(t.result.label)+"\n        ")]),a("div",{staticClass:"display-1 font-weight-light"},[t._v("\n          Nilai Defuzzifikasi: "+t._s(t.result.result.toFixed(4))+"\n        ")]),a("div",{staticClass:"display-1 font-weight-light mb-4"},[t._v("\n          Tingkat Keanggotaan: "+t._s((100*t.result.min).toFixed(4))+" %\n        ")]),a("div",{staticClass:"headline font-weight-light py-3"},[t._v("\n          Tekanan Udara: "+t._s(t.result.tekananUdara.toFixed(4))+"\n        ")]),a("v-divider"),a("div",{staticClass:"headline font-weight-light py-3"},[t._v("\n          Kelembapan: "+t._s(t.result.kelembapanUdara.toFixed(4))+"\n        ")]),a("v-divider"),a("div",{staticClass:"headline font-weight-light py-3"},[t._v("\n          Kecepatan Angin: "+t._s(t.result.kecepatanAngin.toFixed(4))+"\n        ")]),a("v-divider"),a("div",{staticClass:"headline font-weight-light py-3"},[t._v("\n          Suhu: "+t._s(t.result.suhu.toFixed(4))+"\n        ")]),a("v-divider"),a("div",{staticClass:"body-1 py-3"},[t._v("\n          Aturan: "+t._s(t.result.ruleFormatted)+"\n        ")])],1)],1)],1)],1)},o=[],l={name:"PResult",props:["result"]},u=l,c=a("2877"),d=a("6544"),m=a.n(d),p=a("8336"),f=a("a523"),v=a("ce7e"),h=a("0e8f"),g=a("a722"),b=Object(c["a"])(u,s,o,!1,null,null,null),x=b.exports;m()(b,{VBtn:p["a"],VContainer:f["a"],VDivider:v["a"],VFlex:h["a"],VLayout:g["a"]});var k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-container",{staticClass:"cyan grey lighten-3",attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",md12:""}},[a("div",{staticClass:"headline"},[t._v("Prediksi")]),a("div",{staticClass:"body-1"},[t._v("Input data yang akan diprediksi")]),a("v-btn",{attrs:{large:"",dark:"",depressed:"",color:"indigo darken-2"},on:{click:t.mamdani}},[t._v("\n          Jalankan\n          "),a("v-icon",{attrs:{right:""}},[t._v("create")])],1)],1)],1)],1),a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",md6:"","offset-md3":""}},[a("v-card",[a("v-card-text",[a("v-text-field",{attrs:{type:"date",label:"Tanggal"},model:{value:t.item.tanggal,callback:function(e){t.$set(t.item,"tanggal",e)},expression:"item.tanggal"}}),a("v-text-field",{attrs:{type:"number",label:"Kelembapan Udara"},model:{value:t.item.kelembapanUdara,callback:function(e){t.$set(t.item,"kelembapanUdara",t._n(e))},expression:"item.kelembapanUdara"}}),a("v-text-field",{attrs:{type:"number",label:"Tekanan Udara",step:"0.01"},model:{value:t.item.tekananUdara,callback:function(e){t.$set(t.item,"tekananUdara",t._n(e))},expression:"item.tekananUdara"}}),a("v-text-field",{attrs:{type:"number",label:"Kecepatan Angin"},model:{value:t.item.kecepatanAngin,callback:function(e){t.$set(t.item,"kecepatanAngin",t._n(e))},expression:"item.kecepatanAngin"}}),a("v-text-field",{attrs:{type:"number",step:"0.1",label:"Suhu"},model:{value:t.item.suhu,callback:function(e){t.$set(t.item,"suhu",t._n(e))},expression:"item.suhu"}})],1)],1)],1)],1)],1)],1)},A=[],N=(a("96cf"),a("3b8d")),y=a("c1df"),G=a.n(y),w=a("cd28"),I=a("817a"),S=a("0225"),_=a("e738");function C(t){return E.apply(this,arguments)}function E(){return E=Object(N["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_["a"].post("/mamdani",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}},t)})),E.apply(this,arguments)}var L={name:"PForm",data:function(){return{item:{tanggal:G()().format("YYYY-MM-DD"),suhu:28,kecepatanAngin:9,kelembapanUdara:67,tekananUdara:1011,keterangan:I["keterangan"][0]},options:I,constraints:S["a"]}},methods:{mamdani:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=Object(r["a"])({},this.item),w["a"].$emit("loading-on"),void 0,t.prev=3,t.next=6,C(e);case 6:a=t.sent,w["a"].$emit("success","Sukses melakukan prediksi"),w["a"].$emit("loading-off"),this.$emit("result",a),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](3),console.log(t.t0),w["a"].$emit("error","Gagal melakukan prediksi");case 16:return t.prev=16,w["a"].$emit("loading-off"),t.finish(16);case 19:case"end":return t.stop()}},t,this,[[3,12,16,19]])}));function e(){return t.apply(this,arguments)}return e}()}},R=L,H=a("b0af"),T=a("99d9"),D=a("132d"),O=a("2677"),U=Object(c["a"])(R,k,A,!1,null,null,null),F=U.exports;m()(U,{VBtn:p["a"],VCard:H["a"],VCardText:T["b"],VContainer:f["a"],VFlex:h["a"],VIcon:D["a"],VLayout:g["a"],VTextField:O["a"]});var V={suhu:.7037037037037034,tekananUdara:.7058823529411745,kelembapanUdara:.5714285714285714,kecepatanAngin:.8333333333333334,min:.5714285714285714,ruleFormatted:"SUHU(MID)-TEKANAN_UDARA(MID)-KECEPATAN_ANGIN(MID)-KELEMBAPAN(LOW)",label:"CERAH",result:71.42857142857143},j={name:"Prediksi",components:{PResult:x,PForm:F},data:function(){return{mamdaniResult:V,isForm:!0}},methods:{toggleMode:function(){this.isForm=!this.isForm},onResult:function(t){this.mamdaniResult=Object(r["a"])({},t),this.isForm=!1}}},M=j,$=Object(c["a"])(M,n,i,!1,null,null,null);e["default"]=$.exports},"7e63":function(t,e,a){},"817a":function(t,e,a){"use strict";a.r(e);var n,i,r,s,o;a("ac6a"),a("8615");(function(t){t["RENDAH"]="RENDAH",t["SEDANG"]="SEDANG",t["TINGGI"]="TINGGI"})(n||(n={})),function(t){t["ANGIN_SEPOI"]="ANGIN SEPOI",t["ANGIN_SEDANG"]="ANGIN SEDANG",t["ANGIN_KENCANG"]="ANGIN KENCANG"}(i||(i={})),function(t){t["RENDAH"]="RENDAH",t["SEDANG"]="SEDANG",t["TINGGI"]="TINGGI"}(r||(r={})),function(t){t["RENDAH"]="RENDAH",t["SEDANG"]="SEDANG",t["TINGGI"]="TINGGI"}(s||(s={})),function(t){t["HUJAN_RINGAN"]="HUJAN RINGAN",t["HUJAN"]="HUJAN",t["SEBAGAIAN_CERAH"]="SEBAGAIAN CERAH",t["CERAH"]="CERAH"}(o||(o={})),a.d(e,"suhu",function(){return l}),a.d(e,"kecepatanAngin",function(){return u}),a.d(e,"kelembapan",function(){return c}),a.d(e,"tekananUdara",function(){return d}),a.d(e,"keterangan",function(){return m});var l=Object.values(n),u=Object.values(i),c=Object.values(r),d=Object.values(s),m=Object.values(o)},8615:function(t,e,a){var n=a("5ca1"),i=a("504c")(!1);n(n.S,"Object",{values:function(t){return i(t)}})},ac6a:function(t,e,a){for(var n=a("cadf"),i=a("0d58"),r=a("2aba"),s=a("7726"),o=a("32e9"),l=a("84f2"),u=a("2b4c"),c=u("iterator"),d=u("toStringTag"),m=l.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(p),v=0;v<f.length;v++){var h,g=f[v],b=p[g],x=s[g],k=x&&x.prototype;if(k&&(k[c]||o(k,c,m),k[d]||o(k,d,g),l[g]=m,b))for(h in n)k[h]||r(k,h,n[h],!0)}},cd28:function(t,e,a){"use strict";var n=a("2b0e"),i=new n["default"];e["a"]=i}}]);
//# sourceMappingURL=chunk-bf9c002e.7fa392c2.js.map