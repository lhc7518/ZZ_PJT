/*amd /ui/TEMP/GridView/gridView_setCellInputType_image.xml 3706 48e77d81a9d6cc7e684701265f5ed5827cc151278f19e6b45da71441588a4a84 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'111111'}]},{T:1,N:'col2'},{T:1,N:'col3',E:[{T:4,cdata:'aaaaaa'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'222222'}]},{T:1,N:'col2'},{T:1,N:'col3',E:[{T:4,cdata:'bbbbbb'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'col1',E:[{T:4,cdata:'333333'}]},{T:1,N:'col2'},{T:1,N:'col3',E:[{T:4,cdata:'cccccc'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){
        
	scwin.onpageload = function() {
		
		//이미지타입으로 변경  
		var info_image = {
			inputType : "image",
			options : {
				imageSrc : "/cm/images/base/ico_docu.png"
				//,imageClickFunction : "scwin.imageClick"		//image에서는 처리 안됨 (해당 그리드컬럼에서 직접 설정)  				
			}
		};
		var info_button = {
			inputType : "button"
			,value : "버튼1"
		};
		gridView1.setCellInputType(0, "col2", info_image); // 0 번째 row, "col1" column에 해당하는 cell의 inputType을 image로 변경.
		gridView1.setCellInputType(2, "col2", info_button); // 2 번째 row, "col1" column에 해당하는 cell의 inputType을 button으로 변경.		
		
	};
	
 
 	//==================================================//
 	
 	
	scwin.imageClick = function(row, colId, colValue){ 
		console.log("imageClick : row["+row+"], colId["+colId+"]");
		alert("imageClick : row["+row+"], colId["+colId+"]");
	};
 
	
	scwin.gridView1_oncellclick = function(row,col,colId) {
		if ( gridView1.getCellInputType(row, col) == "button" ){
			alert("버튼클릭 !!");
		}		
	};
	
	
	
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'sub_contents '},E:[{T:1,N:'w2:gridView',A:{id:'gridView1',autoFit:'allColumn',dataList:'data:dataList1',style:'height:250px;',readOnly:'true',class:'cm_grid',setCellInputTypeCustom:'true','ev:oncellclick':'scwin.gridView1_oncellclick'},E:[{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'text',id:'column5',value:'col1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'30',style:'',inputType:'text',id:'column3',value:'col2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',style:'',inputType:'text',id:'column1',value:'col3',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{dataType:'text',width:'100',style:'',inputType:'text',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{dataType:'text',width:'30',style:'',inputType:'custom',id:'col2',value:'',blockSelect:'false',displayMode:'label',imageClickFunction:'scwin.imageClick'}},{T:1,N:'w2:column',A:{dataType:'text',width:'100',style:'',inputType:'text',id:'col3',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]}]}]}]})