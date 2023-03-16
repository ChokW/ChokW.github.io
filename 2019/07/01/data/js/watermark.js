/**
 * @name Utils#setWaterMark
 * @function   
 * @desc 添加满屏水印
 * @description  全屏30°倾斜水印，如需调整，可自行调整Math.sin()中角度。markText为水印显示的内容，根据需要可自行设置
 */
function setWaterMark(){
	if($('#watermark').size() < 1){
		$('body').append('<canvas id="watermark" style="pointer-events:none;position:fixed;z-index:9999;display:block;top:0;"></canvas>');
	}
	var ctxWidth = $(document).width(),
		ctxHeight = $(document).height();
	$('#watermark').attr('width',ctxWidth);
	$('#watermark').attr('height',ctxHeight);
	var ctx = document.getElementById('watermark').getContext('2d'),
		markText = '仅供王小兴讨论使用          ',
		offsetX = Math.ceil(ctx.measureText(markText).width) + 40,
		offsetY = 114,
		incline = ctxHeight / Math.sin(2*Math.PI/360*30),
		offsetIncline = Math.sin(2*Math.PI/360*30) * ctxHeight / Math.sin(2*Math.PI/360*60),
		incline = ctxWidth > incline ? ctxWidth : incline,
		lineCount = Math.ceil(incline/offsetY),
		rowCount = Math.ceil(incline/offsetX);
	ctx.font = '16px sans-serif';
	ctx.fillStyle = 'rgba(132,147,183,.2)';
	ctx.rotate(-30*Math.PI/180);
	ctx.translate(-offsetIncline,0);
	for(var i = 0;i < lineCount;i++){
		for(var j = 0;j < rowCount;j++){
			ctx.fillText(markText, (offsetX * j), (offsetY * i));
		}
	}
}