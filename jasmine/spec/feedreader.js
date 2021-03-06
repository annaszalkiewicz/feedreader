/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */

$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        it('have URL defined', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        });


        /* Test that loops through each feed 
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('have name defined', function() {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        }); 
    });


    /* New test suite named "The menu" */

    describe('The menu', function () {

        /* Test to check that the menu element is
         * hidden by default. 
         */

        it('have menu hidden by default', function () {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

         /* Test to check that menu changes visibility when the
          * menu icon is clicked. 
          */
        
        it('change visibility on menu icon clicked', function() {
            const hamburgerIcon = document.querySelector('.menu-icon-link');
            const body = document.querySelector('body');

            hamburgerIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            hamburgerIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });     

    });

    /* New test suite named "Initial Entries" */

    describe('Initial Entries', function () {

        /* Test to ensure that loadFeed function is first called     * and when completes its work, there is at least
         * a single .entry element within the .feed container.
         */

        beforeEach(function (done) {
            loadFeed(0, function() {
                done();
            })
        });

        it('should have at least one entry element within feed container', function (done) {
            const feed = document.querySelector('.feed');
            let entry = feed.lastElementChild;
            expect(entry.length).not.toBe(0);
            done();
        }) 
        
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {

        /* Test to check that when a new feed is loaded
         * by the loadFeed function that the content actually       * changes.
         */ 

        let feedOne, feedTwo;

        beforeEach(function (done) {

            feedOne = document.querySelector('.feed').firstElementChild;
            feedTwo = document.querySelector('.feed').lastElementChild;

            loadFeed(0, function () {
                loadFeed(1, function () {
                    done();
                })
            })

        });

        it('should change feeds content', function (done) {
            expect(feedOne).not.toBe(feedTwo);
            done();
        });
    });

}());
