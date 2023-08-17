/*amd /ui/TEMP/Common/Common_AutoComplete.xml 10472 0a527dfe273107e50a65c7961f147cf0c3edd1b56742b48612ff4268fb2146ec */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'title',name:'화면타이틀',dataType:'text'}},{T:1,N:'w2:key',A:{id:'desc',name:'화면설명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'title',E:[{T:4,cdata:'\r\nCommon - AutoComplete 처리 \r\n						'}]},{T:1,N:'desc',E:[{T:4,cdata:'\r\n<pre style="font-size:14px;">\r\n본 화면은 AutoCompete 컴포넌트 처리 방법을 제공한다.\r\nAutoComplete 는 Select 컴포넌트와 동일한 기능에 검색 기능이 추가된 컴포넌트 입니다. \r\n\r\n1. 정적 처리 \r\n  - 조회되어 있는 데이터에 대해서 검색 기능을 제공한다.\r\n  - 초기에 autoComplete 컴포넌트에 해당 데이터를 bind 해야한다.   \r\n\r\n2. 동적 처리 \r\n  - 입력된 데이터에 대해서 submission을 통해서 데이터를 조회한다.\r\n  - 조회된 데이터를 autoComplete 컴포넌트에 bind 해야한다. \r\n  - 기본적으로는 text 입력 시 마다 submission을 통해서 서버와의 통신이 이루어지기에 성능에 대한 이슈가 발생할 수 있다. \r\n  - 그에따라, enter 키 입력시에만 submission을 통해서 서버와의 통신이 이루어지게 처리 가능하다.\r\n  < 필수 property 설정 >\r\n		allowEmptySubmission		: true			빈문자열 검색 허용 유무\r\n		emptyItem				: true			동적생성 시 빈값의 item 생성\r\n		emptyIndex				: 0			초기로딩 시 빈값의 index		\r\n		interactionEnterKey		: true			입력 창에 값을 입력 후 Enter키를 누를때만 submission 실행 \r\n		interactionMode			: true			사용자 입력에따라 목록 항목 생성 여부 \r\n		submissionFunc			: 호출함수명	interactionMode true 일 경우 호출할 함수\r\n</pre>\r\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'text',value:'LABEL'}},{T:1,N:'w2:key',A:{id:'searchWord',name:'검색어',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_staticList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'LABEL',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_dynamicList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'CODE',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'LABEL',name:'코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_staticSearch',ref:'',target:'data:json,{"id":"dlt_staticList","key":"dlt_temp"}',action:'/ui/TEMP/Common/data/autoCompleteData.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_staticSearch_callback','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_dynamicSearch',ref:'data:json,{"id":"dma_searchParam","key":"dma_searchParam"}',target:'data:json,{"id":"dlt_dynamicList","key":"dlt_temp"}',action:'/ui/TEMP/Common/data/autoCompleteData.jsp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_dynamicSearch_callback','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {


	//동적 autoComplete edit 시 선택 값의 table 정보 보여주기??  
	$('#'+ act_dynamic.getID() + '_label').click(
		function(){
			if ( act_dynamic.getValue() != "" ){
				$p.setTimeout(function(){
					act_dynamic.find(!0, !0)
				}, 100);
			}
		}
	);

};

scwin.onpageunload = function() {
};

/*******************************************************/
/******************** user 정의 함수 *************************/		
/*******************************************************/

//정적 조회  
scwin.staticSearch = function(){
	//sbmission 수행 
	//com.sbm.execute(sbm_staticSearch);
	//com.sbm.executePage(sbm_staticSearch, dma_staticParam); 
	//com.sbm.executeGet(sbm_staticSearch, dma_staticParam); 
	$p.executeSubmission("sbm_staticSearch");
};	

//정적 조회 callback 
scwin.sbm_staticSearch_callback = function(e){
	//조회 결과 data (e.responseJSON) 
	console.log("sbm_staticSearch_callback===\n", e.responseJSON);
};	




//동적 조회 
scwin.dynamicSearch = function(){		
	//sbmission 수행 
	//com.sbm.execute(sbm_dynamicSearch); 
	//com.sbm.executePage(sbm_dynamicSearch, dma_dynamicParam);  
	//com.sbm.executeGet(sbm_dynamicSearch, dma_dynamicParam); 
	$p.executeSubmission("sbm_dynamicSearch");
};

//동적 조회 callback 
scwin.sbm_dynamicSearch_callback = function(e){
	//조회 결과 data (e.responseJSON) 
	console.log("sbm_dynamicSearch_callback===\n", e.responseJSON);

	//동적 조회 시 결과를 동적으로 bind 
	//act_dynamic.setItemSet("data:dlt_dynamicList","deptNm","deptCd");
	act_dynamic.setItemSet("data:dlt_dynamicList","LABEL","CODE");
	
	//autocomplete 선택 항목 목록을 여는 기능 (enter키 입력시에만 처리)   
	//if ( act_dynamic.getUserData("enterKey") ){
		act_dynamic.openTable();	
	//}

	if ( dlt_dynamicList.getTotalRow() == 0 ){
		act_dynamic.setSelectedIndex(-1);	//focus out 시키는 용도 
	}

};	

//동적 autocompete 값 입력 후 enter키 시 submission 호출 
scwin.subfunc = function(searchStr, keyCode){
	console.log("searchStr=>"+searchStr);
	//빈 데이터 검색은 미처리 
	if ( searchStr.trim() == "" ){
		act_dynamic.setSelectedIndex(-1);	//focus out 시키는 용도 
		return;
	}

	//입력된 키값 셋팅 
	//dma_dynamicParam.set("searchKeyword", searchStr);
	dma_searchParam.set("searchWord", searchStr);
	
	
	//enter 키 입력에 따른 처리 용 
	//act_dynamic.setUserData("enterKey", true);
	
	//동적 조회 
	scwin.dynamicSearch();
};

/*******************************************************/
/**************** component 이벤트 함수 ***********************/		
/*******************************************************/

//조회 버튼 클릭 시 
scwin.btn_confirm_onclick = function() {
	//정적 autoComplete 조회  
	act_static.initAutoComplete();		
	scwin.staticSearch();
	
	//동적 autoComplete 조회
	//dma_dynamicParam.set("searchKeyword", "");		//조회 키값 초기화 
	//act_dynamic.setUserData("enterKey", false);
	//act_dynamic.initAutoComplete();
	//scwin.dynamicSearch();
};



}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'height: 37px;'},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',dataType:'',id:'',label:'정적 / 동적 autoComplete',style:'float: left;',tagname:'h2'}},{T:1,N:'w2:anchor',A:{id:'btn_confirm',clickEventElement:'outerDiv','ev:onclick':'scwin.btn_confirm_onclick',class:'btn_cm',outerDiv:'true',style:'width: 120px;height: 27px;float:right;'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정적 조회'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'margin-top: 10px;',class:'bts_table_ty1'},E:[{T:1,N:'xf:group',A:{id:'grp_memberBasicDetailTop',style:'width:100%;',class:'w2tb',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'height:30px;',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'정적&nbsp;조회'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',chooseOptionLabel:'- 선택 -',caseSensitive:'false',chooseOption:'',useKeywordHighlight:'true',allOption:'',displayMode:'value delim label',ref:'',search:'contain',editType:'select',style:'height: 24px;',id:'act_static',class:'autocom_sty',placeholder:'- 선택하시오 -',emptyItem:'true',emptyIndex:'0'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_staticList'},E:[{T:1,N:'w2:label',A:{ref:'LABEL'}},{T:1,N:'w2:value',A:{ref:'CODE'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'동적&nbsp;조회'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{selectedData:'',visibleColumn:'',emptyIndex:'0',submissionFunc:'scwin.subfunc',submenuSize:'auto',chooseOptionLabel:'- 선택 -',interactionMode:'true',caseSensitive:'false',chooseOption:'',allowEmptySubmission:'true',useKeywordHighlight:'true',allOption:'',displayMode:'value delim label',ref:'',search:'',emptyValue:'',interactionEnterKey:'true',emptyItem:'true',editType:'select',style:'height: 24px;',submission:'',id:'act_dynamic',class:'autocom_sty',placeholder:'- 선택하시오 -'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:''},E:[{T:1,N:'w2:label',A:{ref:''}},{T:1,N:'w2:value',A:{ref:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'height:30px;',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'}}]},{T:1,N:'xf:group',A:{style:'height:30px;',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'}},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'}}]}]}]}]}]}]}]})