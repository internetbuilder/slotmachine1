function CFreespinPanel(oParentContainer){
    var _oFade;
    var _oTextWin;
    var _oContainerPanel;
    var _oContainer;
    var _oParentContainer = oParentContainer;
    
    this._init = function(){
        _oContainer = new createjs.Container();
        _oContainer.on("click",function(){});
        _oContainer.visible = false;
        _oParentContainer.addChild(_oContainer);
        
        _oFade = new createjs.Shape();
        _oFade.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH,CANVAS_HEIGHT);
        _oContainer.addChild(_oFade);
        
        var oSprite = s_oSpriteLibrary.getSprite("msg_box_small");
        
        _oContainerPanel = new createjs.Container();
        _oContainerPanel.x = CANVAS_WIDTH/2;
        _oContainerPanel.y = CANVAS_HEIGHT/2; 
        _oContainerPanel.regX = oSprite.width/2;
        _oContainerPanel.regY = oSprite.height/2;
        _oContainer.addChild(_oContainerPanel);
        
        
        var oBg = createBitmap(oSprite);
       
        _oContainerPanel.addChild(oBg);

        
        
        _oTextWin = new CTLText(_oContainerPanel, 
                    50, 40, oSprite.width-100,400, 
                    60, "center", "#dab977", FONT_GAME_1, 1,
                    0, 0,
                    TEXT_CONGRATS,
                    true, true, true,
                    false );

    };
    
    this.show = function(iTotFreespin){

        _oTextWin.refreshText(TEXT_CONGRATS+"\n\n"+TEXT_YOU_WIN + " " + iTotFreespin + " " + TEXT_FREESPINS);
       
        _oContainer.visible = true;
        
        _oContainerPanel.scale = 0;
        _oFade.alpha = 0;
        
        var oParent = this;
        createjs.Tween.get(_oFade).to({alpha: 0.7}, 300, createjs.Ease.quartOut)
        createjs.Tween.get(_oContainerPanel).to({scale:1}, 1000, createjs.Ease.elasticOut).call(function(){
                                                                                                setTimeout(function(){oParent.hide();},3000);
                                                                                    });
        
       
                                                                                    
        playSound("start_bonus",1,false);                                                                             
    };
    
    
    this.hide = function(){
      
        createjs.Tween.get(_oFade).to({alpha: 0}, 500, createjs.Ease.quartOut)
        createjs.Tween.get(_oContainerPanel).to({scale: 0}, 500, createjs.Ease.backIn).call(function(){
            s_oGame.exitFromFreespinPanel();
        });
    }

    
    
    
    this._init();
}