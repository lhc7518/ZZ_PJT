/*amd /ui/TEMP/Common/Common_Generator1.xml 10788 a22b565dd778aa6b078118d2e2c4f9befd8746981e83ec51dda0f211cf0943ff */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'title',name:'화면타이틀',dataType:'text'}},{T:1,N:'w2:key',A:{id:'desc',name:'화면설명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'title',E:[{T:4,cdata:'\r\nCommon - Generator 1depth 형태\r\n						'}]},{T:1,N:'desc',E:[{T:4,cdata:'\r\n<pre style="font-size:14px;">\r\n본 화면은 generator컴포넌트를 통해서, 반복 테이블 형태의 항목 및 gridView의 컬럼의 유효성을 확인하는 방법을 제공한다.\r\n- generator는 특정 영역의 반복 혹은 동일한 영역의 동적 추가/삭제를 지원하는 컴포넌트 입니다. \r\n- generator 컴포넌트의 안쪽(하위)에 정의된 영역이 반복되며 script를 통해 제어 가능합니다.\r\n\r\n- 자식 컴포넌트 접근방법 \r\n	1) Generator 하위에 정의한 자식 컴포넌트의 ID는 재설정되며 초기에 설정한 ID로 접근이 불가능.\r\n	2) Generator가 제공하는 API를 통해 자식 컴포넌트에 접근해야 함.\r\n	3) 반복부에 속한 컴포넌트는 동일한 반복부에 속한 다른 컴포넌트를 반환하는 API를 제공.\r\n	\r\n- 예시) \r\n	//동일 반복부의 index \r\n	var tmpIdx = this.getGeneratedIndex();\r\n	\r\n	//동일 반복부의 input1객체 반환\r\n	var tmpObj = this.getGeneratedComponent("input1");\r\n</pre>\r\n						'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
				
	};

			
	/*******************************************************/
	/******************** user 정의 함수 *************************/		
	/*******************************************************/			
			
	//generator 생성 
	scwin.startGenerator = function(){
		//generator 행추가 
		var gen_idx = gen_first.insertChild();

		//txt_gubun1 값 설정
		var txt_gubun1Obj = gen_first.getChild( gen_idx , "txt_gubun1" );	 
		txt_gubun1Obj.setValue("항목_" + gen_idx);			
		  
		//ipt_temp 값 설정   
		var ipt_tempObj = gen_first.getChild( gen_idx , "ipt_temp" );
		ipt_tempObj.setValue("ipt_temp_" + gen_idx);

		//btn_action 값 설정   
		var btn_actionObj = gen_first.getChild( gen_idx , "btn_action" );
		btn_actionObj.setValue("확인_" + gen_idx);

		//------------------------------------------------------------

		//txt_gubun2 값 설정
		var txt_gubun2Obj = gen_first.getChild( gen_idx , "txt_gubun2" ); 
		txt_gubun2Obj.setValue("구분_" + gen_idx);
		
		//txt_temp 값 설정   
		var txtbox2Obj = gen_first.getChild( gen_idx , "txt_temp" );	 
		txtbox2Obj.setValue("txt_temp_" + gen_idx);
		
		//------------------------------------------------------------
		
		//txt_gubun3 값 설정
		var txt_gubun3Obj = gen_first.getChild( gen_idx , "txt_gubun3" ); 
		txt_gubun3Obj.setValue("파일_" + gen_idx);
		
		//btn_confirm 값 설정
		var btn_confirmObj = gen_first.getChild( gen_idx , "btn_confirm" );	 
		btn_confirmObj.setValue("업로드_" + gen_idx);
		
	};

	
	//확인 버튼 정보 
	scwin.getActionInfo = function( genObj ){
		var get_idx				= genObj.getGeneratedIndex();
		var txt_gubun1Obj	= genObj.getGeneratedComponent("txt_gubun1");
		var ipt_tempObj		= genObj.getGeneratedComponent("ipt_temp");
	
		var resultStr = ""
			+ "===== 좌측 확인 버튼 클릭 결과 =========\n"		
			+ "\n - 선택 row : " + get_idx
			+ "\n - 항목 명 : " + txt_gubun1Obj.getValue()  
			+ "\n - inputbox 값 : " + ipt_tempObj.getValue()
		;
		txa_result.setValue( resultStr );
	};


	//text박스 정보 
	scwin.getTextInfo = function( genObj ){
		var get_idx				= genObj.getGeneratedIndex();
		var txt_gubun2Obj	= genObj.getGeneratedComponent("txt_gubun2");
		var txt_tempObj		= genObj.getGeneratedComponent("txt_temp");
		
		var resultStr = ""
			+ "===== 중앙 text박스 클릭 결과 =========\n"
			+ "\n - 선택 row : " + get_idx
			+ "\n - 구분 명 : " + txt_gubun2Obj.getValue()
			+ "\n - textbox 값 : " + txt_tempObj.getValue()
		;
		txa_result.setValue( resultStr );		
	};
	
	
	//업로드 결과 정보  
	scwin.getUploadInfo = function( genObj, retXml ){
		var get_idx			= genObj.getGeneratedIndex();										//generator 생성 index 
		var confirmObj		= genObj.getGeneratedComponent("btn_confirm");				//generator로 생성된 업로드 버튼 object 
		var uploadObj		= genObj.getGeneratedComponent("upd_singleFileUpload");	//generator로 생성된 upload object
		
		//업로드 결과 (넘어오는 결과 데이터는 xml형태임)  
		//var resultData = com.util.getJSON(retXml);
		var resultData = JSON.parse(WebSquare.json.XML2JSONString(retXml));
		//console.dir(resultData);			

		var resultStr = ""
			+ "===== 업로드 클릭 결과 =========\n"
			+ "\n - 선택 row : " + get_idx
			+ "\n - 업로드 버튼명 : " + confirmObj.getValue()
			//+ "\n - 업로드 결과 : " + com.str.serialize( resultData )
			+ "\n - 업로드 결과 : " + JSON.stringify( resultData )
		;
		txa_result.setValue( resultStr );			
	};	



	/*******************************************************/
	/**************** component 이벤트 함수 ***********************/		
	/*******************************************************/
		
	//생성 버튼 클릭 시 
	scwin.btn_startGen_onclick = function(e) {
		scwin.startGenerator();
	};
	
	//확인 버튼 클릭 시 
	scwin.btn_action_onclick = function(e) {
		scwin.getActionInfo( this );
	};
	
	//text박스 클릭 시 
	scwin.txt_temp_onclick = function(e) {
		scwin.getTextInfo( this );
	};
	
	//업로드 처리 결과 callback 함수 
	scwin.upd_singleFileUpload_ondone = function(retXml) {
		scwin.getUploadInfo( this, retXml );
	};
	
	//업로드 버튼 클릭 시 
	scwin.btn_confirm_onclick = function(e) {
		var get_idx			= this.getGeneratedIndex();										//generator 생성 index 
		var uploadObj		= this.getGeneratedComponent("upd_singleFileUpload");	//generator로 생성된 upload object
	
		//업로드 설정 =>  server.config.xml 파일 에서 설정 
		//업로드 경로 => 해당파일의  websquare / upload / baseDir@value
		if ( uploadObj.getValue() == "" ){	
			alert("업로드 할 파일을 선택 하십시오.");
			return;
		}

		//파일 업로드 START     
		uploadObj.submit(); 
	};	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'sub_contents '},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'height:37px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_startGen_onclick',id:'btn_startGen',style:'width: 120px;height: 27px;float:right;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반복부 생성'}]}]}]},{T:1,N:'xf:group',A:{class:'sub_title_area',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',dataType:'',id:'',label:'Generator - 1depth 생성',style:'',tagname:'h2'}},{T:1,N:'xf:group',A:{class:'btn_moduleGrp',id:'',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'bts_table_ty1 '},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width: 100%;',id:'table1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'w2:generator',A:{tagname:'tbody',style:'position: relative;width: 100%;',id:'gen_first'},E:[{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'txt_gubun1',label:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:''},E:[{T:1,N:'xf:input',A:{style:'',id:'ipt_temp',class:'ipt_sty'}},{T:1,N:'w2:anchor',A:{'ev:onclick':'scwin.btn_action_onclick',style:'margin-left: 5px;',id:'btn_action',type:'button',class:'btn_cm',outerDiv:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'txt_gubun2',label:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_temp_onclick',style:'height: 25px;text-decoration-line: underline;cursor: pointer;',id:'txt_temp',label:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'txt_gubun3',label:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:''},E:[{T:1,N:'w2:upload',A:{class:'file_singleUp','ev:ondone':'scwin.upd_singleFileUpload_ondone',id:'upd_singleFileUpload',imageStyle:'',inputStyle:'',style:'height: 25px;',tabIndex:'',title:'파일업로드',type:'image'}},{T:1,N:'w2:anchor',A:{class:'btn_cm','ev:onclick':'scwin.btn_confirm_onclick',id:'btn_confirm',outerDiv:'',style:'margin-left: 5px;',title:'업로드'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'업로드'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'sub_title_area',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',dataType:'',id:'',label:'결과정보',style:'margin-top: 10px;',tagname:'h2'}},{T:1,N:'xf:group',A:{class:'btn_moduleGrp',id:'',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width: 100%',id:'group1',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n							Result\r\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',style:'width: 100%;'},E:[{T:1,N:'xf:textarea',A:{ref:'',readOnly:'true',style:'height:150px;',id:'txa_result'}}]}]}]}]}]}]}]}]}]})