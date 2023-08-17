/*amd /ui/TEMP/Common/Common_ScriptList.xml 16282 fc9ecdf6d1351555c716bd6def6f11bd16a18052af2f62ea187121b0b84719cb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'text',value:'FUNC'}},{T:1,N:'w2:key',A:{id:'searchWord',name:'검색어',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_selectBox',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'파일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'함수',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'FUNC'}]},{T:1,N:'name',E:[{T:4,cdata:'함수'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'FUNC_TITLE'}]},{T:1,N:'name',E:[{T:4,cdata:'Title'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'FUNC_ASIS'}]},{T:1,N:'name',E:[{T:4,cdata:'AS-IS'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'FUNC_DESC'}]},{T:1,N:'name',E:[{T:4,cdata:'Desc'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'FUNC_REMARK'}]},{T:1,N:'name',E:[{T:4,cdata:'비고'}]}]}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'FILE',name:'파일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC',name:'함수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC_TITLE',name:'함수title',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC_DESC',name:'decription',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC_ASIS',name:'AS-IS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC_REMARK',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'FILE',name:'파일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC',name:'함수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC_TITLE',name:'함수title',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC_DESC',name:'decription',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC_ASIS',name:'AS-IS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'FUNC_REMARK',name:'비고',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search0',ref:'data:json,{"id":"dma_searchParam","key":"dma_searchParam"}',target:'data:json,{"id":"dlt_master","key":"dlt_temp"}',action:'/ui/TEMP/Common/data/scriptData.jsp',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_search0_callback','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search1',ref:'',target:'data:json,{"id":"dlt_temp","key":"dlt_temp"}',action:'/ui/TEMP/Common/data/scriptData.json',method:'post',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_search1_callback','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search2',ref:'',target:'data:json,{"id":"dlt_temp","key":"dlt_temp"}',action:'/ui/TEMP/Common/data/scriptData.json',method:'get',mediatype:'application/json',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_search2_callback','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
scwin.onpageload = function() {

};


/*******************************************************/
/******************** user 정의 함수 *************************/		
/*******************************************************/

//검색조건 초기화 
scwin.searchInit = function() {
	slb_gubun.setValue("func");
	ipt_searchWord.setValue("");
	grd_master.initGrid();
	spn_GrpCnt.setValue(0);
};

//조회 
scwin.searchFn = function(flag) {		
	//sbmission 수행 
	//com.sbm.execute(sbm_search); 

	$p.executeSubmission("sbm_search"+flag);
};

//조회0 callback (데이터 그대로 셋팅)
scwin.sbm_search0_callback = function(e){
	//조회 건수 셋팅 
	spn_GrpCnt.setValue( dlt_master.getRowCount() );

	//첫행 포커스 
	grd_master.setFocusedCell(0, 0);
};

//조회1 callback (json 데이터 활용방법) 
scwin.sbm_search1_callback = function(e){
	//조회 결과 data (e.responseJSON) 
	console.log("sbm_search1_callback===\n", e.responseJSON);
	var jsonData = e.responseJSON.dlt_temp;

	//json 데이터 sort (func 컬럼으로 정렬) 		
	jsonData.sort(
		function(a, b) {
			if ( a.FUNC == b.FUNC ){
				return 0;
			} else {	
				return a.FUNC > b.FUNC ? 1 : -1;
			}
		}
	);

	//검색어 체크 
	var gubun = dma_searchParam.get("gubun");
	var searchWord = dma_searchParam.get("searchWord").trim();
	searchWord = searchWord.toLowerCase();

	//검색어에 해당하는 데이터 담아서, dlt_master 에 셋팅 			
	var searchArray = [];				
	for ( var i=0; i<jsonData.length; i++ ){
		var searchNm = jsonData[i][gubun].toLowerCase();
		if ( searchNm.indexOf(searchWord) > -1 ){
			searchArray.push(jsonData[i]);
		}
	}

	//가져온 데이터 setJSON 
	dlt_master.setJSON(searchArray);
	
	//조회 건수 셋팅 
	spn_GrpCnt.setValue( dlt_master.getRowCount() );
	
	//첫행 포커스 
	grd_master.setFocusedCell(0, 0);		
};


//조회2 callback (dlt_temp 데이터리스트 활용방법) 
scwin.sbm_search2_callback = function(e){
	//조회 결과 data (e.responseJSON) 
	console.log("sbm_search2_callback===\n", e.responseJSON);

	//임시 dataList 의 FUNC 컬럼의 값을 기준으로 오름차순으로 정렬한다.
	dlt_temp.sort('FUNC', 0);

	//검색어 체크 
	var gubun = dma_searchParam.get("gubun");
	var searchWord = dma_searchParam.get("searchWord").trim();
	searchWord = searchWord.toLowerCase();

	//검색어에 해당하는 데이터 담아서, dlt_master 에 셋팅 			
	var searchArray = [];				
	for ( var i=0; i<dlt_temp.getRowCount(); i++ ){
		var searchNm = dlt_temp.getCellData(i, gubun).toLowerCase();
		if ( searchNm.indexOf(searchWord) > -1 ){
			searchArray.push(dlt_temp.getRowJSON(i));
		}
	}
	
	//가져온 데이터 setJSON 
	dlt_master.setJSON(searchArray);

	//조회 건수 셋팅 
	spn_GrpCnt.setValue( dlt_master.getRowCount() );
	
	//첫행 포커스 
	grd_master.setFocusedCell(0, 0);
};
	

/*******************************************************/
/**************** component 이벤트 함수 ***********************/		
/*******************************************************/

scwin.btn_init_onclick = function(e) {
	scwin.searchInit();
};

scwin.btn_search_onclick = function(e) {
	scwin.searchFn(0); 
};

scwin.btn_search1_onclick = function(e) {
	scwin.searchFn(1); 
};

scwin.btn_search2_onclick = function(e) {
	scwin.searchFn(2); 
};

scwin.ipt_searchWord_onkeyup = function(e) {
	if ( e.keyCode == "13" ){
		scwin.searchFn(0);
	}
};

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents ',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'bts_search_ty1'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width: 100%',id:'tbl_search',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:200px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:32.00px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							구분\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',ref:'data:dma_searchParam.gubun',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',style:'width: 90%;',disabled:'false',id:'slb_gubun',allOption:'',direction:'auto',class:'combo_sty'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_selectBox'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							검색어\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'data:dma_searchParam.searchWord','ev:onkeyup':'scwin.ipt_searchWord_onkeyup',adjustMaxLength:'false',style:'width: 90%;',refSync:'true',id:'ipt_searchWord',class:'ipt_sty'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btn_searchBox',style:'height: 35px;margin-top: 10px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_search2_onclick',id:'btn_search2',style:'width: 100px;height: 27px;float:right;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회2'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_search1_onclick',id:'btn_search1',style:'width: 100px;height: 27px;float:right;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회1'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_search_onclick',id:'btn_search',style:'width: 100px;height: 27px;float:right;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_init_onclick',id:'btn_init',style:'width: 100px;height: 27px;float:right;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'height: 30px;',class:''},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',dataType:'',id:'',label:'목록',style:'float: left;',tagname:'h2'}},{T:1,N:'w2:span',A:{id:'spn_GrpCnt',style:'float: right;',class:'df_total',label:'0',displayFormat:'건'}}]},{T:1,N:'xf:group',A:{id:'',class:'cm_gridGrp'},E:[{T:1,N:'w2:gridView',A:{showSortableUseFilter:'false',scrollByColumnAdaptive:'false',rowNumVisible:'true',summaryAuto:'false',useShiftKey:'true',scrollByColumn:'false',rowNumHeaderValue:'No',readOnly:'true',summaryOnlyAuto:'false',defaultCellHeight:'24',rowStatusHeaderValue:'',applyAllColumnStyle:'false',tooltipDisplay:'',focusMode:'row',rowNumWidth:'40',dataList:'data:dlt_master',style:'height:255px;',ignoreCellClick:'false',id:'grd_master',useFilterList:'false',autoFit:'allColumn',ignoreToggleOnDisabled:'false',class:'gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',style:'',id:'column8',value:'파일',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column7',value:'함수',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column5',value:'Title',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',style:'',id:'column9',value:'AS-IS',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column3',value:'비고',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',style:'height:24px',id:'FILE',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',style:'',id:'FUNC',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'300',inputType:'text',style:'',id:'FUNC_TITLE',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',style:'height:24px',id:'FUNC_ASIS',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'text',style:'',id:'FUNC_REMARK',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'sub_title_area',id:'',style:'height: 30px;margin-top: 10px;'},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',dataType:'',id:'',label:'상세정보',style:'float: left;',tagname:'h2'}}]},{T:1,N:'xf:group',A:{id:'',class:'bts_table_ty1'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width:100%;',id:'group1',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:32.00px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							파일\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'data:dlt_master.FILE','ev:onkeyup':'',adjustMaxLength:'false',refSync:'',style:'width: 100%',userData2:'',id:'ipt_file',class:''}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							AS-IS\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{ref:'data:dlt_master.FUNC_ASIS','ev:onkeyup':'',adjustMaxLength:'false',refSync:'',style:'width: 100%;',userData2:'',id:'ipt_func',class:'ipt_sty'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:32.00px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							함수\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:input',A:{ref:'data:dlt_master.FUNC','ev:onkeyup':'',adjustMaxLength:'false',refSync:'',style:'width: 100%;',userData2:'',id:'title',class:'ipt_sty'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:32.00px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							Title\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:input',A:{ref:'data:dlt_master.FUNC_TITLE','ev:onkeyup':'',adjustMaxLength:'false',refSync:'',style:'width: 100%;',userData2:'',id:'ipt_title',class:'ipt_sty'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:32.00px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							Desc\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:textarea',A:{ref:'data:dlt_master.FUNC_DESC',style:'height:200px;width: 100%;',id:'txa_desc',class:'textarea_sty'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'height:32.00px;'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\n							비고\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:input',A:{ref:'data:dlt_master.FUNC_REMARK','ev:onkeyup':'',adjustMaxLength:'false',refSync:'',style:'width: 100%;',userData2:'',id:'ipt_remark',class:'ipt_sty'}}]}]}]}]}]}]}]}]})