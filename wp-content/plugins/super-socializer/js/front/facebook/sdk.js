function theChampInitiateFB(){FB.init({appId:theChampFBKey,channelUrl:"//"+theChampSiteUrl+"/channel.html",status:!0,cookie:!0,xfbml:!0,version:"v15.0"})}window.fbAsyncInit=function(){theChampInitiateFB(),theChampFbIosLogin&&theChampAuthUserFB(),"function"==typeof theChampDisplayLoginIcon&&theChampDisplayLoginIcon(document,["theChampFacebookButton","theChampFacebookLogin"]),("undefined"!=typeof theChampCommentNotification&&1==theChampCommentNotification||"undefined"!=typeof theChampHeateorFcmRecentComments&&1==theChampHeateorFcmRecentComments)&&FB.Event.subscribe("comment.create",function(e){void 0!==e.commentID&&e.commentID&&("undefined"!=typeof theChampCommentNotification&&1==theChampCommentNotification&&jQuery.ajax({type:"POST",dataType:"json",url:theChampSiteUrl+"/index.php",data:{action:"the_champ_moderate_fb_comments",data:e},success:function(e,t,n){}}),"undefined"!=typeof theChampHeateorFcmRecentComments&&1==theChampHeateorFcmRecentComments&&jQuery.ajax({type:"POST",dataType:"json",url:theChampSiteUrl+"/index.php",data:{action:"heateor_fcm_save_fb_comment",data:e},success:function(e,t,n){}}))}),"undefined"!=typeof theChampFbLikeMycred&&theChampFbLikeMycred&&(FB.Event.subscribe("edge.create",function(e){heateorSsmiMycredPoints("Facebook_like_recommend","",e||"")}),FB.Event.subscribe("edge.remove",function(e){heateorSsmiMycredPoints("Facebook_like_recommend","",e||"","Minus point(s) for undoing Facebook like-recommend")})),"undefined"!=typeof theChampSsga&&theChampSsga&&(FB.Event.subscribe("edge.create",function(e){heateorSsgaSocialPluginsTracking("Facebook","Like",e||"")}),FB.Event.subscribe("edge.remove",function(e){heateorSsgaSocialPluginsTracking("Facebook","Unlike",e||"")}))},function(e){var t,n="facebook-jssdk",o=e.getElementsByTagName("script")[0];e.getElementById(n)||((t=e.createElement("script")).id=n,t.async=!0,t.src="//connect.facebook.net/"+theChampFBLang+"/sdk.js",o.parentNode.insertBefore(t,o))}(document);