<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>impressionist - <?php echo $deckObject->title; ?></title>
    <link href="libraries/frontend/impressionist/css/mainstyle.css" rel="stylesheet" />
   <link href="libraries/frontend/impressionist/css/matrices.css" rel="stylesheet" />

    <link href="libraries/frontend/impressionist/colorpicker/css/colorpicker.css" rel="stylesheet" />
   <link href="libraries/frontend/impressionist/colorpicker/css/layout.css" rel="stylesheet" />
    <link href="libraries/frontend/impressionist/scripts/bootstrap/css/bootstrap.css" rel="stylesheet" />

    <link href='http://fonts.googleapis.com/css?family=Inika:400,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Fresca' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Bevan' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Doppio+One' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Henny+Penny' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Ribeye+Marrow' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Unkempt' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Armata' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Walter+Turncoat' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Crete+Round' rel='stylesheet' type='text/css'>


  
  <script src="libraries/frontend/impressionist/scripts/jquery.js"></script>
   <script src="libraries/frontend/impressionist/scripts/keymaster.js"></script>
 

  <script src="libraries/frontend/impressionist/scripts/datastore.js"></script>
  <script src="libraries/frontend/impressionist/scripts/appui.js"></script>
  <script src="libraries/frontend/impressionist/scripts/fileops.js"></script>

  <script src="libraries/frontend/impressionist/scripts/templ.js"></script>
  <script src="libraries/frontend/impressionist/scripts/knobdial.js"></script>
  <script src="libraries/frontend/impressionist/scripts/main.js"></script>
  <script type="text/javascript" src="libraries/frontend/impressionist/colorpicker/js/colorpicker.js"></script>
  <script src="libraries/frontend/impressionist/scripts/matrices.js"></script>
  <script src="libraries/frontend/impressionist/scripts/raphael.js"></script>
  <script src="libraries/frontend/impressionist/scripts/freetransform.js"></script>

  <script type="text/javascript" src="libraries/frontend/impressionist/scripts/jqueryui.js"></script>
  <script type="text/javascript" src="libraries/frontend/impressionist/scripts/bootstrap/js/bootstrap-button.js"></script>
  <script type="text/javascript" src="libraries/frontend/impressionist/scripts/bootstrap/js/bootstrap-dropdown.js"></script>
  <script type="text/javascript" src="libraries/frontend/impressionist/scripts/bootstrap/js/bootstrap-button.js"></script>
  <script type="text/javascript" src="libraries/frontend/impressionist/scripts/bootstrap/js/bootstrap-modal.js"></script>
  <script type="text/javascript" src="http://twitter.github.com/bootstrap/assets/js/bootstrap-tooltip.js"></script>
  
    <script>
    var slides=<?php echo $slides;?>;
    
    $(document).ready(function(e)
    {
      $("#mybody").css("visibility", "hidden");
      
      if(Utilities.isSupportedUA())
      {
        $("#mybody").css("visibility", "visible");
        init();
      }
      else
      {
        document.location.href = "index.html";
      }
    });  
    function loadSlides(){
        var tmp,tmp2=0;
		//console.log(slides);
    	$.each(slides, function(index, value) { 
  		  //console.log(value); 
  		  addSlide();
  		  tmp2=Math.floor((Math.random()*10000)+1000);
  		  tmp=currentSelected.split('slidethumb')[1];;
  		  //$('#____slide'+tmp).html('<h2>'+value.title+'</h2>'+value.body);
    	$('#____slide'+tmp).html('<h3 class="ui-draggable slideobject largeheader" id="____object'+tmp2+'" data-font-size="largeheader" data-font-face="Inika" data-selected-color="#000000" style="-webkit-transform: matrix(1, 0, 0, 1, 0, 0); z-index: 20; font-family: Inika; left: 21px; top: 146px; ">'+value.title+'</h3>');
  		});
     }
    </script>
  </head>
  <body id="mybody">
   <div class="navbar headerbg" id="topnavbar">
    <div>
      <div class="container" style="width: auto;">
        <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
          <span class="icon-bar">Hello</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </a>
        <img src="libraries/frontend/impressionist/pics/poocha.png" class="logopic">
        <a class="brand" href="#" id="brandlogo">impressionist <sup id="smallsup">0.1</sup></a>
        <div class="nav-collapse">
          <ul class="nav">
          <li>
                                  <div  id="typeRadio">
                                     <a id="newBtn" rel="tooltip" title="first tooltip"  class="btn  btn-small" href="#" onclick="saveAndCreate()"><i class="icon-plus" ></i>&nbsp;  </a>
                                      <a id="openBtn"   class="btn  btn-small" href="#" data-toggle="modal" onclick="checkForSavedPresentations()"><i class="icon-folder-open " ></i> &nbsp; </a> 
                                       <a id="saveBtn"   class="btn  btn-small" href="#" data-toggle="modal" onclick="doSave()"><i class="icon-ok " ></i> &nbsp; </a> 
                                  </div>
                                  

            </li>
          </ul>
             <ul class="nav pull-right">
             
               <li class="dropdown" id="viewchangedropdown1">
                 <div class="btn-group">
                    <a href="#" onclick="toggleDisplayView()" id="rightBtn" class=" btn btn-small btn-inverse">Orchestration View</span></a>
                  </div>
              </li>
              <li>&nbsp;&nbsp;&nbsp;</li>
            </ul>
          </div>
        </div><!-- /.nav-collapse -->
      </div>
    </div><!-- /navbar-inner -->
  </div><!-- /navbar -->
   <div class="navbar subnavbg" id="subnav">
      <div class="container" style="width: auto;">
         <ul class="nav">
          <li>&nbsp;&nbsp;</li>
     <li>
                      <div class="btn-group">
                                     <a class="btn btn-warning btn-small" onclick="addSlide()" href="#"><i class="icon-plus-sign icon-white" ></i>&nbsp;Add Slide</a>
                                    <?php if (isset($deckObject->id)){ echo '<a class="btn btn-info btn-small" onclick="loadSlides()" href="#"><i class="icon-plus-sign icon-white" ></i>&nbsp;Load Deck '.$deckObject->id.'</a>'; }?>
                       </div>

            </li>
            <li>&nbsp;&nbsp;&nbsp;&nbsp;</li>
           
             <li>
                    <div class="btn-group" id="typeRadio">
                    <a id="textBtn"  class="btn btn-info btn-inverse" href="#" onclick="setObjectType('text')"><i class="icon-white icon-text-width" ></i>&nbsp;</a>
                    <a id="picBtn"   class="btn btn-info btn-inverse" href="#" data-toggle="modal" onclick="setObjectType('pic')"><i class="icon-white icon-picture" ></i> &nbsp;</a>    
                    <a id="picBtn"   class="btn btn-info btn-inverse" href="#" data-toggle="modal" onclick="setObjectType('shape')"><i class="icon-white icon-star" ></i> &nbsp;</a>  
                   </div>
            </li>
            <li>&nbsp</li>

             <li>
                  <div class="btn-group" id="typeRadio">

                  <a class="btn btn-inverse btn-small" id="boldBtn" href="#" onclick="toggleBold()">B &nbsp;</a>
                  <a class="btn btn-inverse btn-small" href="#" onclick="toggleItalic()">I &nbsp;</a>
                  <a class="btn btn-inverse btn-small" href="#" onclick="toggleUnderline()">U &nbsp;</a>

                </div>
            <li>
               <li>&nbsp</li>
             <li>
                  <div class="btn-group" id="typeRadio">

                  <a class="btn btn-inverse btn-small" id="boldBtn" href="#" onclick="doLeftAlign()"><i class="icon-align-left icon-white" ></i>&nbsp;</a>
                  <a class="btn btn-inverse btn-small" href="#" onclick="doCenterAlign()"><i class="icon-align-center icon-white" ></i>&nbsp;</a>
                  <a class="btn btn-inverse btn-small" href="#" onclick="doRightAlign()"><i class="icon-align-right icon-white" ></i>&nbsp;</a>

                </div>
            <li>
           <li>&nbsp</li>

            <li class="dropdown">
              <div class="btn-group">
              <a href="#" class="btn btn-small btn-inverse dropdown-toggle" data-target="fontsizedropdown" data-toggle="dropdown" id="fontstyledropdown"> Select Font Size <b class="caret"></b></a>
              <ul class="dropdown-menu" id="fontsizedropdown">
                <!--<li><a href="#" onclick="setFontStyle('jumbo')">Very Large</a></li>-->
                <li><a href="#" onclick="setFontStyle('largeheader')">Large</a></li>
                <li><a href="#" onclick="setFontStyle('mediumheader')">Medium</a></li>
                <li><a href="#" onclick="setFontStyle('smallheader')">Small</a></li>
                <li class="divider"></li>
                <li><a href="#">Paragraph</a></li>
                <li><a href="#">Custom</a></li>
              </ul>
            </li>
            <li>&nbsp;</li>
            <li class="dropdown">
              <div class="btn-group">
              <a href="#" class="btn btn-small btn-inverse dropdown-toggle" data-toggle="dropdown" data-target="fonttypedropdown" id="fontdropdown"> Select Font &nbsp;<span class="caret"></span></a>
              <ul class="dropdown-menu" id="fonttypedropdown">
                <li class="shadedanchor"><a>Sans Serif Fonts</a></li>
                <li class="divider"></li>
                <li><a href="#" onclick="setFont('Inika')">Inika</a></li>
                <li><a href="#" onclick="setFont('Fresca')">Fresca</a></li>
                <li><a href="#" onclick="setFont('Doppio One')">Doppio One</a></li>
                <li><a href="#" onclick="setFont('Montserrat')">Montserrat</a></li>
                <li><a href="#" onclick="setFont('Bevan')">Bevan</a></li>
                <li>&nbsp;</li>
                <li class="shadedanchor"><a>Decorative Fonts</a></li>
                <li>&nbsp;</li>
                <li><a href="#" onclick="setFont('Walter Turncoat')">Walter Turncoat</a></li>
                <li><a href="#" onclick="setFont('Henny Penny')">Henny Penny</a></li>
                <li><a href="#" onclick="setFont('Ribeye Marrow')">Ribeye Marrow</a></li>
                <li><a href="#" onclick="setFont('Unkempt')">Unkempt</a></li>
              </ul>
            </div>
            </li>
            <li>&nbsp;&nbsp;</li>
        <li><div id="colorSelector"></div></li>
        <li>&nbsp;</li>

          </li>
  
           <canvas id="mask">

          </canvas>
      
        </div>
      </li>
          <ul class="nav pull-right">
            

          </ul>
        </div><!-- /.nav-collapse -->
      </div>
  </div><!-- /navbar -->
   <div class="navbar subnavbg" id="subnav2" style="background-color:#222">
      <div class="container" style="width: auto;">
        <div class="nav-collapse">
          <ul class="nav">
  
       <li><a>Rotation</a></li>
       <li>
        <input id="slideknob" class="knob" data-thickness=".3" data-width="38" data-min="-90" data-max="90"  data-cursor=true/>
      </li>
      <li><a> RotationX</a></li>

       <li>
        <input id="rotationxknob" class="knob" data-thickness=".3" data-width="38" data-min="-90" data-max="90"  data-cursor=true/>
      </li>
        <li><a> RotationY</a></li>

       <li>
        <input id="rotationyknob" class="knob" data-thickness=".3" data-width="38" data-min="-90" data-max="90"  data-cursor=true/>
      </li>
      <li ></li>
       <li><a>Slide Depth</a></li>
       <li>
        <input id="depthrange" type="range" min="0" max="5000" />
      </li>
        <li ></li>
       <li><a>Slide Scale</a></li>
       <li>
        <input id="scalerange" type="range" min="1" max="9" />
      </li>
            <li>
            <div class="btn-group">
        
      </div>
    </li>

    <li class="dropdown">
              
            </li>
            <li class="dropdown">
             
            </li>
          </ul>
          <ul class="nav pull-right">
            <li class="divider-vertical"></li>

          <li>
        <div class="btn-group">
          <a class="btn btn-small" onclick="preparePreview()" href="#"><i class="icon-play-circle" ></i>  Preview     </a>
        </div>
      </li>  
        <li>&nbsp; &nbsp; </li>
      <li>

        <div class="btn-group">

          <a class="btn btn-warning btn-small" href="#" onclick="prepareDownload()"><i class="icon-download" ></i>  Download     </a>
        </div>
      </li>
            
          </ul>
        </div><!-- /.nav-collapse -->
      </div>
  </div><!-- /navbar -->
  <div class="container1">
   <div class="slideholder" id="slidethumbnailholder">

   </div>
   <div class="presentationarea" id="drawingboard">
   
      <a href="#" id="deleteBtn" class="deleteicon" style="z-index:40; left:-20000px" onclick="deleteObject()">x</a>

   </div>
  <textarea id="editorBox" style="z-index:3000; left:-20000px"></textarea>
   <div class="orchestration" id="orchestrationarea">
    <div class="vp1">
    </div>
    <div class="vp2">
    </div>
    <div class="vp3">
    </div>
    <div class="vp4">
    </div>
    <div class="vp6">
    </div>
    <div class="vp7">
    </div>
    <div class="vp8">
    </div>
    <div class="vp9">
    </div>
    <div class="vertline">
    </div>
    <div class="horizline">
    </div>
    <span class="label label-important rangecall">Range -6000px to 6000px</span>
    <span id="splithere"></span>
  </div>
   <div id="outputconsole">

     </div>
 </div>
 </div>
          <div id="myModal" class="modal hide fade" style:"z-index:350000">
            <div class="modal-footer">
              <a class="close" data-dismiss="modal" >&times;</a>
              <h3>Add an Image</h3>
            </div>
            <div class="modal-body">
              <h4>Paste / Enter a URL </h4>
              <br/>
              <input type="text" class="input-medium" id="urlinput"/>
              <h4>Preview</h4>
              <br/>
                 <img id="previewimg"></img>
                 <!--<span class="label label-warning warninglabel">By adding this pic, you confirm that you have the rights to do so.</span>-->
              <br/>
            </div>
            <div class="modal-footer">
              <a href="#" class="btn btn-info" data-dismiss="modal" onclick="addPicture()">Add to slide</a>
              <a href="#" class="btn" data-dismiss="modal" >Close</a>
            </div>
          </div>
          <div id="saveModal" class="modal hide fade" style:"z-index:350000">
            <div class="modal-footer">
              <a class="close" data-dismiss="modal" >&times;</a>
              <h3 id="savepresoheader">Save Current Presentation</h3>
            </div>
            <div class="modal-body">
              <h4>Enter a name</h4>
              <br/>
              <input type="text" class="input-medium" id="saveInput"/>
            </div>
            <div class="modal-footer">
              <a href="#" class="btn btn-info" data-dismiss="modal" onclick="setSaveName()">Save</a>
              <a href="#" class="btn" data-dismiss="modal" >Cancel</a>
            </div>
          </div>
          <div id="openModal" class="modal hide fade" style:"z-index:350000">
            <div class="modal-footer">
              <a class="close" data-dismiss="modal" >&times;</a>
              <h3>Open Presentation</h3>
            </div>
            <div class="modal-body">
              <h4>Saved Presentations... (double click to open)</h4>
              <br/>
              <div id="existingpresentations">
                  <ul class="nostyle" id="savedpresolist">

                  </ul>
              </div>
            </div>
            <div class="modal-footer">
              <a href="#" class="btn btn-info" data-dismiss="modal"onclick="createOrOpen()">OK</a>
              <a href="#" class="btn" data-dismiss="modal" >Cancel</a>
            </div>
          </div>
          <a href="#" id="leftarrow" onclick="movePageLeft(event)"><img src="libraries/frontend/impressionist/pics/leftarrow.png" style="width:48px; height:48px"></img></a>
          <a href="#" id="rightarrow" onclick="movePageRight(event)"><img src="libraries/frontend/impressionist/pics/rightarrow.png" style="width:48px; height:48px"></img></a>
    
    
     
        <span id="play">
            <span class="rotate label label-info" id="spanrotate">rotate</span>
            <!--<span class="scale">scale</span>-->
            <span class="skewx label label-info" id="spanskewx">skewx</span>
            <span class="skewy label label-info" id="spanskewy">skewy</span>

           <!-- <span class="move">move</span>-->
      </span>
 <div id="contextbar">
    </div>
    <div id="footerbar" class="navbar">
     
     </div>

     
     <script type="text/javascript" src="libraries/frontend/impressionist/scripts/utilities.js"></script>
  </body>