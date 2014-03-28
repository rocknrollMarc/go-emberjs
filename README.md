# go-emberjs

I want to play with Ember on the front end and Go on the back.  This is that fun.


# Golang setup

We will use gin to rebuild the go binary and proxy it for us so we can just write code and not stop/restart all the time.

    go get github.com/codegangsta/gin
    gin -h # confirm it works

# Ember setup

    npm install
    grunt watch # to rebuild assets


# Inspired by

https://github.com/jkneb/ember-crud
http://nerdyworm.com/blog/2013/05/21/building-an-app-with-ember-dot-js-and-go/
