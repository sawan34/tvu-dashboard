var listMarkerInfo =  {"markerInfo" : {} }
var listMapLocation;
var arrowInfo; 
var structLanLong;

function init(){
	reset();
}

function reset(){
	listMapLocation = []; 
	arrowInfo = {"doubleArrow": ""}; 
	structLanLong = {"lat": "", "long": "" };
}

function pushLanLong(_lat, _long){
	setStructLanLong(_lat, _long);
	listMapLocation.push(getStructLanLong());
}

function getListMapLocation(){
	return listMapLocation;
}

function setStructLanLong(_lat, _long){
	structLanLong = {"lat": _lat, "long": _long };
}

function getStructLanLong(){
	return structLanLong;
}

function setStructArrowInfo(_flag=true){
	var structArrowInfo;
	arrowInfo = {"doubleArrow": _flag};
}

function getStructArrowInfo(){
	return arrowInfo;
}

function getStructMapLocationArrowInfo(){
	var structMapLocationArrowInfo;
	var mapLocation = getListMapLocation();
	var arrowInfo = getStructArrowInfo();
	if(arrowInfo["doubleArrow"] != "")
			structMapLocationArrowInfo = {"mapLocation": mapLocation, "arrowInfo": arrowInfo };
	else
			structMapLocationArrowInfo = {"mapLocation": mapLocation };
	return structMapLocationArrowInfo;
}

export function setStructMapLocationArrowInfo(listData){
	var data;
	for(var index=0; index<listData.length; index++){
		data = listData[index];
		var curverFlag=0;
		if(data["peerLat"] && data["peerLng"]){
			pushLanLong( data["peerLat"],  data["peerLng"]);
			curverFlag++;
		}
		if(data["livePeerLat"] &&  data["livePeerLng"]){
			pushLanLong( data["livePeerLat"],  data["livePeerLng"]);
			curverFlag++;
		}
		if(curverFlag==2){
			setStructArrowInfo();
		}
		setListMarkerInfo(index+1, getStructMapLocationArrowInfo());
		reset();
	}
}

function setListMarkerInfo(index, data){
	listMarkerInfo["markerInfo"][index] = data;
}

export function getListMarkerInfo(){
	return listMarkerInfo;
}

init();
//setStructMapLocationArrowInfo(arrData);
//console.log(getListMarkerInfo());