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
<ul style="padding-left: 0px;">
  <li ><p style="font-size:28px; text-align: left;">&#127819; <b>Easy Peasy Tracker  </b></p></li>
  
  <li class="calendar">
     <a href="#news" style="margin-left:10px;">&#128197;</a>
  </li>
  
  <li class="navigation">
    <a href="javascript:void(0)" class="navbtn"><font-size= 16px><b>Navigation</b></a>
    <div class="navigation-content">
      <a href="prototype.php"><FONT COLOR=white><b>Profile</b></a>
      <a href="prototype.php"><FONT COLOR=white><b>Export</b></a>
      <a href="prototype.php"><FONT COLOR=white><b>Import</b></a>
      <a href="prototype.php"><FONT COLOR=white><b>Settings</b></a>
    </div>
  </li>
  
  
  
</ul>
<div class="footer">
  <p>&#128679; <b>This is an under construction prototype!</b> &#128679;</p>
</div>




<div class="container-fluid">
  <div class="row">
    <div class="col-md-4 col-sm-4 col-xs-4 ">
        <p style="font-size:28px;">	&#128211; <b>Symptom Tracking Log</b></p>
        <p style="font-size:16px;"><b>It seems you don't have any logs going. Start a new one?</b></p>
        <a class="btn btn-outline-light" href="newtrack" role="button">Start A New Track</a>
        <br>
        
        <div class="card mb-3">
  <img class="card-img-top" src="card.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title" style = "color: black">Your Track Name Here</h5>
    
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
<br>
        
        
        
        
        
        
        
        
        
    </div>
        
        
        
    <div class="col-md-4 col-sm-4 col-xs-4 ">
        <p style="font-size:28px;">&#129351; <b>Today's Activity Log</b></p>
        <ul class="list-group">
            <li class="list-group-item"><b>Water Intake:<a id="ml">0</a>ml</b></li>
            <li class="list-group-item"><b>BP:</b></li>
            <li class="list-group-item"><b>Height:</b></li>
            <li class="list-group-item"><b>Weight:</b></li>
        </ul>
            
    </div>
    <div class="col-md-4 col-sm-4 col-xs-4 ">
        <p style="font-size:28px;">	&#9728;&#65039; <b>What have you done today?</b></p>
            <script type="text/javascript">
	               var clicks = 0;
	               var drinks = 0;
	               var ml = 0;
	               
                	function onClickAdd() {
                	clicks += 250;
                	ml += 250;
                	drinks += 1;
                	document.getElementById("clicks").innerHTML = clicks;
                	document.getElementById("drinks").innerHTML = drinks;
                	document.getElementById("ml").innerHTML = ml;
                	};
                	
                	function onClickSub() {
                	clicks -= 250;
                	ml -= 250;
                	drinks -= 1;
                	if (clicks < 0) {
                	    clicks = 0;
                	    drinks = 0;
                	    ml = 0;
                	}
                	document.getElementById("clicks").innerHTML = clicks;
                	document.getElementById("drinks").innerHTML = drinks;
                	document.getElementById("ml").innerHTML = ml;
                	};
                	
                    
                	
        	</script>
        	<button class="button sub" onClick="onClickSub()">&#x2796;</button>
        	<button class="button null" style="cursor: default;">&#x1F964;</button>
        	<button class="button add" onClick="onClickAdd()">&#x2795;</button>
        	<p><b>You've drunk <a id="clicks">0</a>ml today! That's <a id="drinks">0</a> glasses of water.</b></p></div>
  </div>
</div>


      

</body>

</html>