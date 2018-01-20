"use strict";

$(document).ready(function(){
    
    //const
    
    //vars
    
    //main
    addInputEvents();
    
    //fxs
    function addInputEvents(){
        var validDiv = document.getElementById("configuration");
        console.log(validDiv);
        
        var inputs = validDiv.getElementsByTagName("input");
        
        for(var i=0;i<inputs.length;i++){
            inputs[i].addEventListener("input", function(){
                refreshValue(this);
            });
        }
    }
    
    function refreshValue(obj){
        var newId = obj.id + "Value";
        var newObj = document.getElementById(newId);
        newObj.innerHTML = obj.value + " px";
        
        var previewObj = document.getElementById("exampleDiv");
        
        refreshPreview(previewObj);
    }
    
    function refreshPreview(previewObj){
        
        var moveX = document.getElementById("sMoveX").value;
        var moveY = document.getElementById("sMoveY").value;
        var blur = document.getElementById("sBlur").value;
        var size = document.getElementById("sSize").value;
        var shadowColor = document.getElementById("sShadowColor").value;
        var backgroundColor = document.getElementById("sBackgroundColor").value;
        
        previewObj.style.background = "#"+backgroundColor;
        
        previewObj.style.boxShadow = moveX+moveY+blur+size+"#"+shadowColor;
        
    }
});