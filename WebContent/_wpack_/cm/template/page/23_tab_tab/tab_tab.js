/*amd /cm/template/page/23_tab_tab/tab_tab.xml 22383 a9e70febed94a58dc9a6d89f143098cc55fa545e00948bbb27d0243561a365a2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8',standalone:'no'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col5',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col6',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col7',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col8',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col10',name:'name10'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'dataList2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'col1',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col2',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col3',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col4',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'col9',name:'name9'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){        
			scwin.onpageload = function() {	
				$(".btn_fav").click(function(){
					$(".btn_fav").toggleClass("on");
				});
			};			
		
		
}}}]},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.tb .w2tb_td,.tb .w2tb_th{height:23px}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_fav',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]},{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'',label:'화면타이틀',style:'',tagname:''}},{T:1,N:'xf:group',A:{class:'breadcrumb',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',tagname:'ul'},E:[{T:1,N:'xf:group',A:{class:'home',id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Home'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:anchor',A:{id:'',outerDiv:'false',style:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2Depth Menu'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',tagname:'li'},E:[{T:1,N:'w2:span',A:{id:'',label:'3Depth Menu',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbcbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'tbc',confirmFalseAction:'new',confirmTrueAction:'exist',id:'',style:'',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'탭1',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'탭2',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'탭3',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs4',label:'탭4',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs5',label:'탭5',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs6',label:'탭6',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs7',label:'탭7',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'ly_column',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서브타이틀',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'gvw',dataList:'data:dataList2',defaultCellHeight:'26',focusMode:'row',id:'',keepDefaultColumnWidth:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 100px;',visibleRowNum:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column8',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column7',value:'타이틀',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col9',blockSelect:'false',displayMode:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'ly_column',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서브타이틀',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'gvw',dataList:'data:dataList2',defaultCellHeight:'26',focusMode:'row',id:'',keepDefaultColumnWidth:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 100px;',visibleRowNum:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column8',value:'타이틀',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column7',value:'타이틀',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'col9',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'ly_column',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'text-align: center;',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:23px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:23px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac',style:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'ly_column',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'gvw',dataList:'data:dataList2',defaultCellHeight:'26',focusMode:'row',id:'',keepDefaultColumnWidth:'true',rowNumHeaderValue:'No',rowNumVisible:'true',rowNumWidth:'50',rowStatusHeaderValue:'상태',rowStatusVisible:'true',rowStatusWidth:'50',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'height: 100px;',visibleRowNum:'10'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column8',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',removeBorderStyle:'false',value:'타이틀',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col2',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col3',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col4',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col9',inputType:'text',removeBorderStyle:'false',width:'70'}}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:'height:0px'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content4',style:'height:0px'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content5',style:'height:0px'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content6',style:'height:0px'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content7',style:'height:0px'}}]}]},{T:1,N:'xf:group',A:{class:'tbcbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'tbc',confirmFalseAction:'new',confirmTrueAction:'exist',id:'',style:'',tabScroll:'',useConfirmMessage:'false',useMoveNextTabFocus:'false',useTabKeyOnly:'true'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'탭1',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'탭2',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs3',label:'탭3',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs4',label:'탭4',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs5',label:'탭5',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs6',label:'탭6',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs7',label:'탭7',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'ly_column col_5',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서브타이틀',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'req',id:'',placeholder:'',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',ref:'',renderType:'',style:'width:100%;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'flex',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',style:'width:100%;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm btn_search ',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'ly_column col_5',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'서브타이틀',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'tblbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptive:'layout',adaptiveThreshold:'600',class:'w2tb tbl',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'req',id:'',placeholder:'',style:'width:100%;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'',ref:'',renderType:'',style:'width:100%;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'xf:value'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'flex',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'',placeholder:'',style:'width:100%;'}},{T:1,N:'xf:trigger',A:{class:'btn_cm btn_search ',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'테이블헤더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:'height:0px'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content4',style:'height:0px'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content5',style:'height:0px'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content6',style:'height:0px'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content7',style:'height:0px'}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업무버튼'}]}]},{T:1,N:'w2:textbox',A:{class:'bar_btndiv',id:'',label:'',style:''}},{T:1,N:'xf:trigger',A:{class:'btn_cm pt',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]}]}]}]}]}]}]})