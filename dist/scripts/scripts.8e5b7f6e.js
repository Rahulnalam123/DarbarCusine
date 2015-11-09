"use strict";angular.module("darbarCusineApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/menu",{templateUrl:"views/menu.html",controller:"MenuCtrl",controllerAs:"menu"}).otherwise({redirectTo:"/"})}]),angular.module("darbarCusineApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("darbarCusineApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("darbarCusineApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class=""> <div id="myCarousel" class="carousel slide" data-ride="carousel"> <!-- Indicators --> <ol class="carousel-indicators"> <li data-target="#myCarousel" data-slide-to="0" class="active"></li> <li data-target="#myCarousel" data-slide-to="1"></li> <li data-target="#myCarousel" data-slide-to="2"></li> <li data-target="#myCarousel" data-slide-to="3"></li> </ol> <!-- Wrapper for slides --> <div class="carousel-inner" role="listbox"> <div class="item active"> <img src="images/slideImages/image2.c318811d.jpg" style="width:1024px; height:682px" alt="Chania"> </div> <div class="item"> <img src="images/slideImages/image1.5374bc60.jpg" style="width:1024px; height:682px" alt="Chania"> </div> <div class="item"> <img src="images/slideImages/image3.9e0c2c8b.jpg" style="width:1024px; height:682px" alt="Flower"> </div> <div class="item"> <img src="images/slideImages/image4.3ff17667.jpg" style="width:1024px; height:682px" alt="Flower"> </div> </div> <!-- Left and right controls --> <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next"> <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span class="sr-only">Next</span> </a> </div> </div> <div class="row marketing"></div> <div class="panel panel-success"> <div class="panel panel-heading">Welcome to Darbar Indian Cuisine </div> <div class="panel panel-body"> This is the body of the panel </div> </div>  <div class="row marketing"> <div class="row"> <div class="col-sm-6 col-md-4"> <div class="thumbnail"> <img src="images/thumbImages/BestofPL.8ce1f5a3.jpg" style="width:1024px; height:208px" alt="Best of Palo Alto"> <div class="caption"> <h3 text-align="center">Thumbnail label</h3> <p>...</p> <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p> </div> </div> </div> <div class="col-sm-6 col-md-4"> <div class="thumbnail"> <img src="images/thumbImages/tajMahal.6db144f1.jpg" style="width:1024px; height:208px" alt="The lovers spot Taj Mahal"> <div class="caption"> <h3>Thumbnail label</h3> <p>...</p> <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p> </div> </div> </div> <div class="col-sm-6 col-md-4"> <div class="thumbnail"> <img src="images/thumbImages/SulaWines.61133811.jpg" style="width:1024px; height:208px" alt="Sula Wine Yards"> <div class="caption"> <h3>Thumbnail label</h3> <p>...</p> <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p> </div> </div> </div> </div> </div>'),a.put("views/menu.html","<p>this is menu view </p>")}]);