/*
  Please add all Javascript code to this file.
*/


$(document).ready(function() {
    // DOM is now ready

    // Setup global vars
    var sources = [];

    $(function() {
        $('.trigger-popup').hover(function() {
            console.log("triggered popup");
            //$('div#popUp').show();
        }, function() {
            console.log("not hover");
            //$('div#popUp').hide();
        });
    });

    $(document).on('click', '.article', function() {
        console.log("Clicked article " + $(this).html());
        $('div#popUp').show();
        // use $(this)
        //$('#popUp').removeClass('hidden').removeClass('loader');
    });

    $(document).on('mouseenter', 'img.has-popup-image', function() {
        //console.log($(this).parent().parent().find('.articleSynopsis').text());
        $('#element_to_pop_up').bPopup({
            content:'image', //'ajax', 'iframe' or 'image'
            contentContainer:'.pop-image',
            loadUrl: this.src
        });
        $('.pop-title').text($(this).parent().parent().find('a.articleTitle').text());
        $('.pop-synopsis').text($(this).parent().parent().find('.articleSynopsis').text());

        // TODO - below doesn't work
        var $img = $('.pop-image img');
        console.log($img.attr('src') );
        if($img.height > $img.width) {
            $img.attr('height', '70%');
            $img.attr('width', 'auto');
        }
        //$('img.pop-src').attr('src', this.src);
        //$('pop-desc')

    });

    $(document).on('click', 'ul.categories a', function() {
        console.log($(this).html());
        $('ul.categories').hide();
        handleCategoryClick(this);

    });

    $(document).on('click', 'ul.sources a', function() {
        console.log("Clicked source " + $(this).html());
        $('ul.sources').hide();
        handleSourceClick(this);
    });

    $(document).on('click', 'ul.story-type a', function() {
        console.log("Clicked story type " + $(this).html());
        $('ul.story-type').hide();
        handleStoryTypeClick(this);
    });

    function handleCategoryClick(menuitem) {
        var $selectedCat = $('.selected-category');
        var newCat = $(menuitem).html();
        if (newCat !== $selectedCat.html()) {
            console.log(menuitem);
            $selectedCat.html(newCat);
            getSources(newCat);
        }
    }

    function handleSourceClick(menuitem) {
        var $selectedSrc = $('.selected-source');
        var newSrc = $(menuitem).html();
        if (newSrc !== $selectedSrc.html()) {
            console.log(menuitem);
            $selectedSrc.html(newSrc);
            console.log("in there" + $(menuitem).attr('id'), sources);

            getNewsFromSources(getMatchingSource($(menuitem).attr('id') , sources));
        }
    }

    function getMatchingSource(sourceId, sourcesArray) {
        for (var row in sourcesArray) {
            console.log(sourcesArray[row].id);


            if(sourcesArray[row].id === sourceId) {
                var arr = [];
                arr.push(sourcesArray[row]);
                return arr;
            }
        }
    }

    function handleStoryTypeClick(menuitem) {
        var $selectedStoryType = $('.selected-story-type');
        var newStoryType = $(menuitem).html();
        if (newStoryType !== $selectedStoryType.html()) {
            console.log(menuitem);
            $selectedStoryType.html(newStoryType);
            //getSources($('.selected-category').html());
        }
    }
/*
    function NewsSource(name, url, formatFunction) {
        this.name = name;
        this.url = url;
        this.formatFunction = formatFunction;
    }
*/
    function Article(sourceId) {
        this.sourceId = sourceId;
    }


    createCategoryDropDown();
    createStoryTypeDropDown();

    //var sources = [];
    getSources($('.selected-category').html());
    //sources.push(new NewsSource('Reddit Top Stories', 'https://www.reddit.com/top.json', createRedditArticle));
    //sources.push({name: 'Reddit Top Stories', url: 'https://www.reddit.com/top.json', formatFunction: createRedditArticle});
    //sources.push({name: 'TechCrunch', url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=4584e350d31b47829c394777b6fd9ede', formatFunction: createNewsApiArticle});
    //sources.push({name: 'TechCrunch', url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=4584e350d31b47829c394777b6fd9ede', successFunction: handleNewsApiResults, formatFunction: createNewsApiArticle});

    //url.mashable = "http://mashable.com/stories.json";

    //console.log(sources);

    function createCategoryDropDown() {
        $('ul.categories').children().remove();
        var categories = ['Business', 'Entertainment', 'Gaming', 'General', 'Health-and-Medical', 'Music', 'Politics', 'Science-and-Nature', 'Sport', 'Technology'];
        $('.selected-category').html(categories[0]);

        for (var row in categories) {
            $('ul.categories').append('<li><a id="' + categories[row].toLowerCase() + '" href="#">' + categories[row].replace(/-/g,' ') + '</a></li>');
        }

    }



    function getNewsFromSources(selectedSources) {
        for (var row in selectedSources) {

            // TODO take out IF
            if (row == 0) {
                console.log("starting ajax for source " + selectedSources[row].url);
                $.ajax({
                    url: getUrlForStoryType("top2") +'source=' + selectedSources[row].id.trim() + '&apiKey=4584e350d31b47829c394777b6fd9ede',
                    success: function (results) {
                        // CALL SUCCESS FUNCTION(RESULTS) --> RETURNS ARRAY OF ARTICLES
                        //sources[row].successFunction(results);
                        //console.log(results);
                        handleNewsApiResults(selectedSources[row].id.trim(), results);

                    }
                });
            }

        }
    }

    function getUrlForStoryType(storyType) {
        if (storyType.toLowerCase() === "top") {
            return 'https://newsapi.org/v2/top-headlines?';
        } else if (storyType.toLowerCase() === "latest") {
            return 'https://newsapi.org/v2/top-headlines?';
        } else {
            return 'https://newsapi.org/v1/articles?';
        }
    }


    function getSources(category) {
        sources = [];
        $.ajax({
            url: 'https://newsapi.org/v1/sources?language=en&country=us&category=' + category.trim(),
            success: function (results) {

                for (var src in results.sources) {
                    sources.push(results.sources[src]);
                }

                createSourcesDropDown(sources);

                //console.log(sources);
                $('a.selected-source').html(sources[0].name);

                getNewsFromSources(sources);
            }
        });
    }

    function createSourcesDropDown(sources) {
        $('ul.sources').children().remove();
        $('.selected-source').html( (sources[0]) ? sources[0] : 'No Sources Available' );

        for (var row in sources) {
            $('ul.sources').append('<li><span><a id="' + sources[row].name.toLowerCase().replace(/\ /g,'-') + '" href="#">' + sources[row].name + '</a></li>');
        }

    }

    function createStoryTypeDropDown() {
        $('ul.story-type').children().remove();
        var storyTypes = ['Latest', 'Top', 'Popular'];
        $('.selected-story-type').html( (storyTypes[0]) ? storyTypes[0] : 'None Available');

        for (var row in storyTypes) {
            $('ul.story-type').append('<li><a id="' + storyTypes[row].toLowerCase() + '" href="#">' + storyTypes[row].replace(/-/g,' ') + '</a></li>');
        }

    }

    function handleNewsApiResults(sourceId, results) {
        var articles = results.articles;
        console.log(articles);
        var $main = $('#main');
        $main.children().remove();

        if (articles.length > 0) {

            $.each(articles, function (index, value) {
                //console.log(value.data);
                //console.log(value);
                //var article = formatArticle(sources[row].formatFunction('src' + row, value.data));
                var article = formatArticle(createNewsApiArticle(sourceId, value));


                $main.append(article);
                //$art.click(articleClickHandler);
                //console.log($art);
                //$('section.articleContent h3').text(value.data.title);

            });
        } else {
            var article =   '<article class="article">' +
                                '<section class="featuredImage"/>' +
                                '<section class="articleContent"><h3>No articles found</h3><h6>Please make another selection</h6></section>' +
                            '</article>';


            $main.append(article);
        }


    }



    function createNewsApiArticle(sourceId, dataRow) {
        //console.log(sourceId);
        var art = new Article(sourceId);
        art.url = dataRow.url;
        art.thumbUrl = dataRow.urlToImage;
        art.title = dataRow.title;
        art.category = dataRow.description;
        //art.category = "No Category"; //dataRow.subreddit;
        art.impressions = 1; //dataRow.ups;
        return art;
    }

    function createRedditArticle(sourceId, dataRow) {
        //console.log(sourceId);
        var art = new Article(sourceId);
        art.url = dataRow.url;
        art.thumbUrl = dataRow.thumbnail;
        art.title = dataRow.title;
        art.category = dataRow.subreddit;
        art.impressions = dataRow.ups;
        return art;
    }
    function formatArticle(article) {
        var result =
            '<article class="article trigger-popup"' + article.sourceId + '">' +
                '<section class="featuredImage"> ' +
                    //'<img src="' + article.preview.images[0].source.url + '" alt="" /> ' +
                    '<img src="' + article.thumbUrl + '" class="has-popup-image" /> ' +
                '</section> ' +
                '<section class="articleContent"> ' +
                    '<a href="' + article.url + '" class="articleTitle" target="_blank"><h3>' + article.title + '</h3></a> ' +
                    '<h6 class="articleSynopsis">' + article.category + '</h6> ' +

                '</section> ' +
                '<section class="impressions">' + article.impressions +
                '</section> ' +
                '<div class="clearfix"></div> ' +
            '</article>';

        return result;
    }

    function articleClickHandler(event) {
        console.log(event);
        $('main').hide();
        $('popUp').show();
    }
/*
    functionHandle() {
        <article class="article">
            <section class="featuredImage">
            <img src="images/article_placeholder_1.jpg" alt="" />
            </section>
            <section class="articleContent">
            <a href="#"><h3>{{article.title}}</h3></a>
        <h6>Lifestyle</h6>
        </section>
        <section class="impressions">
            526
            </section>
            <div class="clearfix"></div>
            </article>
    }
*/


})