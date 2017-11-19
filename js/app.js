/*
  Please add all Javascript code to this file.

  Final Project things to do:
  1) Get page history/override back functionality to work http://diveintohtml5.info/history.html
  2) Save cookies of last selected options
  3) Get Search for term working
  4) Support all data sources (maybe)

*/


$(document).ready(function() {
    // DOM is now ready

    // Setup global vars
    var sources = [];

    $(document).on('click', '.article', function(event) {
        var $artParent = $(this); //.parent().parent();

        // Only do popup if they did not click on the anchor to view the article
        if(event.target.nodeName !== "H3") {
            $('#element_to_pop_up').bPopup({
                content:'image', //'ajax', 'iframe' or 'image'
                contentContainer:'.pop-image',
                loadUrl: $artParent.find('img').attr('src')
            });

            $('.pop-title').text($artParent.find('a.articleTitle').text());
            $('.pop-synopsis').text($artParent.find('.articleSynopsis').text());
            $('.pop-url').attr('href', $artParent.find('a.articleTitle').attr('href'));

            // TODO - below doesn't work to alter image attr's
            var img = $('.pop-image img')[0];
            console.log(img);
            console.log(img.naturalHeight);

            if(img.naturalHeight > 600) {
                var newPct = Math.floor(100 * 500/img.naturalHeight);
                console.log("height > width so changing to " + newPct + '%');
                $(img).width( newPct + '%');
            }
        }


    });

    $(document).on('click', 'ul.categories a', function() {
        //console.log("Clicked category " + $(this).html());
        hideClickedMenu(this);
        handleCategoryClick(this);
    });

    function hideClickedMenu(clickedItem) {
        var $parent = $(clickedItem).parent().parent();

        $parent.find('li').css('display', 'none');

        // TODO I think this is a little bit of a hack but it works
        setTimeout(function() {
            $parent.find('li').css('display', '');
        }, 300);
    }

    $(document).on('click', 'ul.sources a', function() {
        console.log("Clicked source " + $(this).html());
        hideClickedMenu(this);
        handleSourceClick(this);
    });

    $(document).on('click', 'ul.story-type a', function() {
        //console.log("Clicked story type " + $(this).html());
        hideClickedMenu(this);
        handleStoryTypeClick(this);
    });

    // TODO refactor to generically handle different menus
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
            $selectedSrc.html(newSrc);
            getNewsFromSources(getMatchingSource($(menuitem).attr('id') , sources));
        }
    }

    function getMatchingSource(sourceId, sourcesArray) {
        for (var row in sourcesArray) {
            //console.log(sourcesArray[row].id);

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
            //console.log(menuitem);
            $selectedStoryType.html(newStoryType);
            getNewsFromSources(getMatchingSource($('.selected-source').html().toLowerCase().replace(/\ /g,'-') , sources));
        }
    }

    function Article(sourceId) {
        this.sourceId = sourceId;
    }

    function getNewsApiKey() {
        // TODO change to get from environment
        return '4584e350d31b47829c394777b6fd9ede';
    }

    createCategoryDropDown();
    createStoryTypeDropDown();
    getSources($('.selected-category').html());

    //var sources = [];
    //sources.push(new NewsSource('Reddit Top Stories', 'https://www.reddit.com/top.json', createRedditArticle));
    //sources.push({name: 'Reddit Top Stories', url: 'https://www.reddit.com/top.json', formatFunction: createRedditArticle});
    //url.mashable = "http://mashable.com/stories.json";

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

            console.log("starting ajax for source " + selectedSources[row].url);
            $.ajax({
                url: getUrlForStoryType($('.selected-story-type').html().toLowerCase()) +'sources=' + selectedSources[row].id.trim() + '&apiKey=' + getNewsApiKey(),
                success: function (results) {
                    // CALL SUCCESS FUNCTION(RESULTS) --> RETURNS ARRAY OF ARTICLES
                    //sources[row].successFunction(results);
                    //console.log(results);
                    handleNewsApiResults(selectedSources[row].id.trim(), results);

                }
            });
        }
    }

    function getUrlForStoryType(storyType) {
        var url = '';
        if (storyType.toLowerCase() === "top") {
            url = 'https://newsapi.org/v2/top-headlines?';
        } else if (storyType.toLowerCase() === "latest") {
            url = 'https://newsapi.org/v2/everything?sortBy=publishedAt&';
        } else if (storyType.toLowerCase() === "popular") {
            url = 'https://newsapi.org/v2/everything?sortBy=popularity&';
        } else {
            url = 'https://newsapi.org/v2/top-headlines?';
        }
        return url;
    }


    function getSources(category) {
        sources = [];
        $.ajax({
            url: 'https://newsapi.org/v2/sources?language=en&country=us' + '&category=' + category.trim() +'&apiKey=' + getNewsApiKey(),
            success: function (results) {
                //console.log(results);
                for (var src in results.sources) {
                    sources.push(results.sources[src]);
                }

                createSourcesDropDown(sources);

                // Select the first source on the menu based on category and get news for that source
                selectFirstSource(sources);
                getNewsFromSources(getMatchingSource($('.sources a').first().attr('id') , sources));
            }
        });
    }

    function selectFirstSource(sources) {
        //console.log(sources);
        $('.selected-source').html( (sources) ? sources[0].name : 'No Sources Available' );
    }


    function createSourcesDropDown(sources) {
        $('ul.sources').children().remove();

        for (var row in sources) {
            $('ul.sources').append('<li><a id="' + sources[row].id + '" href="#">' + sources[row].name + '</a></li>');
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
        //console.log(articles);
        var $main = $('#main');
        $main.children().remove();

        if (articles.length > 0) {
            $.each(articles, function (index, value) {
                var article = formatArticle(createNewsApiArticle(sourceId, value));
                $main.append(article);
            });
        } else {
            var article =   '<article class="article">' +
                                '<section class="featuredImage"/>' +
                                '<section class="articleContent"><h3>No articles found</h3><h6>Please make another selection</h6></section>' +
                            '</article>';

            $main.append(article);
        }


    }

    function formatPubDateAsTimeSinceNow(dateString) {
        // Published Date is in format 2017-11-19T20:00:25Z
        var timeSince = "";

        if(dateString) {
            var pubDate = new Date(dateString);
            //console.log(new Date() + " " + pubDate + " " + (new Date() - pubDate));
            var mins = Math.floor( (new Date() - pubDate) / (1000 * 60) );
            // Do all calculations for
            if (mins < 120) {
                timeSince =  mins + ' Minutes Ago';
            } else if (mins < 2880) {
                timeSince =  Math.floor(mins/60)+ ' Hours Ago';
            } else if (mins < 20160) {
                timeSince =  Math.floor(mins/(24 * 60))+ ' Days Ago';
            } else {
                timeSince =  Math.floor(mins/(7 * 24 * 60))+ ' Weeks Ago';
            }

        }
        return timeSince;
    }

    function createNewsApiArticle(sourceId, dataRow) {
        //console.log(dataRow);
        var art = new Article(sourceId);
        art.url = dataRow.url;
        art.thumbUrl = dataRow.urlToImage;
        art.title = dataRow.title;
        art.category = dataRow.description;
        art.impressions = formatPubDateAsTimeSinceNow(dataRow.publishedAt);
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