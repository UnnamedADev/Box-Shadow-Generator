"use strict";

$(document).ready(function(){
    
    //const
    
    //vars
    
    //main
    addInputEvents();
    addCopyEvent();
    
    //fxs
    function addCopyEvent(){
        var myButton = document.getElementById("copyButton");
        myButton.addEventListener("click", function(){
            var copyField = document.getElementById("yourCode");
            copyField.select();
            document.execCommand("Copy");
            
            if ( document.selection ) {
                document.selection.empty();
            } else if ( window.getSelection ) {
                window.getSelection().removeAllRanges();
            }
        });
    }
    
    function addInputEvents(){
        var validDiv = document.getElementById("configuration");
        
        var inputs = validDiv.getElementsByTagName("input");
        
        for(var i=0;i<inputs.length;i++){
            inputs[i].addEventListener("input", function(){
                refreshValue(this);
            });
        }
    }
    
    function refreshValue(obj){
        var newId = obj.id + "Value";
        var previewId = obj.id + "Preview";
        var newObj = document.getElementById(newId);
        
        var preffix = "";
        var suffix = "";
        
        switch(obj.id){
            case "sMoveX":
            case "sMoveY":
            case "sMoveY":
            case "sBlur":
            case "sSize":
                preffix = "";
                suffix = " px";
               break;
            case "sShadowColor":
                preffix ="#";
                suffix = "";
                var shadowObj = document.getElementById(previewId);
                shadowObj.style.background  = preffix + obj.value + suffix;
                break;
            case "sBackgroundColor":
                preffix ="#";
                suffix = "";
                var backgroundObj = document.getElementById(previewId);
                backgroundObj.style.background = preffix + obj.value + suffix;
                break;
            default:
                console.log("default");
               break;
            }
               
        newObj.innerHTML = preffix + obj.value + suffix;
        
        var previewObj = document.getElementById("exampleDiv");
        
        refreshPreview(previewObj);
        
    }
    
    function refreshPreview(previewObj){
        
        var moveX = document.getElementById("sMoveX").value+"px ";
        var moveY = document.getElementById("sMoveY").value+"px ";
        var blur = document.getElementById("sBlur").value+"px ";
        var size = document.getElementById("sSize").value+"px ";
        var shadowColor = "#"+document.getElementById("sShadowColor").value;
        var backgroundColor = "#"+document.getElementById("sBackgroundColor").value;
        
        previewObj.style.background = backgroundColor;
        var shadowCode = moveX+moveY+blur+size+shadowColor
        previewObj.style.boxShadow = shadowCode;
        
        refreshCode(shadowCode);
    }
    
    function refreshCode(shadow){
        var codeField = document.getElementById("yourCode");
        var cssShadow = "box-shadow: "+shadow+";\n";
        var cssShadowMoz = "-moz-box-shadow: "+shadow+";\n";
        var cssShadowWebkit = "-webkit-box-shadow: "+shadow+";\n";
        codeField.value = cssShadow+cssShadowMoz+cssShadowWebkit;
    }
});