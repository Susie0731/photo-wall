$(function(){
    $.pictureView = function(i){
        var pictureView_html = '<div id="pictureViewer">' +
        '<div class="content">' +
        '<div class="menu-bar">' +
        '<div class="handel close-view" title="\u5173\u95ED(ESC)"></div>' +
        '<div class="handel maximization" title="\u6700\u5927\u5316"></div>' +
        '<div class="handel miniaturization hide" title="\u5C0F\u7A97\u53E3"></div>' +
        '<div class="clear-flex"></div>' +
        '</div>' +
        '<div class="handel-prev left" title="\u4E0A\u4E00\u5F20(\u2190)"></div>' +
        '<div class="picture-content">' +
        '<img class="cover" src="">' +
        '</div>' +
        '<div class="handel-next right" title="\u4E0B\u4E00\u5F20(\u2192)"></div>' +
        '<div class="counter">' +
        '</div>' +
        '</div>' +
        '</div>';

        var $imgs = i.imgs,
            $initImageIndex = i.initImageIndex;
        
        if($('#pictureViewer').length == 0)
            $('body').append(pictureView_html)
        //definition variable

        var BODY = $('body');
        var $pictureViewer = $('#pictureViewer');
        var $pictureViewerContent = $pictureViewer.children('.content');
        var $cover = $pictureViewer.find('.picture-content .cover');
        var $closeBtn = $pictureViewer.find('.close-view');
        var $maximizationBtn = $pictureViewer.find('.maximization');
        var $miniaturizationBtn = $pictureViewer.find('.miniaturization');
        var $prevBtn = $pictureViewer.find('.handel-prev');
        var $nextBtn = $pictureViewer.find('.handel-next');
        var $num = $pictureViewer.find('.counter .num');
        var $total = $pictureViewer.find('.counter .total');
        var defaultViewWidth = $pictureViewerContent.css('width');
        var defaultViewHeight = $pictureViewerContent.css('height');
        var $imagesTotal = $imgs.length;

        var lockBody = function(){
            return BODY.css('overflow','hidden');
        }
        var showView = function(){
            $pictureViewer.show();
            console.log('show succsee');
            console.log($initImageIndex);
            console.log($imgs[$initImageIndex-1]);
            lockBody();
        }
        showView();

        var changeImage = function(index){
            $cover.attr('src',$imgs[index]);
        }
        changeImage($initImageIndex-1);
        
        var hideView = function(){
            $pictureViewer.hide();
            console.log('hide success');
        }
        $closeBtn.on('click',function(){
            hideView();
        })
        var toPrevImage = function(index){
            changeImage(index-1);
            $initImageIndex = $initImageIndex-1;
        }
        $prevBtn.on('click',function(){
            if($initImageIndex == 0)
                $initImageIndex = 7;
            toPrevImage($initImageIndex-1);
            console.log('change success');
            console.log($initImageIndex);
        })
        var toNextvImage = function(index){
            changeImage(index+1);
            $initImageIndex = $initImageIndex+1;
        }
        $nextBtn.on('click',function(){
            if($initImageIndex == 6)
                $initImageIndex = 0;
            toNextvImage($initImageIndex-1);
            console.log('change success');
            console.log($initImageIndex);
        })        
    }

});