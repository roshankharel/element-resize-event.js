# Intro

Enables listening to resize events on any HTMLElement

# How to use

## Listening Resize Event

``` html
<style>
    body {
        padding: 10px;
    }

    .resizable {
        margin: 0 auto;
        width: 200px;
        height: 100px;
        border: 2px solid red;

        /* Makes HTMLElement Resizable*/
        resize: both;
        overflow: auto;
    }
</style>

<div class="resizable"></div>
```

``` javascript
const element = document.querySelector('.resizable');

// add this line to listen for resize event
ObserveResize.subscribe(element);

element.addEventListener("resize", function(event) {
    console.log(event);
});
```

## Stop Listening Resize Event

``` javascript
ObserveResize.unsubscribe(element);

// or 
const unsubscribe = ObserveResize.subscribe(element);
unsubscribe();
```
