(self.webpackChunkwebpack_test=self.webpackChunkwebpack_test||[]).push([[7563],{7563:(t,i,e)=>{"use strict";e.r(i),e.d(i,{fwPyramidChart:()=>h});var o=e(2981),s=e(1656),a=e(2085),r=e(3082),n=e(7275),l=e(6615),h=function(t,i,e){l.s.call(this,t,i,e)};o.x.extend(h.prototype,l.s.prototype),h.prototype.defaultOptions={pluginType:"uiplugin.fwPyramidChart",pluginName:"fwPyramidChart",useConfig:!0,accessibility:!1,displayData:!1,title:"",seriesType:"advanced",plotColor:"2ec6c8,b5a1dd,5ab0ee,f4984e,d77a80,90bddc,fe5d55,b5dc59,9ea7b3,00ba84,878bb6,757a85",version:"3.7"},h.prototype.initialize=function(t){this.fcObj=null,this.chartObj={},this.attributeObj=null,this.plotColorObj=null,!t.getAttribute("version")&&s.v.getConfiguration("/WebSquare/fusionchart/version/@value")&&(this.options.version=s.v.getConfiguration("/WebSquare/fusionchart/version/@value"))},h.prototype.initAsync=async function(){"undefined"==typeof FusionCharts&&("3.19"===this.options.version||!this.options.version&&"3.19"==s.v.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.19",await inquires("externalJS/FusionCharts3.19/FusionCharts_all.js")):"3.15"===this.options.version||!this.options.version&&"3.15"==s.v.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.15",await inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js")):"3.13"===this.options.version||!this.options.version&&"3.13"==s.v.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.13",await inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js")):"3.11"==this.options.version||!this.options.version&&"3.11"==s.v.getConfiguration("/WebSquare/fusionchart/version/@value")?(this.options.version="3.11",await inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js")):await inquires("externalJS/FusionCharts3.7/FusionCharts_all.js"))},h.prototype.toHTML=function(){var t=[],i=""==this.options.style?"":"style='"+this.options.style+"'";return t.push("<div id='"+this.id+"' "+i+" class='w2fwPyramidChart "+this.options.className+"'>"),t.push("</div>"),t.join("")},h.prototype.setAction=function(){try{if("3.19"==this.options.version&&"function"==typeof FusionCharts.options._setActivate&&FusionCharts.options._setActivate(),this.fcObj=new FusionCharts("pyramid","fw_pyramid_"+this.id,"100%",this.render.offsetHeight||"100%"),this.setDefaultOption(),this.modelControl.isDataCollectionRefBinded){var t,i=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase()){if(i.getRowCount()>0)(t=i.getFusionChartSimpleData("pyramid",this.options.labelNode,this.options.seriesNode,this.options.valueNode))?this.setJSONData(t):n.k.printLog(this.id+" : Simple seriesType does not support")}else if(i.getRowCount()>0)(t=i.getFusionChartData("pyramid",this.options.labelNode,this.options.seriesColumns))&&this.setJSONData(t)}}catch(t){a.w.printStackTrace(t)}},h.prototype.refresh=function(){try{if(this.modelControl.isDataCollectionRefBinded){var t,i=this.modelControl.dataCollectionRefInfo.dataComp;if("simple"==this.options.seriesType.toLowerCase())(t=i.getFusionChartSimpleData("pyramid",this.options.labelNode,this.options.seriesNode,this.options.valueNode))?this.setJSONData(t):n.k.printLog(this.id+" : Simple seriesType does not support");else(t=i.getFusionChartData("pyramid",this.options.labelNode,this.options.seriesColumns))&&this.setJSONData(t)}}catch(t){a.w.printStackTrace(t)}},h.prototype.setJSONData=function(t){try{this.chartObj=t;var i=this.options.plotColor.split(",");this.setPlotDefaultColor(i),this.draw()}catch(t){a.w.printStackTrace(t)}},h.prototype.getJSONData=function(){try{return this.fcObj.getJSONData()}catch(t){a.w.printStackTrace(t)}},h.prototype.fc=function(){try{return FusionCharts.items["fw_pyramid_"+this.id]}catch(t){a.w.printStackTrace(t)}},h.prototype.draw=function(){try{null!=this.attributeObj&&this._setChartAttribute(this.attributeObj),
null!=this.plotColorObj&&this._setPlotColor(this.plotColorObj),null!=this.attributeObj&&(this.chartObj.chart=this.attributeObj);var t=this.fc();if(t.setJSONData(this.chartObj),t.isActive()||t.render(this.id),1==this.options.accessibility){var i=document.getElementById("fw_pyramid_"+this.id);i&&i.setAttribute("aria-hidden",!0),this.setAccessibility(!0)}}catch(t){a.w.printStackTrace(t)}},h.prototype.setDefaultOption=function(){try{var t={showborder:"1",animation:"1",bgcolor:"FFFFFF",canvasbgcolor:"FFFFFF",showplotborder:"0",divlinethickness:"1",canvasbordercolor:"FFFFFF",showalternatehgridcolor:"0",showvalues:"0",plotgradientcolor:"",showalternatevgridcolor:"0",divlinecolor:"b3b3b3",bordercolor:"b3b3b3",use3dlighting:"0",showshadow:"0",formatnumberscale:"0",caption:this.options.title};for(var i in t)this.attributeObj&&void 0!==this.attributeObj[i]&&(t[i]=this.attributeObj[i]);this.setChartAttribute(t)}catch(t){a.w.printStackTrace(t)}},h.prototype.setPlotDefaultColor=function(t){try{var i=this.chartObj;if(null!=i.dataset)for(var e=0;e<i.dataset.length&&!(e>=t.length);e++)i.dataset[e].color=t[e];else if(null!=i.data)for(var o=0;o<i.data.length&&!(o>=t.length);o++)i.data[o].color=t[o]}catch(t){a.w.printStackTrace(t)}},h.prototype.setChartAttribute=function(t){try{for(var i in null==this.attributeObj&&(this.attributeObj={}),t)t.hasOwnProperty(i)&&(this.attributeObj[i.toLowerCase()]=t[i])}catch(t){a.w.printStackTrace(t)}},h.prototype._setChartAttribute=function(t){try{this.chartObj.chart=t}catch(t){a.w.printStackTrace(t)}},h.prototype.setPlotColor=function(t){try{this.plotColorObj=t}catch(t){a.w.printStackTrace(t)}},h.prototype._setPlotColor=function(t){try{var i=this.chartObj;if(null!=i.dataset)for(var e=0;e<i.dataset.length&&!(e>=t.length);e++)i.dataset[e].color=t[e];else if(null!=i.data)for(e=0;e<i.data.length&&!(e>=t.length);e++)i.data[e].color=t[e]}catch(t){a.w.printStackTrace(t)}},h.prototype.getChartAttribute=function(t){try{return FusionCharts.items["fw_pyramid_"+this.id].getChartAttribute(t)}catch(t){a.w.printStackTrace(t)}},h.prototype.setChartColumnRef=function(t,i,e){try{if(t=r.D.isNull(t)?this.options.ref:t,i=r.D.isNull(i)?this.options.labelNode:i,e=r.D.isNull(e)?this.options.seriesColumns:e,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var o=t.replace("data:","");WebSquare.DataCollection.comp[o].addChild(r.D.getComponentById(this.id))}this.options.ref=t,this.options.labelNode=i,this.options.seriesColumns=e,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){a.w.printStackTrace(t)}},h.prototype.setChartColumnSimpleRef=function(t,i,e,o){try{if(t=r.D.isNull(t)?this.options.ref:t,i=r.D.isNull(i)?this.options.labelNode:i,e=r.D.isNull(e)?this.options.seriesNode:e,o=r.D.isNull(o)?this.options.valueNode:o,this.options.ref!=t){""!=this.options.ref&&this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id);var s=t.replace("data:","");WebSquare.DataCollection.comp[s].addChild(r.D.getComponentById(this.id))}this.options.ref=t,this.options.labelNode=i,this.options.seriesNode=e,this.options.valueNode=o,this.modelControl.useRef=!0,this.modelControl.setRef(t),this.refresh()}catch(t){a.w.printStackTrace(t)}},h.prototype.exportJSChart=function(t){try{t||(t="jpg");var i=this.options.id||"fusionChart",e=this.getSVGString();if(e){var r=encodeURI(e+"ExportType="+t+"ExportFileName="+i),n=o.x._resourceURI+"engine/servlet/exportFusionChart.jsp";s.v.download(n,r,"post")}}catch(t){a.w.printStackTrace(t)}},h.prototype.getSVGString=function(){try{var t=this.fc().getSVGString();if(t)return t=(t=(t=(t=(t=t.wq_replaceAll('shape-rendering="default"',"shape-rendering='auto'")).wq_replaceAll('visibility=""',"visibility='inherit'")).wq_replaceAll('text-anchor="undefined"',"text-anchor='start'")).wq_replaceAll("1e-006","0.000001")).wq_replaceAll('font-family="15"','font-family="Verdana"');n.k.printLog("not found svg object")}catch(t){
a.w.printStackTrace(t)}},h.prototype.setAccessibility=function(t){try{var i=document.getElementById("accessibility_"+this.id);if(0==t)return void(i&&i.remove());var e="",o="";if(null==i){var s=document.createElement("table");s.id="accessibility_"+this.id,WebSquare.style.addClass(s,"w2fusionchart_accessibility"),1==this.options.displayData&&(WebSquare.style.removeClass(s,"w2fusionchart_accessibility"),WebSquare.style.addClass(s,"w2tb"),WebSquare.style.addClass(s,"w2fusionchart_accessibility_table")),this.render.appendChild(s,this.render.lastChild),i=document.getElementById("accessibility_"+this.id)}i.innerHTML="";var r="",n=this.chartObj,l=this.attributeObj.caption;l&&(r="<caption>"+l+"</caption>"),r+="<thead><tr>",n.dataName&&(r+="<th scope='col' class='w2tb_th'>"+n.dataName.labelName+"</th>",r+="<th scope='col' class='w2tb_th'>"+n.dataName.valueName+"</th>"),r+="</tr></thead>",r+="<tbody>";for(var h=0;h<n.data.length;h++)r+="<tr>",n.data[h]?(e=n.data[h].label?n.data[h].label:n.data[h].LABEL,o=n.data[h].value?n.data[h].value:n.data[h].VALUE):(e="",o=""),r+="<td class='w2tb_td'>"+e+"</td>",r+="<td class='w2tb_td'>"+o+"</td>",r+="</tr>";r+="</tbody>",i.innerHTML=r}catch(t){a.w.printStackTrace(t)}},h.prototype.getDataListInfo=function(){try{var t={};if(this.modelControl.isDataCollectionRefBinded){var i=this.options.ref.replace("data:","");return t.id=i.slice(0),"simple"==this.options.seriesType.toLowerCase()?(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.serieNode=this.options.seriesNode,t.valueNode=this.options.valueNode):(t.ref=this.options.ref,t.labelNode=this.options.labelNode,t.seriesColumns=this.options.seriesColumns),t}return null}catch(t){a.w.printStackTrace(t)}}}}]);