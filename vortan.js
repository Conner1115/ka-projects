//scenes
        let actions = ["home","about","showcase","members","login","credits","join"];
        
        //getJSON function made by Matthias and Squishy
        function getJSON(a,b){
            getJSON.callbacks||(getJSON.callbacks={});var c="abcdefghijklmnopqrstuvwxyz";c+=c.toUpperCase();for(var d="";d.length<9||getJSON.callbacks[d];d+=c[Math.floor(Math.random()*c.length)]){}getJSON.callbacks[d]=b,a+=a.indexOf("?")>-1?"&":"?",a+="callback=getJSON.callbacks."+d;var e=document.createElement("script");e.src=a,document.head.appendChild(e)
        }
        
        //re-create the jquery dollar-sign function
        function $(prop, all){
            if(all)
                return document.querySelectorAll(prop);
            else
                return document.querySelector(prop);
        }
        
        //event functions
        function openLinks(){
            $("#nav-links").className = "nav-in";
            $("#close-button").className = "c-in";
        }
        function closeLinks(){
            $("#nav-links").className = "nav-out";
            $("#close-button").className = "c-out";
        }
        function closeLive(){
            $("#live-cov").style.display = "none";
        }
        
        //scene management function
        function showPage(page){
            let pages = $(".page",true)
            for (var i = 0; i < pages.length; i++){
                pages[i].style.display = "none";
            }
            let covs = $(".cov", true)
            for(let c = 0; c < covs.length; c++){
                covs[c].style.animation = "trans 1s 1";
            }
            closeLinks();
            setTimeout(function(){
                $(page).style.display = "block";
            },500);
            setTimeout(function(){
                for(let d = 0; d < covs.length; d++){
                    covs[d].style.animation = "none";
                }
            },1000);
        }
        
        //run a button so when it's clicked, it shows a specific page
        function RunLinks(num) {
            var buttonIndex = document.querySelectorAll(".nav-" + actions[num]);
            for(var i = 0; i < buttonIndex.length; i++){
                buttonIndex[i].addEventListener("click",function(){
                    showPage("#"+actions[num]);
                });
          }
        }
        
        for(var i = 0; i < actions.length; i++){
            RunLinks(i);
        }
        
        //if the whole program has finished loading, hide the loader after one second
        window.addEventListener("load", function(){
            setTimeout(function(){
                $("#loader").style.display = "none";
                showPage("#home");
            },1000);
        });
    
        //The function that opens up the live website
        function openLive(){
            var w = window.open();
            w.document.open();
            w.document.write("<!DOCTYPE html>"+document.documentElement.outerHTML.replaceAll("KAInfiniteLoopProtect();",""));
            w.document.close();
            
            
        }
