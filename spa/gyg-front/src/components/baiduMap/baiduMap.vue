<template>
  <div>
    <div id="map" :style="mapStyle"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        mapStyle:{
          width:"100%",
          height:'100%',
        }
      }
    },
    props:{
      // 经度
      longitude:{
        type:Number,
        default:116.404
      },
      // 纬度
      latitude:{
        type:Number,
        default:39.915
      },
      description:{
        type:String,
        default:'天安门'
      }
    },
    mounted(){
      var map =newBMap.Map("map");
      var point =newBMap.Point(this.longitude,this.latitude);
      var marker =newBMap.Marker(point);
      map.addOverlay(marker);
      map.centerAndZoom(point,15);
      // 信息窗的配置信息
      var opts ={
        width :250,
        height:75,
        title :"地址：",
      }
      var infoWindow =newBMap.InfoWindow(this.description, opts);// 创建信息窗口对象
      marker.addEventListener("click",function(){
        map.openInfoWindow(infoWindow,point);
      });
      map.enableScrollWheelZoom(true);
      map.openInfoWindow(infoWindow,point);//开启信息窗口
    }
  }
</script>
