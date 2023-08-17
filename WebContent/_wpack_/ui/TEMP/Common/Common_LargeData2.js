/*amd /ui/TEMP/Common/Common_LargeData2.xml 13371 c97b015b2200e5f816129db3bc6ecae1a2814c19bc041c7bc5c9f54b18e8ad29 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:7,N:'xml-stylesheet',instruction:'href="/ui/cm/pot/example/external/toastr.css" type="text/css"'},{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dlt_temp',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'컬럼1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'컬럼2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'컬럼3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'컬럼4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'컬럼5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'컬럼6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'컬럼7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'컬럼8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_temp2',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'컬럼1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'컬럼2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'컬럼3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'컬럼4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'컬럼5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'컬럼6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'컬럼7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'컬럼8',dataType:'text'}}]}]}]}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	
	scwin.onpageload = function() {
		//데이터 생성
		scwin.getData();
	};
	
	scwin.onpageunload = function() {
	
	};	

	/*******************************************************/
	/******************** user 정의 함수 *************************/		
	/*******************************************************/	

	//데이터 생성 
	scwin.getData = function(){
		//선택 데이터 건수 
		var rowCnt = Number(slb_count.getValue());		
		
		//데이터 생성 
		var dataArray = [];
		for ( var i=0; i<rowCnt; i++ ){
			var dataObj = {};
			dataObj.col1 = "컬럼내용_" + i ;
			dataObj.col2 = "공통코드_" + i ;
			dataObj.col3 = "메뉴화면정보_" + i ;
			dataObj.col4 = "메뉴는 4depth 형태로 이루어짐_" + i ;
			dataObj.col5 = "사용여부_" + i ;
			dataObj.col6 = "상위메뉴코드_" + i ;
			dataObj.col7 = "그리드뷰의 특정 컬럼을 조회하여_" + i ; 
			dataObj.col8 = "비고_" + i ;
			
			dataArray.push( dataObj );	
		}
		
		scwin.dataArray = dataArray;
	};
	
	
	//조회 (시스템 폰트)
	scwin.search = function(){
		//시작 시간
		var renderStart = new Date();
		
		//dataList 에 setJSON 
		dlt_temp.setJSON( scwin.dataArray );
		
		//종료시간 
		var renderEnd = new Date();

        var renderTime = "[ 화면 render ] : " +  com.num.formatNumber(( renderEnd - renderStart ) / 1000) + " 초";
        spn_renderTime.setValue( renderTime );
        
        //데이터 건수 
        spn_count.setValue( com.num.formatNumber(dlt_temp.getRowCount()) ); 		
	};
	
	
	//조회 (나눔 폰트)
	scwin.search2 = function(){
		//시작 시간
		var renderStart = new Date();
		
		//dataList 에 setJSON 
		dlt_temp2.setJSON( scwin.dataArray );
		
		//종료시간 
		var renderEnd = new Date();

        var renderTime = "[ 화면 render ] : " +  com.num.formatNumber(( renderEnd - renderStart ) / 1000) + " 초";
        spn_renderTime2.setValue( renderTime );
        
        //데이터 건수 
        spn_count2.setValue( com.num.formatNumber(dlt_temp2.getRowCount()) ); 				
	};


	//데이터 초기화 
	scwin.initData = function(){
		dlt_temp.removeAll();
		dlt_temp2.removeAll();		
		spn_count.setValue(0);
		spn_count2.setValue(0);		
		spn_renderTime.setValue("");
		spn_renderTime2.setValue("");		
	}
	
	
	/*******************************************************/
	/**************** component 이벤트 함수 ***********************/		
	/*******************************************************/	

	//건수 변경  
	scwin.slb_count_onviewchange = function(info) {
		scwin.initData();
		
		scwin.getData();
	};
	

	//조회 버튼 클릭 시 
	scwin.btn_search_onclick = function(e) {
		//조회(시스템폰트)
		scwin.search();

		//조회(나눔폰트) 
		scwin.search2();
	};
	
	
	//초기화 버튼 클릭 시 
	scwin.btn_init_onclick = function() {
		scwin.initData();
		
		slb_count.setValue(100000);			
	};
	

	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'contentWrap',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'/ui/SP/contentHeader.xml'}},{T:1,N:'xf:group',A:{class:'bts_search_ty1',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'height:32.00px;',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'\r\n							건수\r\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'cntGrp ',id:'',style:'width:150px;'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'combo_sty',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'slb_count',ref:'',style:'',submenuSize:'auto','ev:onviewchange':'scwin.slb_count_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'10만건'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'100000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'20만건'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'200000'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'50만건'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'500000'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn_searchBox',id:''},E:[{T:1,N:'w2:anchor',A:{class:'btn_search_reset','ev:onclick':'scwin.btn_init_onclick',id:'btn_init',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'w2:anchor',A:{class:'btn_search','ev:onclick':'scwin.btn_search_onclick',id:'btn_search',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'section'},E:[{T:1,N:'xf:group',A:{class:'sub_title_area',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',id:'',label:'시스템 폰트',style:'float: left;'}},{T:1,N:'xf:group',A:{class:'totalGrp fl',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'df_total',displayFormat:'건',id:'spn_count',label:'0',style:''}}]},{T:1,N:'xf:group',A:{class:'totalGrp fr mr20',id:'',style:''},E:[{T:1,N:'w2:span',A:{class:'df_total',displayFormat:'',id:'spn_renderTime',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'cm_gridGrp'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',rowNumVisible:'true',summaryAuto:'false',useShiftKey:'true',scrollByColumn:'false',rowNumHeaderValue:'NO',fixedColumnWithHidden:'true',rowNumWidth:'80',dataList:'data:dlt_temp',ignoreCellClick:'false',style:'height:250px;font-family: Malgun Gothic, mgw, Verdana, dotum, Sans-serif;}',id:'grd_temp',autoFit:'allColumn',ignoreToggleOnDisabled:'false',class:'cm_grid sysFont',focusMode:'row'},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'컬럼1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column2',value:'컬럼2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'컬럼3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column4',value:'컬럼4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column5',value:'컬럼5',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column6',value:'컬럼6',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column7',value:'컬럼7',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column8',value:'컬럼8',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col2',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col3',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'col4',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col5',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col6',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'col7',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col8',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'section'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'sub_title_area'},E:[{T:1,N:'w2:textbox',A:{style:'float: left;',id:'',label:'나눔고딕 폰트',class:'sub_title_h2'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'totalGrp fl'},E:[{T:1,N:'w2:span',A:{displayFormat:'건',style:'',id:'spn_count2',label:'0',class:'df_total'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'totalGrp fr mr20'},E:[{T:1,N:'w2:span',A:{displayFormat:'',style:'',id:'spn_renderTime2',label:'',class:'df_total'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'cm_gridGrp'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',rowNumVisible:'true',summaryAuto:'false',useShiftKey:'true',rowNumHeaderValue:'NO',scrollByColumn:'false',focusMode:'row',fixedColumnWithHidden:'true',rowNumWidth:'80',dataList:'data:dlt_temp2',ignoreCellClick:'false',style:'height:250px;',autoFit:'allColumn',id:'grd_temp2',class:'cm_grid',ignoreToggleOnDisabled:'false'},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'컬럼1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column2',value:'컬럼2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'컬럼3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column4',value:'컬럼4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column5',value:'컬럼5',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column6',value:'컬럼6',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'column7',value:'컬럼7',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column8',value:'컬럼8',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col2',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col3',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'col4',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col5',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col6',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',style:'',id:'col7',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col8',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]}]}]}]})