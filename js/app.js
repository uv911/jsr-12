/*
  Please add all Javascript code to this file.
*/


$(document).ready(function() {
    // DOM is now ready



    $(document).on('click', '.article', function() {
        console.log("Clicked article " + $(this).html());
        // use $(this)
        //$('#popUp').removeClass('hidden').removeClass('loader');
    });
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

    var category = 'technology';
    var sources = [];
    getSources(category);
    //sources.push(new NewsSource('Reddit Top Stories', 'https://www.reddit.com/top.json', createRedditArticle));
    //sources.push({name: 'Reddit Top Stories', url: 'https://www.reddit.com/top.json', formatFunction: createRedditArticle});
    //sources.push({name: 'TechCrunch', url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=4584e350d31b47829c394777b6fd9ede', formatFunction: createNewsApiArticle});
    //sources.push({name: 'TechCrunch', url: 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=4584e350d31b47829c394777b6fd9ede', successFunction: handleNewsApiResults, formatFunction: createNewsApiArticle});

    //url.mashable = "http://mashable.com/stories.json";

    //console.log(sources);



    function getNewsFromSources(selectedSources) {
        for (var row in selectedSources) {

            if (row == 0) {
                console.log("starting ajax for source " + selectedSources[row].url);
                $.ajax({
                    url: 'https://newsapi.org/v1/articles?source=' + selectedSources[row].id.trim() + '&apiKey=4584e350d31b47829c394777b6fd9ede',
                    success: function (results) {
                        // CALL SUCCESS FUNCTION(RESULTS) --> RETURNS ARRAY OF ARTICLES
                        //sources[row].successFunction(results);
                        console.log(results);
                        handleNewsApiResults(selectedSources[row].id.trim(), results);

                    }
                });
            }

        }
    }


    function getSources(category) {

        $.ajax({
            url: 'https://newsapi.org/v1/sources?language=en&country=us&category=' + category.trim(),
            success: function (results) {

                for (var src in results.sources) {
                    sources.push(results.sources[src]);
                }

                createSourcesDropDown();


                $('a.selected-source').html('News Source: ' + sources[0].name);

                getNewsFromSources(sources);
            }
        });
    }

    function createSourcesDropDown() {
        for (var row in sources) {
            $('ul.sources').append('<li><a href="#">' + sources[row].name + '</a></li>');
        }

    }

    function handleNewsApiResults(sourceId, results) {
        //console.log(results.data);
        console.log(results.articles);
        //$.each(results.data.children, function (index, value) {
        $.each(results.articles, function (index, value) {
            //console.log(value.data);
            //console.log(value);
            //var article = formatArticle(sources[row].formatFunction('src' + row, value.data));
            var article = formatArticle(createNewsApiArticle(sourceId, value));

            $('#main').append(article);
            //$art.click(articleClickHandler);
            //console.log($art);
            //$('section.articleContent h3').text(value.data.title);

        });
    }



    function createNewsApiArticle(sourceId, dataRow) {
        //console.log(sourceId);
        var art = new Article(sourceId);
        art.url = dataRow.url;
        art.thumbUrl = dataRow.urlToImage;
        art.title = dataRow.title;
        art.category = "No Category"; //dataRow.subreddit;
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
            '<article class="article ' + article.sourceId + '">' +
                '<section class="featuredImage"> ' +
                    //'<img src="' + article.preview.images[0].source.url + '" alt="" /> ' +
                    '<img src="' + article.thumbUrl + '" alt="" /> ' +
                '</section> ' +
                '<section class="articleContent"> ' +
                    '<a href="' + article.url + '"><h3>' + article.title + '</h3></a> ' +
                    '<h6>' + article.category + '</h6> ' +

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