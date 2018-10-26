//地图容器
var chart = echarts.init(document.getElementById('main'));


var mapdata = [];
//绘制湖北地图
$.getJSON('static/map/hubei.json', function(data){
	d = [];
	for( var i=0;i<data.features.length;i++ ){
		d.push({
			name:data.features[i].properties.name,
            value:Math.round(Math.random()*1000)
		})
	}
	mapdata = d;
	//注册地图
	echarts.registerMap('湖北', data);
	//绘制地图
	renderMap('湖北',d);
});

//地图点击事件
chart.on('click', function (params) {
	console.log( params );
	if( params.seriesName == '湖北'){
			//显示县级地图
			$.getJSON('static/map/city/'+ cityMap[params.name] +'.json', function(data){
				echarts.registerMap( params.name, data);
				var d = [];
				for( var i=0;i<data.features.length;i++ ){
					d.push({
						name:data.features[i].properties.name,
                        value:Math.round(Math.random()*1000)
					})
				}
				renderMap(params.name,d);
			});
	}else{
		renderMap('湖北',mapdata);
	}
});

//初始化绘制湖北地图配置
var option = {
	backgroundColor: '#000',
    title : {
        text: 'Echarts4 湖北地图下钻至县级',
        subtext: '二级下钻',//副标题
        left: 'center',
        textStyle:{
            color: '#fff',
            fontSize:16,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        },
        subtextStyle:{
        	color: '#ccc',
            fontSize:13,
            fontWeight:'normal',
            fontFamily:"Microsoft YaHei"
        }
    },
    visualMap: {
	    left: 'left',
        top: 'bottom',
        min: 0,
        max: 1000,
        text: ['高', '低'], // 文本，默认为数值文本
        calculable : true  // 控制范围
    },
    tooltip: {
        trigger: 'item'//触发类型 item 无类目轴图表  axis 有类目轴图表
    },
    toolbox: {
        show: true,
        orient: 'vertical',//布局朝向
        left: 'right',
        top: 'center',
        feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
        },
        iconStyle:{
        	normal:{
        		color:'#fff'
        	}
        }
    },
    animationDuration:1000,//初始动画时长
	animationEasing:'cubicOut',//初始动画效果
	animationDurationUpdate:1000//更新动画时长
     
};
function renderMap(map,data){
	option.title.subtext = map;
    option.series = [ 
		{
            name: map,
            type: 'map',
            map: map,
            roam: false,
            nameMap:{
			    'hubei':'湖北'//自定义地区的名称映射
			},
            label: {
                show:false,
                textStyle:{
                    color:'#999',
                    fontSize:13
                }
	        },
	        itemStyle: {
                areaColor: '#323c48',
                borderColor: 'dodgerblue'
	        },
            emphasis:{
                label:{
                    show: true,
	                textStyle:{
						color:'#fff',
						fontSize:13
					}
                },
                itemStyle:{
                    areaColor: 'darkorange',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowBlur: 20,
                    borderWidth: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data:data
        }	
    ];
    //渲染地图
    chart.setOption(option);
}