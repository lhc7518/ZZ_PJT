<%@ page contentType="application/json; charset=utf-8" language="java" errorPage="" import="websquare.util.*,java.util.*,java.net.*,java.io.BufferedReader,java.io.*,org.json.simple.*"
%>
<%
	//==================================================================//
	//json 파일 경로
	String JSON_FILE = "/ui/TEMP/Common/data/scriptData.json";
	
	//josn 파일 root 
	String JSON_FILE_ROOT = "dlt_temp";
	
	//json 파일의 검색 컬럼명 
	String SEARCH_GUBUN = "FUNC";
	
	//파라미터 root 
	String PARAM_ROOT = "dma_searchParam";
	
	//파라미터 검색 키 명 
	String PARAM_SEARCH_WORD = "searchWord";
	
	//결과 데이터 명 
	String RESULT_DATA = "dlt_temp";
	//==================================================================//

	String webroot = application.getRealPath("/");
	File file    =  new File(webroot + JSON_FILE); 	//json 파일 경로 

	BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(file),"UTF-8"));
	String line = null;
	String jsonstr = "";
	while((line=br.readLine())!=null){
		jsonstr += line;
	}

	JSONObject obj = (JSONObject) JSONValue.parse(jsonstr);
	JSONArray realArr = (JSONArray)obj.get(JSON_FILE_ROOT);		//json 파일 데이터 

	
	//정렬 (FUNC 컬럼으로 오름차순) ========================
	String SORT_KEY = SEARCH_GUBUN;
	Collections.sort(realArr, new Comparator<JSONObject>(){
		//private static final String SORT_KEY = "FUNC";
		@Override
		public int compare(JSONObject a, JSONObject b){
			String valA = (String) a.get(SORT_KEY);
			String valB = (String) b.get(SORT_KEY);
			return valA.toLowerCase().compareTo(valB.toLowerCase());
		}
	});
	//============================================
	

	//ServletInputStream in = null;
	//java.io.BufferedInputStream bin = null;
	ServletInputStream in = request.getInputStream();
	BufferedInputStream bin = new BufferedInputStream( in );
	String args = StreamUtil.getString( bin , "UTF-8" );		
	JSONObject obj2 = (JSONObject) JSONValue.parse(args);
	JSONObject param = (JSONObject) obj2.get(PARAM_ROOT);	//파라미터 데이터 
	
	String searchWord = ((String) param.get(PARAM_SEARCH_WORD)).trim();
	//SEARCH_GUBUN = (String) param.get("gubun");
	if ( param.get("gubun") != null ){
		SEARCH_GUBUN= (String) param.get("gubun");
	}
	
	JSONArray resultArr = new JSONArray();
	for(int ix=0; ix<realArr.size(); ix++){
		JSONObject rowObj = (JSONObject) realArr.get(ix);
		String data = (String) rowObj.get(SEARCH_GUBUN);
		data = data.toLowerCase();
		if ( data.indexOf(searchWord.toLowerCase()) > -1 ){
			//데이터 담기
			resultArr.add(realArr.get(ix));			
		}
	}

	response.setHeader("Content-Type", "application/json;charset=utf-8");
	//out.println("{\"jsondata\":"+ resultArr.toJSONString()+"}");
	
	out.println("{");
	out.println('"'+ RESULT_DATA + '"' + ':' + resultArr.toJSONString());
	out.println("}");
	
	br.close();
%>