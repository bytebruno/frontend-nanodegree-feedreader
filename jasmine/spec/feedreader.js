
$(function () {

    describe('RSS Feeds', function () {
        /* Verifica se a variável allFeeds está definida
         * e se não está vazia.
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Itera por cada item da variável allFeeds e verifica se a
         * url está definida e se possui conteúdo 
         */
        it('url defined and has content', function () {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined()
                expect(feed.url).not.toBe('');
            });
        });


        /* Itera por cada item da variável allFeeds e verifica se o
         * nome está definido e se possui conteúdo 
         */
        it('name defined and has content', function () {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined()
                expect(feed.name).not.toBe('');
            });
        });


    });

    describe('The Menu', function () {

        /* Verifica se o menu é escondido por padrão */
        it('menu hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        
        /* Verifica se a visibilidade do menu é alterada
         * ao clicar no ícone do menu
         */

        it('menu changes visibility when clicked', function () {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        /* Quando a função loadFeed é executada com sucesso,
         * é verificado se existe algum elemento .entry 
         * dentro do container .feed, o que significa que
         * a função resgatou os feeds com sucesso.
         */

        it('has elements on feed', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function () {
        let res1, res2 = [];
        beforeEach(function (done) {

            loadFeed(0, function () {
                res1 = $('.feed .entry');
                loadFeed(1, function () {
                    res2 = $('.feed .entry');
                    done();
                });
            });
        });
        /* O teste garante que o conteúdo da página 
         * está sendo substituído pelo novo conteúdo
         * após a função loadFeed ser executada
         */
        it('new feed loaded', function (done) {
            expect(res1).not.toBe(res2);
            done();
        });
    });
}());
