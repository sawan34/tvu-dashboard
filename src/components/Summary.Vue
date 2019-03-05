<template id="app-3">
	<div class="summary-container" id="setting">
		<div class="summary-details">
			<a href="#" class="link-btn map"></a>
			<a href="#" class="link-btn menu"> </a>
			<div class="summary">Summary: Live Connection <span>500</span> Average Bitrate <span>3.6 Mbps</span> Live Time <span>50:26:39</span></div>
        <div class="summary-panel" v-show="isShow" id="hide">
             <div class="summary-label">Summary Item</div>
             <div class="summary-item">
               <ul >
                  <li v-for="item in summaryCheckboxes" :key="item.id" :class="item.class" @click="summaryItem(item.id)">
                            {{ item.text }}
                  </li>
               </ul>
             </div>
        </div>
		 	  <a  href="#" class="link-btn settings"  @click="add"></a>
		</div>
		<div class="country-details">
			<div class="country-scroll">
				<ul>
					<li>{{summaryData.country}}: Total Live <span>{{summaryData.totalLive}} </span> Incoming <span>{{summaryData.incoming}}</span> Outcoming <span>{{summaryData.outcoming}}</span> Average Bitrate <span>{{summaryData.averageBitrate}} Mbps</span> </li>
				</ul>
			</div>
			<a href="#" class="link-btn up-arrow" @click="changeSummaryData"></a>
			<a href="#" class="link-btn down-arrow" @click="changeSummaryData"></a>
		</div>
	</div>
</template>


<script>
import summaryItems from "../Constant/constant.data.js";
import init from '../map/script.js';
export default {
  mounted() {
    this.mapsOp = init();
    var _objMapsInfo = summaryItems.markerInfo;

    for (const key in _objMapsInfo) {
      if (_objMapsInfo.hasOwnProperty(key)) {
        let element = _objMapsInfo[key];
        this.mapsOp.createMarker(summaryItems.markerInfo[key].mapLocation, true, summaryItems.markerInfo[key].arrowInfo,key);
        
      }
    }
  },
  name: 'Summary',
  created () {
	    this.startInterval()
   },
  methods: {
      summaryItem:function(e){
      let selectedLi = this.$data.summaryCheckboxes.find(item=>item.id === e);
      let activeClass = selectedLi.class;
      selectedLi.class  =  activeClass ==="active"? "":"active" ;
      
      if(summaryItems.markerInfo[e]){
        if(activeClass ==="active"){
          this.mapsOp.hideMarker(e); 
        }else{
          this.mapsOp.showMarker(e);
        }
      }
      
    },
    add: function (e) {
      e.preventDefault();
      this.$data.isShow = !this.$data.isShow
    },
    changeSummaryData:function(e){
        e.preventDefault();
        let index = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        this.$data.summaryData = summaryItems.summaryData[index];
    },
    startInterval: function () {
                   var self = this;
                   return setInterval(function() {
                        let index = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
                        self.$data.summaryData = summaryItems.summaryData[index]
                   }, 10000);
    }
  },data() {
    return {
      isShow: false,
      errors: {},
      summaryCheckboxes:summaryItems.summaryItems,
      summaryData:summaryItems.summaryData[0]
    };
  },
}


</script>
