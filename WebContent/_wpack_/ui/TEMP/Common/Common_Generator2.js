/*amd /ui/TEMP/Common/Common_Generator2.xml 9078 c0bd41fa6e16d58cd74fd6c73123b39e181e142dcd169af20255b3f3ed198ade */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fileDesc'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'title',name:'화면타이틀',dataType:'text'}},{T:1,N:'w2:key',A:{id:'desc',name:'화면설명',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'title',E:[{T:4,cdata:'\r\nCommon - Generator 2depth 형태\r\n						'}]},{T:1,N:'desc',E:[{T:4,cdata:'\r\n<pre style="font-size:14px;">\r\n본 화면은 generator컴포넌트를 통해서, 반복 테이블 형태의 항목 및 gridView의 컬럼의 유효성을 확인하는 방법을 제공한다.\r\n해당 화면은 2depth형태로 반복부를 처리하는 샘플 입니다.  \r\n	1. gen_first	: table tr 형태 \r\n	2. gen_second	: table td 형태 (반복은 gen_first 갯수만큼)    \r\n- 예시) \r\n	//동일 반복부의 index \r\n	var tmpIdx = this.getGeneratedIndex();\r\n	\r\n	//동일 반복부의 input1객체 반환\r\n	var tmpObj = this.getGeneratedComponent("input1");\r\n	\r\n	//동일 반복부의 부모 반복부 객체 \r\n	var firstObj = this.getGenerator();		//자신을 생성한 부모 Generator 객체 => gen_first 객체    \r\n</pre>\r\n						'}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
				
	};
	
	scwin.onpageunload = function() {
		
	}; 
			
			
	/*******************************************************/
	/******************** user 정의 함수 *************************/		
	/*******************************************************/			
			
	//generator 생성 
	scwin.startGenerator = function(){
		//debugger;
		
		/* 첫번째 generator 반복부 생성 및 값 셋팅 *****/ 
		//gen_first 반복부 추가 
		var first_idx = gen_first.insertChild();
		
		//좌측 title 값 설정
		var txt_leftTitle_gen1Obj = gen_first.getChild( first_idx , "txt_leftTitle_gen1" );	 
		txt_leftTitle_gen1Obj.setValue("항목_" + first_idx);		

		//우측 title 값 설정
		var txt_rightTitle_gen1Obj = gen_first.getChild( first_idx , "txt_rightTitle_gen1" ); 
		txt_rightTitle_gen1Obj.setValue("구분_" + first_idx);
		
		//우측 textbox 값 설정   
		var txtbox2Obj = gen_first.getChild( first_idx , "txt_temp_gen1" );	 
		txtbox2Obj.setValue("txt_temp_gen1_" + first_idx);
				

		/* 두번째 generator 반복부 생성 및 값 셋팅 *****/
		//gen_first 해당 반복부의  gen_second 객체 가져오기 
		var gen_secondObj = gen_first.getChild(first_idx, "gen_second");
		
		//gen_second 반복부 처리  
		for ( var k=0; k<(first_idx+1); k++ ){
			//gen_second 반복부 추가
			var second_idx = gen_secondObj.insertChild();

			//gen_second 의  좌측 inputbox 값 설정 
			var ipt_temp_gen2Obj = gen_secondObj.getChild( second_idx , "ipt_temp_gen2" );
			ipt_temp_gen2Obj.setValue("ipt_temp_gen2_" + first_idx + "_" + k);
			
			//gen_second 의  좌측 버튼명 설정   
			var btn_action_gen2Obj = gen_secondObj.getChild( second_idx , "btn_action_gen2" );
			btn_action_gen2Obj.setValue("확인_" + first_idx + "_" + k);
		}
	};

	
	//확인 버튼 정보 => gen_second 반복부 컴포넌트  
	scwin.getActionInfo = function( genObj ){
		//genObj 는 gen_second 반복부의 컴포넌트 object 
		var firstObj = genObj.getGenerator();		//자신을 생성한 부모 Generator 객체 => gen_first 객체 
		var get_idx						= firstObj.getGeneratedIndex();									//해당 gen_first 의 index 
		var txt_leftTitle_gen1Obj	= firstObj.getGeneratedComponent("txt_leftTitle_gen1");	//해당 gen_first 의 좌측 title 
		var ipt_temp_gen2Obj		= genObj.getGeneratedComponent("ipt_temp_gen2");		//해당 gen_second 의 좌측 inputbox 
	
		var resultStr = ""
			+ "===== 좌측 확인 버튼 클릭 결과 =========\n"		
			+ "\n - 선택 row : " + get_idx
			+ "\n - title 명 : " + txt_leftTitle_gen1Obj.getValue()  
			+ "\n - inputbox 값 : " + ipt_temp_gen2Obj.getValue()
		;
		txa_result.setValue( resultStr );
	};


	//text박스 정보 => gen_first 반복부 컴포넌트 
	scwin.getTextInfo = function( genObj ){
		//genObj 는 gen_first 반복부의 컴포넌트 object 
		var get_idx						= genObj.getGeneratedIndex();										//해당 gen_first idx 
		var txt_rightTitle_gen1Obj	= genObj.getGeneratedComponent("txt_rightTitle_gen1");	//해당 gen_first 의 우측 title 
		var txt_temp_gen1Obj		= genObj.getGeneratedComponent("txt_temp_gen1");			//해당 gen_first 의 우측 textbox 
		
		var resultStr = ""
			+ "===== 우측 text박스 클릭 결과 =========\n"
			+ "\n - 선택 row : " + get_idx
			+ "\n - title 명 : " + txt_rightTitle_gen1Obj.getValue()
			+ "\n - textbox 값 : " + txt_temp_gen1Obj.getValue()
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
	scwin.btn_action_gen2_onclick = function(e) {
		scwin.getActionInfo( this );
	};
	
	//text박스 클릭 시 
	scwin.txt_temp_gen1_onclick = function(e) {
		scwin.getTextInfo( this );
	};
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{id:'',class:'sub_contents '},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'height:37px;'},E:[{T:1,N:'xf:trigger',A:{class:'btn_cm','ev:onclick':'scwin.btn_startGen_onclick',id:'btn_startGen',style:'width: 120px;height: 27px;float:right;',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'반복부 생성'}]}]}]},{T:1,N:'xf:group',A:{class:'sub_title_area',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',dataType:'',id:'',label:'Generator - 2depth 생성',style:'',tagname:'h2'}}]},{T:1,N:'xf:group',A:{id:'',class:'bts_table_ty1 '},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width: 100%;',id:'table1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px',tabIndex:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'w2:generator',A:{tagname:'tbody',style:'position: relative;width: 100%;',id:'gen_first'},E:[{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'txt_leftTitle_gen1',label:''}}]},{T:1,N:'w2:generator',A:{tagname:'td',style:'',id:'gen_second',userData1:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{id:'',class:''},E:[{T:1,N:'xf:input',A:{style:'',id:'ipt_temp_gen2',class:'ipt_sty'}},{T:1,N:'w2:anchor',A:{'ev:onclick':'scwin.btn_action_gen2_onclick',style:'margin-left: 5px;',id:'btn_action_gen2',type:'button',class:'btn_cm',outerDiv:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'확인'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'txt_rightTitle_gen1',label:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{'ev:onclick':'scwin.txt_temp_gen1_onclick',style:'height: 25px;text-decoration-line: underline;cursor: pointer;',id:'txt_temp_gen1',label:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'sub_title_area',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'sub_title_h2',dataType:'',id:'',label:'결과정보',style:'margin-top: 10px;',tagname:'h2'}},{T:1,N:'xf:group',A:{class:'btn_moduleGrp',id:'',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'bts_table_ty1 '},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'width: 100%;',id:'group1',class:'w2tb mt10'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:250px;'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:3,text:'\r\n							Result\r\n							'},{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]}]},{T:1,N:'xf:textarea',A:{ref:'',readOnly:'true',style:'height:150px;',id:'txa_result'}}]}]}]}]}]}]}]}]})