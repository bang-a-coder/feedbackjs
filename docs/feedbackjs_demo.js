feedbackjs.compose() // creates the _page object with all the pragmas defined in the html
feedbackjs.injectStyle('main')

console.log(_page.displayWrapper)
console.log(_page.display)

feedbackjs._feedback({
        starsCopy: 'How satisfied are you with Fready?',
        ratingCopy: 'Thanks! Mind leaving a store review?',
        feedPlaceholder: 'How can we improve?', //feedback textbox placeholder
        thanksCopy: 'Thanks for your time! You help make Fready better:)', //Thank you copy
        link: 'https://chrome.google.com/webstore/detail/fready/fbfecjjfhcgpocehenopdofhkdjfpcgl/reviews', //Store link
        nextSteps: 2 //whether shit happens after star rating
                     // 0=> Just star rating and thank you
                     // 1=> Feedback form if less than three stars, thank you for higher
                     // 2=> Feedback for low starts, Link for higher
    })


console.log(pragmas.Feedback)
_page.display
    .css("height 250px")
    .createWire('icon')
    .on('iconChange', function (v) {
        if (this._last) this._last.destroy()
        this._last = _e(feedbackjs.icons[this._icons[v]])
            .addClass('fade-onload')
            .css('fill whitesmoke')
            .appendTo(this)
    })
    .run(function () {
        this._icons = Object.keys(feedbackjs.icons)
        this.setIconLoop(0, this._icons.length - 1)
        setInterval(() => {
            this.icon++
        }, 420+69);
    })
    .setIcon(0)

