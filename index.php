<!doctype html>
<html class="no-js" lang="">

    <head>
      <meta charset="utf-8">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Good News</title>
      <link rel="stylesheet" href="styles/normalize.css" media="screen" charset="utf-8">
      <link rel="stylesheet" href="styles/html5bp.css" media="screen" charset="utf-8">
      <link rel="stylesheet" href="styles/style.css" media="screen" charset="utf-8">
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">

    </head>

    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <header>
          <section class="container">
            <a href="#"><h1 class="trigger-popup">Good News</h1></a>
            <nav>
              <ul>
                <li><a href="#" class="selected-category"></a>
                    <ul class="categories"></ul>
                </li>

                <li><a href="#" class="selected-source"></a>
                    <ul class="sources"></ul>
                </li>

                <li><a href="#" class="selected-story-type"></a>
                    <ul class="story-type"></ul>
                </li>
              </ul>
              <section id="search">
                <input type="text" name="name" value="">
                <a href="#"><img src="images/search.png" alt="" /></a>
              </section>
            </nav>
            <div class="clearfix"></div>
          </section>
        </header>
        <!--<div id="popUp" class="loader hidden">-->
        <div id="element_to_pop_up" class="pop-content">
            <h1 class="pop-title"></h1>
            <div class="pop-image"></div>
            <h6 class="pop-synopsis"></h6>

        </div>
        <div id="popUp2" >
          <a href="#" class="closePopUp">X</a>
          <div class="container">
            <h1>Article title here</h1>
            <p>
              Article description/content here.
            </p>
            <a href="#" class="popUpAction" target="_blank">Read more from source</a>
          </div>
        </div>
        <section id="main" class="container">
            <!--
          <article class="article">
            <section class="featuredImage">
              <img src="images/article_placeholder_1.jpg" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Test article title</h3></a>
                <h6>Lifestyle</h6>
            </section>
            <section class="impressions">
              526
            </section>
            <div class="clearfix"></div>
          </article>
          <article class="article">
            <section class="featuredImage">
              <img src="images/article_placeholder_2.jpg" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Test article title</h3></a>
                <h6>Lifestyle</h6>
            </section>
            <section class="impressions">
              526
            </section>
            <div class="clearfix"></div>
          </article>
          <article class="article">
            <section class="featuredImage">
              <img src="images/article_placeholder_2.jpg" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Test article title</h3></a>
                <h6>Lifestyle</h6>
            </section>
            <section class="impressions">
              526
            </section>
            <div class="clearfix"></div>
          </article>
          <article class="article">
            <section class="featuredImage">
              <img src="images/article_placeholder_1.jpg" alt="" />
            </section>
            <section class="articleContent">
                <a href="#"><h3>Test article title</h3></a>
                <h6>Lifestyle</h6>
            </section>
            <section class="impressions">
              526
            </section>
            <div class="clearfix"></div>
          </article>  -->
        </section>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
        <script src="js/jquery.bpopup.min.js"></script>
        <script src="js/app.js"></script>

    </body>
</html>
