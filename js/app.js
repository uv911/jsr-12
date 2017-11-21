/*
  Please add all Javascript code to this file.

  Final Project things to do:
  1) Get page history/override back functionality to work http://diveintohtml5.info/history.html
  2) Save cookies of last selected options
  3) Get Search for term working
  4) Support all data sources (maybe)

*/
// TODO change to get all keys from environment
function getFireBaseApiConfig() {
    return apiKeys[2];
}

firebase.initializeApp(getFireBaseApiConfig());
var database = firebase.database();
var artDbRef = database.ref('players/');

$(document).ready(function() {
    // DOM is now ready
    var slider = $("#ex12a").slider({ id: "slider12a", min: -100, max: 100, value: 0, step: 10 });
    console.log(slider);

    // Setup global vars
    var sources = [];

    $("#ex12a").on('change', function(event) {
        //console.log(event.value.newValue);
        var newVal = event.value.newValue;
        if (newVal <= -10) {
           $('h1.trigger-popup').html('All News');
        } else if (newVal > -10) {
            $('h1.trigger-popup').html('Good News');
        }

        displayArticles(newVal);
    });

    function displayArticles(minSentiment) {
        $('.article').each(function( index ) {
           var $art = $( this );
           sentiment = $art.find('.featuredImage h3').text();

           if ( sentiment <= minSentiment ) {
               $art.hide();
           } else {
               $art.show();
           }
        });
    }

    $(document).on('click', '.article', function(event) {
        var $artParent = $(this);

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

            var img = $('.pop-image img')[0];
            //console.log(img.naturalHeight + " " + img.height);

            var targetHeight = 600;
            //if(img.naturalHeight > targetHeight) {
                var newPct = Math.floor(100 * targetHeight/img.height);
                //console.log("height > targetHeight so changing to " + newPct + '%');
                $(img).width( ((newPct > 100) ? 100 : newPct) + '%');
            //}
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

    $(document).on('click', 'a.pop-url', function(event) {
        event.preventDefault();
        //$('#element_to_pop_up').hide();
        $('.b-modal').trigger('click');
        var href = $(this).attr("href");
        setTimeout(function() {
            window.open(href, '_blank');
        }, 300);
    });

    // TODO refactor to generically handle different menus
    function handleCategoryClick(menuitem) {
        var $selectedCat = $('.selected-category');
        var newCat = $(menuitem).html();
        if (newCat !== $selectedCat.html()) {
            console.log(menuitem);
            $selectedCat.html(newCat);

            // Clear the results
            var $main = $('#main');
            $main.children().remove();

            getSources(newCat);
        }
    }

    function handleSourceClick(menuitem) {
        var $selectedSrc = $('.selected-source');
        var newSrc = $(menuitem).html();
        if (newSrc !== $selectedSrc.html()) {
            $selectedSrc.html(newSrc);

            // Clear the results
            var $main = $('#main');
            $main.children().remove();

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

            // Clear the results
            var $main = $('#main');
            $main.children().remove();

            getNewsFromSources(getMatchingSource($('.selected-source').html().toLowerCase().replace(/\ /g,'-') , sources));
        }
    }

    function Article(sourceId) {
        this.sourceId = sourceId;
    }

    // TODO change to get all keys from environment
    function getNewsApiKey() {
        return apiKeys[0].apiKey;
    }

    function getWatsonUsername() {
        return apiKeys[1].username;
    }

    function getWatsonPassword() {
        return apiKeys[1].password;
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

            console.log("Starting ajax for source " + selectedSources[row].url);
            $.ajax({
                url: getUrlForStoryType($('.selected-story-type').html().toLowerCase()) +'sources=' + selectedSources[row].id.trim() + '&apiKey=' + getNewsApiKey(),

                success: function (results) {
                    console.log(results);
                    getSentimentScore(selectedSources[row].id.trim(), results.articles);

                    //console.log(results);
                    //handleNewsApiResults(selectedSources[row].id.trim(), results.articles);

                }
            });
        }
    }

    function getSentimentScore(sourceId, resultArray) {
        var $main = $('#main');
        for (var row in resultArray) {
            (function(index) {
                var art = resultArray[index];
                if (index <= 0) {
                    console.log("Starting ajax for article sentiment " + art.url);
                    $.ajax({
                        url: getUrlForNLU(art.url),
                        username: getWatsonUsername(),
                        password: getWatsonPassword(),

                        success: function(results) {
                            console.log(results);

                            // if sentiment is exactly 0 then Watson could not read the article so set to unknown
                            if(results.sentiment.document.score != 0) {
                                art.sentiment = Math.floor(100 * results.sentiment.document.score);

                                // Only add to the cache if there was a real sentiment score
                                addToArticleCache(sourceId, art);
                            } else {
                                art.sentiment = 'Unavail';
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log(errorThrown);
                        },
                        complete: function(jqXHR, textStatus) {
                            var article = formatArticle(createNewsApiArticle(sourceId, art));
                            $main.append(article);
                        },
                        statusCode: {
                            404: function() {
                                console.log( "page not found" );
                            }
                        }
                    });
                }
                /*else {
                    //$.get("https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json", function(results) {
                    $.get(getUrlForNLU("test"), function(results) {
                        console.log(results);
                    });
                } */
            }(row));
        }
    }

    function addToArticleCache(sourceId, art) {
        artDbRef.child("1234567").set({
            article: art,
            sentiment: art.sentiment,
            publishedAt: art.publishedAt,
            sourceId: sourceId
        });
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

    function getUrlForNLU(artUrl) {
        var url = 'https://accesscontrolalloworiginall.herokuapp.com/';
        url += 'https://watson-api-explorer.mybluemix.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&url=' + artUrl +
            '&features=sentiment&return_analyzed_text=false&clean=true&fallback_to_raw=true&concepts.limit=8&emotion.document=true&entities.limit=50&entities.emotion=false&entities.sentiment=false&keywords.limit=50&keywords.emotion=false&keywords.sentiment=false&relations.model=en-news&semantic_roles.limit=50&semantic_roles.entities=false&semantic_roles.keywords=false&sentiment.document=true';
        //var url = 'https://accesscontrolalloworiginall.herokuapp.com/http://digg.com/api/news/popular.json';
        //url = 'https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2017-02-27&url=' + url +
        //        '&features=sentiment&return_analyzed_text=false&clean=true&fallback_to_raw=true&concepts.limit=8&emotion.document=true&entities.limit=50&entities.emotion=false&entities.sentiment=false&keywords.limit=50&keywords.emotion=false&keywords.sentiment=false&relations.model=en-news&semantic_roles.limit=50&semantic_roles.entities=false&semantic_roles.keywords=false&sentiment.document=true';
        //console.log(url);
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

    // TODO delete this function??
    function handleNewsApiResults(sourceId, articleArray) {
        //console.log(articleArray);
        var $main = $('#main');

        if (articleArray.length > 0) {
            $.each(articleArray, function (index, value) {
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
        art.publishedAt = dataRow.publishedAt;
        art.impressions = formatPubDateAsTimeSinceNow(dataRow.publishedAt);
        art.sentiment = dataRow.sentiment;
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
        art.sentiment = "0.5";
        return art;
    }
    function formatArticle(article) {
        var result =
            '<article class="article trigger-popup"' + article.sourceId + '">' +
                '<section class="featuredImage"> ' +
                    //'<img src="' + article.preview.images[0].source.url + '" alt="" /> ' +
                    '<img src="' + article.thumbUrl + '" class="has-popup-image" /> ' +
                    '<h3>' + article.sentiment + '</h3>' +
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

})