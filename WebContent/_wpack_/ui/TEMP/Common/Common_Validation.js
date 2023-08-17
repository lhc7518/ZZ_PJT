/*amd /ui/TEMP/Common/Common_Validation.xml 13367 6396ab6ef3c549fce2f4f853995fe917fd45a20c0c877ff1e131c89a72de4bb1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'title',name:'화면타이틀',dataType:'text'}},{T:1,N:'w2:key',A:{id:'desc',name:'화면설명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'title',E:[{T:4,cdata:'\r\nCommon - Validation\r\n						'}]},{T:1,N:'desc',E:[{T:4,cdata:'\r\n<pre style="font-size:14px;">\r\n본 화면은 테이블 형태의 항목 및 gridView의 컬럼의 유효성을 확인하는 방법을 제공한다.\r\n해당 유효성 체크의 기준은 각 컴포넌트에 연결된 dataMap , dataList 를 기준으로 처리한다. \r\n\r\n1. 테이블 형태 항목의 유효성 체크\r\n  - 주로 dataMap과 Mapping 되는 형태로 단 건의 데이터에 대한 유효성을 체크한다.\r\n  - 예시\r\n	var valInfo = [ \r\n		//{ id : "EMP_CD",			mandatory : true},\r\n		{ id : "ibx_empCd",		mandatory : true, 	label : "별도출력 레이블"}, 		//dataMap bind 가 없는 컴포넌트의 경우 label 추가  \r\n		{ id : "EMP_NM",			mandatory : true }, \r\n		{ id : "JOIN_DATE",		mandatory : true },\r\n		{ id : "RESIDENT_NO",	mandatory : true,		minLength : 13 } \r\n	];\r\n	if (com.data.validateGroup(grp_memberBasicDetailTop, valInfo)) {\r\n		com.win.alert("check항목 데이터 체크 완료!!");\r\n	}\r\n2. gridView 컬럼의 유효성 체크\r\n  - 그리드 뷰의 각 컬럼별 유효성을 체크할 때 사용한다.\r\n  - 그리드 뷰에 연결된 dataList 의 변경 항목에 대해서만 유효성 체크를 수행한다. (변경 사항이 없는 경우 체크하지 않음)  \r\n  - 예시\r\n	var valInfo = [\r\n		{ id : "col1",	mandatory : true,		minLength : 2 }, \r\n		{ id : "col2",	mandatory : true }\r\n	];\r\n	if (com.data.validateGridView(grd_chkGrid, valInfo)) {\r\n		com.win.confirm(idx + "건의 데이타를 반영하시겠습니까", function(res) {\r\n			if (res.clickValue === true) {\r\n				com.sbm.execute(sbm_Save);\r\n			}\r\n		});\r\n	}\r\n</pre>\r\n						'}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_memberBasic'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'EMP_CD',name:'사원코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_NM',name:'사원명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'JOIN_DATE',name:'입사일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'RESIDENT_NO',name:'주민번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_CN_NM',name:'사원한자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ASSIGNED_TASK',name:'담당업무',dataType:'text'}},{T:1,N:'w2:key',A:{id:'EMP_EN_NM',name:'사원영문명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'POSITION_UPDATED_DATE',name:'호칭변경일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'LAST_APPOINT_DATE',name:'최종발령일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_sample',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'필수입력, 최소길이(2자이상)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'필수입력, 한글입력안됨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'필수 입력 확인1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'필수 입력 확인2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
	scwin.onpageload = function() {
		dlt_sample.insertRow();
		dlt_sample.insertRow();
		dlt_sample.insertRow();
		//dlt_sample.reform();
		
		
		//넘어온 파라미터 확인 (테스트 용도)
		var param = com.data.getParameter();
		console.log("Common_Validation.xml : param======");
		console.dir(param);	
		//사원코드 파라미터 존재 시 사원코드에 셋팅  
		if ( !com.util.isEmpty( param.empCd ) ){
			console.log( "Common_Validation.xml : 사원코드 파라미터 : " + param.empCd ); 
			ibx_empCd.setValue( param.empCd );
		}
		
	};
	
	scwin.onpageunload = function() {
	
	};
	
	/**
	 * 데이터의 정합성을 확인한다.
	 */
	scwin.btn_confirm_onclick = function() {
		var valInfo = [ 
			//{ id : "EMP_CD",			mandatory : true},
			{ id : "ibx_empCd",		mandatory : true, 	label : "별도 레이블-사원코드"}, 		//dataMap bind 가 없는 컴포넌트의 경우 label 추가 
			{ id : "EMP_NM",			mandatory : true }, 
			{ id : "JOIN_DATE",		mandatory : true },
			{ id : "RESIDENT_NO",	mandatory : true,		minLength : 13 } 
		];
		if (com.data.validateGroup(grp_memberBasicDetailTop, valInfo)) {
			com.win.alert("check항목 데이터 체크 완료!!");
		}
	};

	
	/**
	 * gridView의 데이터의 정합성을 확인한다.
	 */
	scwin.btn_grdConfirm_onclick = function() {
		var valInfo = [ 
			{ id : "col1", mandatory : true,	minLength : 2 }, 
			{ id : "col2", mandatory : true }, 
			{ id : "col3", mandatory : true,	valFunc : scwin.checkCol3Fn },
			{ id : "col4", mandatory : true,	
				valFunc : function( value, rowIdx ) {
					if ( rowIdx == 2 && value == "4444" ) {
						return "2번째행의 col4 값이 4444 일 경우 처리 불가능 합니다."; 
					}
				} 
			}
		];
		if (com.data.validateGridView(grd_chkGrid, valInfo)) {
			com.win.alert("check gridView항목 데이터 체크 완료!!");
		}
	};

	
	//col3 컬럼 사용자 유효성 검사 함수 
	scwin.checkCol3Fn = function( value, rowIdx ){
		if ( rowIdx == 2 && value == "3333") {
			return "2번째행의 col3 값이 3333 일 경우 처리 불가능 합니다.";
		}
	};
	
	
	

}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{class:'contentWrap',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'wfm_contentHeader',src:'/ui/SP/contentHeader.xml'}},{T:1,N:'w2:wframe',A:{id:'wfm_contentDesc',src:'/ui/SP/contentDesc.xml'}},{T:1,N:'xf:group',A:{class:'sub_title_area',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',dataType:'',id:'',label:'check 항목',style:'',tagname:'h2'}},{T:1,N:'w2:anchor',A:{id:'btn_confirm',clickEventElement:'outerDiv','ev:onclick':'scwin.btn_confirm_onclick',class:'btn_sh',outerDiv:'true',style:'float: right;'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'bts_table_ty1 '},E:[{T:1,N:'xf:group',A:{id:'grp_memberBasicDetailTop',style:'width:100%;',class:'w2tb',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'사원코드'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'cntGrp req'},E:[{T:1,N:'xf:input',A:{ref:'',style:'',id:'ibx_empCd',enterBlur:'',mandatory:'',class:'ipt_sty'}}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'사원명'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'cntGrp req'},E:[{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.EMP_NM',style:'',id:'ibx_empNm',placeholder:'한글만 입력가능',allowChar:'가-힣',mandatory:'',class:'ipt_sty'}}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'입사일'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'cntGrp req'},E:[{T:1,N:'w2:inputCalendar',A:{validateRef:'',footerDiv:'false',focusOnDateSelect:'false',validator:'',mandatory:'true',calendarValueType:'yearMonthDate',ref:'data:dma_memberBasic.JOIN_DATE',dateValidCheck:'true',rightAlign:'false',style:'',id:'cal_joinDate',renderType:'component',weekStartsOn:'0',class:'ipt_calendar_ty1',renderDiv:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'주민번호'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'cntGrp req'},E:[{T:1,N:'xf:input',A:{minlength:'',ref:'data:dma_memberBasic.RESIDENT_NO',displayFormatter:'',maxlength:'13',displayFormat:'######-#######',applyFormat:'',style:'',id:'ibx_residentNo',allowChar:'0-9',mandatory:'',class:'ipt_sty'}}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'사원한자명'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'cntGrp '},E:[{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.EMP_CN_NM',style:'',id:'ibx_empCnNm',mandatory:'',class:'ipt_sty'}}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'담당업무'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'cntGrp '},E:[{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.ASSIGNED_TASK',style:'',id:'ibx_assignedTask',mandatory:'',class:'ipt_sty'}}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'사원영문명'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'cntGrp '},E:[{T:1,N:'xf:input',A:{ref:'data:dma_memberBasic.EMP_EN_NM',style:'',id:'ibx_empEnNm',allowChar:'a-z A-Z',ignoreChar:'',mandatory:'',class:'ipt_sty'}}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'호칭변경일'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'cntGrp'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',focusOnDateSelect:'false',mandatory:'',calendarValueType:'yearMonthDate',ref:'data:dma_memberBasic.POSITION_UPDATED_DATE',dateValidCheck:'true',rightAlign:'false',style:'',id:'cal_postionUpdatedDate',renderType:'component',weekStartsOn:'0',class:'ipt_calendar_ty1',renderDiv:'true'}}]}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_th',tagname:'th'},E:[{T:3,text:'최종발령일'}]},{T:1,N:'xf:group',A:{style:'',class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'cntGrp'},E:[{T:1,N:'w2:inputCalendar',A:{footerDiv:'false',focusOnDateSelect:'false',mandatory:'',calendarValueType:'yearMonthDate',ref:'data:dma_memberBasic.LAST_APPOINT_DATE',dateValidCheck:'true',rightAlign:'false',style:'',displaymessage:'',id:'cal_lastAppointDate',renderType:'component',weekStartsOn:'0',class:'ipt_calendar_ty1',renderDiv:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'sub_title_area',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',dataType:'',id:'',label:'check gridView 항목',style:'',tagname:'h2'}},{T:1,N:'w2:anchor',A:{id:'btn_grdConfirm',clickEventElement:'outerDiv','ev:onclick':'scwin.btn_grdConfirm_onclick',class:'btn_sh',outerDiv:'true',style:'float: right;'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'cm_gridGrp '},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'cm_grid',dataList:'dlt_sample','ev:onafteredit':'',fixedColumnWithHidden:'true',id:'grd_chkGrid',ignoreCellClick:'false',scrollByColumn:'false',sortEvent:'ondblclick',sortable:'true',style:'height:200px;',useShiftKey:'true',readOnly:''},E:[{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',style:'height:25px;',value:'필수입력, 최소길이(2자이상)',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column7',inputType:'text',style:'height:25px;',value:'필수입력, 한글입력안됨',width:'170'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column3',inputType:'text',style:'height:25px;',value:'필수 입력 확인1',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column12',inputType:'text',style:'height:25px;',value:'필수 입력 확인2',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody4',style:''},E:[{T:1,N:'w2:row',A:{id:'row5',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col1',inputType:'text',style:'height:25px;',width:'100',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'col2',inputType:'text',style:'height:25px;',textAlign:'left',width:'100',allowChar:'a-z A-Z',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',defaultValue:'',displayMode:'',falseValue:'N',id:'col3',inputType:'text',style:'height:25px;',trueValue:'Y',value:'',valueType:'other',width:'100',textAlign:'left',class:'req'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col4',inputType:'text',style:'',width:'100',class:'req'}}]}]}]}]}]}]}]}]})