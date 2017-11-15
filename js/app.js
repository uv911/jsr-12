/*
  Please add all Javascript code to this file.
*/


$(document).ready(function() {
    // DOM is now ready
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

    var sources = [];
    //sources.push(new NewsSource('Reddit Top Stories', 'https://www.reddit.com/top.json', createRedditArticle));
    sources.push({name: 'Reddit Top Stories', url: 'https://www.reddit.com/top.json', formatFunction: createRedditArticle});

    //var url = {};
    //url.mashable = "http://mashable.com/stories.json";
    //url.reddit = "https://www.reddit.com/top.json";
    console.log(sources);
    $('a.selected-source').html('News Source: ' + sources[0].name);

    for (row in sources) {
        console.log("starting ajax for source " + sources[row].url);

        $.ajax({
            url: sources[row].url,
            success: function (results) {
                //console.log(results.data);
                $.each(results.data.children, function (index, value) {
                    //console.log(value.data);
                    var article = formatArticle(sources[row].formatFunction('src' + row, value.data));
                    var $art = $('#main').append(article);
                    //$art.click(articleClickHandler);
                    //console.log($art);
                    //$('section.articleContent h3').text(value.data.title);

                });

            }
        });
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