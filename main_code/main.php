<!DOCTYPE html>
<html lang="en">

<head>
    
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    
    <!-- CSS -->
    <link rel="stylesheet" href="style.css">
    
    
    <link rel="icon" href="lemon-favicon.png">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    
    <!-- Latest compiled and minified CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Optional theme -->
    

    <!-- Latest compiled and minified JavaScript -->
  
    
    
    <title>Easy Peasy Tracker</title>

</head>

<style>





	
</style>

<body style="background-color: #60bbd0;">
    
   <!-- NAVBAR AND FOOTER --> 
<ul>
  <li ><p style="font-size:28px">&#127819; <b>Easy Peasy Tracker</b></p></li>
  <li class="navigation">
    <a href="javascript:void(0)" class="navbtn"><font-size= 16px><b>Navigation</b></a>
    <div class="navigation-content">
      <a href="#"><FONT COLOR=white><b>Profile</b></a>
      <a href="#"><FONT COLOR=white><b>Export</b></a>
      <a href="#"><FONT COLOR=white><b>Input</b></a>
    </div>
  </li>
</ul>
<div class="footer">
  <p>&#128679; <b>This is a working prototype!</b> &#128679;</p>
</div>




<div class="container-fluid">
  <div class="row">
    <div class="col-md-4 col-sm-4 col-xs-4 "></div>
    
    
    <div class="col-md-4 col-sm-4 col-xs-4 ">PHP</div>
    
    
    <div class="col-md-4 col-sm-4 col-xs-4 "><script type="text/javascript">
	               var clicks = 0;
	               var drinks = 0;
	               
                	function onClickAdd() {
                	clicks += 250;
                	drinks += 1;
                	document.getElementById("clicks").innerHTML = clicks;
                	document.getElementById("drinks").innerHTML = drinks;
                	};
                	
                	function onClickSub() {
                	clicks -= 250;
                	drinks -= 1;
                	if (clicks < 0) {
                	    clicks = 0;
                	    drinks = 0;
                	}
                	document.getElementById("clicks").innerHTML = clicks;
                	document.getElementById("drinks").innerHTML = drinks;
                	};
                	
                    
                	
        	</script>
        	<button class="button sub" onClick="onClickSub()">&#x2796;</button>
        	<button class="button null">&#x1F964;</button>
        	<button class="button add" onClick="onClickAdd()">&#x2795;</button>
        	<p><b>You've drunk <a id="clicks">0</a>ml today! That's <a id="drinks">0</a> glasses of water.</b></p></div>
  </div>
</div>


      

</body>

</html>