/*amd /ui/TEMP/GridView/gridView_selectbox.xml 4991 f2c26d7e3e389c325f9249a220f4dbbdc326f98e3d36e9f745857a371a15442b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_temp',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'col1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'col2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'col3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_selectbox',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'codeNm',name:'코드명',dataType:'text'}}]}]}]}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	
	scwin.onpageload = function() {
		//selectbox 데이터 조회 
		scwin.searchSelectbox();
	};


	/*******************************************************/
	/******************** user 정의 함수 *************************/		
	/*******************************************************/	

	//selectbox 데이터 조회 
	scwin.searchSelectbox = function() {
		var selectData = [
    		{"code":"100", "codeNm":"코드명100"}
    		,{"code":"200", "codeNm":"코드명200"}
		];
		dlt_selectbox.setJSON(selectData);	
		
		//그리드뷰 col2에  bind 
		grd_temp.setColumnNodeSet("col2", "data:dlt_selectbox", "codeNm", "code");
	};

	 
	//조회 
	scwin.searchMain = function() {
		
		var mainData = [
    		{"col1":"100", "col2":"100", "col3":"abcd"}
    		,{"col1":"200", "col2":"200", "col3":"efgh"}
    		,{"col1":"100", "col2":"100", "col3":"aaaaa"}
    		,{"col1":"200", "col2":"200", "col3":"bbbbb"}
    		,{"col1":"200", "col2":"200", "col3":"ccccc"}
    		,{"col1":"100", "col2":"100", "col3":"ddddd"}
		];
		dlt_temp.setJSON(mainData);
	};


	//customFormatter 적용 
	scwin.customFormatter =  function(data, formattedData, rowIndex, colIndex){
		//값이 bbbbb 일 경우 
		if (data == "bbbbb") {
			grd_temp.setCellColor(rowIndex, colIndex, "red");			//해당 row의 컬럼 폰트 색상 red로 변경 
			grd_temp.setCellReadOnly(rowIndex, colIndex, true); 	//해당 row의 컬럼 readOnly 처리 
		}
		return formattedData;
	};


	
	/*******************************************************/
	/**************** component 이벤트 함수 ***********************/		
	/*******************************************************/	

	//조회 버튼 클릭 시 
	scwin.btn_search_onclick = function(e) {
		scwin.searchMain();
	};
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'titbox',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'gridview selectbox',style:'',tagname:'h3'}},{T:1,N:'xf:group',A:{class:'rt',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm ',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section'},E:[{T:1,N:'w2:gridView',A:{ignoreCellClick:'false',id:'grd_temp',dataList:'data:dlt_temp',summaryAuto:'false',autoFit:'allColumn',ignoreToggleOnDisabled:'false',style:'height:250px;',useShiftKey:'true',scrollByColumn:'false',class:'gvw',fixedColumnWithHidden:'true',scrollByColumnAdaptive:'false',rowNumHeaderValue:'NO',rowNumVisible:'true',rowNumWidth:'30'},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column7',value:'직접 bind',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column5',value:'API 호출',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column4',value:'col3',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'col1',value:'',blockSelect:'false',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_selectbox'},E:[{T:1,N:'w2:label',A:{ref:'codeNm'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'col2',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'col3',value:'',blockSelect:'false',displayMode:'label',customFormatter:'scwin.customFormatter'}}]}]}]}]}]}]}]}]})