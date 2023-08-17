/*amd /ui/TEMP/Common/Common_Shortcut.xml 8094 430c33c1e4d8d5ef4c3696650eaf26e2a3dd3bbf0a8a481d2ca6d0a341da9684 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'title',name:'화면타이틀',dataType:'text'}},{T:1,N:'w2:key',A:{id:'desc',name:'화면설명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'title',E:[{T:4,cdata:'\r\nCommon - 단축키기능  \r\n						'}]},{T:1,N:'desc',E:[{T:4,cdata:'\r\n<pre style="font-size:14px;">\r\n화면 단위로 단축키를 지정 할 수 있다. \r\n - 메뉴데이터 초기 셋팅 시 단축키 정보를 가져와서 기본적으로 셋팅한다. (현재는 shortcut.json 파일 기준)\r\n - 기본적으로 설정된 단축키 화면에서는 별도의 호출 없이, 단축키 기능 사용이 가능하다. (해당정보는 shortcut.json 파일 기준)  \r\n - 추가로 특정 화면에서 단축키 기능을 수행하기 위한 방법으로 제약조건이 존재한다. \r\n * 제약조건 1) 해당 함수는 MDI 를 통해서 로딩 된 업무화면 or wframe 모달 팝업 일 경우에만 처리 가능하다. (일반 브라우저 팝업에서는 처리 불가)  \r\n * 제약조건 2) 해당 함수는 페이지 onpageload 함수에 선언해야한다.\r\n * 제약조건 3) IE 의 경우 F1키(도움말)는 단축키 기능은 수행되나 도움말 창도 open 된다. (Chrome, Edge는 정상동작)\r\n * 제약조건 4) 단축키는 F1 ~ F10 까지만 지정 가능하다. \r\n - 예시) \r\n	scwin.onpageload = function() {\r\n		//단축키 설정 \r\n		var shocutArray = [\r\n			{ key:"F2",		func:"scwin.search" }	//F2키 입력 시 scwin.search 함수 실행 \r\n			,{ key:"F3",		func:"scwin.insertRow" }	//F3키 입력 시 scwin.insertRow 함수 실행 \r\n		];\r\n		com.hkey.setData( shocutArray );\r\n	};\r\n\r\n	//조회 \r\n	scwin.search = function() {\r\n		com.sbm.excute(sbm_excel);\r\n	};\r\n\r\n	//행추가 \r\n	scwin.insertRow = function() {\r\n		dlt_excel.insertRow();\r\n	};\r\n</pre>\r\n						'}]}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_excel',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'menuCd',name:'메뉴코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'menuNm',name:'메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprMenuNm',name:'부모메뉴명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hierLvl',name:'메뉴레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'urlAddr',name:'경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortOrder',name:'순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'uprMenuId',name:'부모메뉴코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_excel',ref:'',target:'data:json,dlt_excel',action:'/ui/SP/json/excelData.json',method:'get',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_excel_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){

	//onplageload 시 
	scwin.onpageload = function() {
		//단축키 설정 
		var shortcutList = [
			 { key: "F2",		func: "scwin.btn_init_onclick" }			//초기화(F2) 
			,{ key: "F3",		func: "scwin.btn_search_onclick" }		//조회(F3)  
			,{ key: "F4",		func: "scwin.btn_add_onclick" }			//행추가(F4)  
		];
		com.hkey.setData( shortcutList );
	};
	
	scwin.onpageunload = function() {
		
	};
	

	//조회 
	scwin.btn_search_onclick = function() {
		com.sbm.execute(sbm_excel);
	};

	//조회 callback 
	scwin.sbm_excel_submitdone = function(e) {
		spn_excelCnt.setValue( dlt_excel.getRowCount() );
	};

	//행추가 		
	scwin.btn_add_onclick = function() {
		dlt_excel.insertRow();
	};
	
	//초기화 
	scwin.btn_init_onclick = function() {
		dlt_excel.removeAll();	
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'contentWrap',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'/ui/SP/contentHeader.xml'}},{T:1,N:'w2:wframe',A:{id:'wfm_contentDesc',src:'/ui/SP/contentDesc.xml'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'section'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'defaultbox'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'ofh'},E:[{T:1,N:'w2:span',A:{id:'spn_excelCnt',dataType:'number',style:'',class:'df_total',label:'',displayFormat:'총 #,###건'}},{T:1,N:'xf:group',A:{id:'',style:'',class:'ml5 fr'},E:[{T:1,N:'w2:anchor',A:{id:'btn_init',style:'',toolTip:'',clickEventElement:'outerDiv','ev:onclick':'scwin.btn_init_onclick',class:'btn_gcm mr5',outerDiv:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'w2:anchor',A:{id:'btn_search',style:'',toolTip:'',clickEventElement:'outerDiv','ev:onclick':'scwin.btn_search_onclick',class:'btn_sh',outerDiv:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'w2:anchor',A:{id:'btn_add',style:'',toolTip:'',clickEventElement:'outerDiv','ev:onclick':'scwin.btn_add_onclick',class:'btn_gcm mr5',outerDiv:'true'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]}]},{T:1,N:'w2:span',A:{class:'df_total fr',dataType:'',displayFormat:'',id:'span1',label:'F2 (초기화) , F3 (조회) , F4 (행추가)',style:'color: red;margin-right: 20px;'}},{T:1,N:'w2:span',A:{class:'df_total fr',dataType:'',displayFormat:'',id:'span2',label:'[ 단축키 ]',style:'margin-right: 5px;'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'cm_gridGrp '},E:[{T:1,N:'w2:gridView',A:{sortEvent:'ondblclick',rowNumVisible:'true',useShiftKey:'true',rowNumHeaderValue:'순서',scrollByColumn:'false',sortable:'true','ev:onfilereadend':'',columnMoveWithFooter:'',rowStatusHeaderValue:'상태',rowStatusVisible:'true',fixedColumnWithHidden:'true',dataList:'dlt_excel',ignoreCellClick:'false',style:'height:300px;',columnMove:'',autoFit:'allColumn',visibleRowNum:'',id:'grd_excelGrid','ev:onafteredit':'',class:'cm_grid'},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',style:'height:25px;',inputType:'text',id:'column11',value:'메뉴코드',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'40',style:'height:25px;',inputType:'text',id:'column9',value:'메뉴명',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'50',style:'height:25px;',inputType:'text',id:'column7',value:'부모메뉴명',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'50',style:'height:25px;',inputType:'text',id:'column3',value:'메뉴레벨',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'50',style:'',inputType:'text',id:'column12',value:'경로',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'70',style:'height:25px',inputType:'text',id:'column15',value:'부모메뉴코드',blockSelect:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody4'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',style:'height:25px;',inputType:'text',id:'menuCd',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'40',style:'height:25px;',inputType:'text',id:'menuNm',blockSelect:'false'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'50',style:'height:25px;',inputType:'text',id:'uprMenuNm',blockSelect:'false'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'50',style:'height:25px;',inputType:'text',id:'hierLvl',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'50',style:'',inputType:'text',id:'urlAddr',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'70',style:'height:25px',inputType:'text',id:'uprMenuId',blockSelect:'false'}}]}]}]}]}]}]}]}]}]})