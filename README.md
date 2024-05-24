# FizzBuzzAngular

> Start via `npm run start` or `npx ng serve` (`npm install` initially)

## Overview

Roughly spent **1h 15min** on this project from zero to hero, I really appreciate the approuch of this coding challenge as
it ensures to have knowledge about RxJs, async operations, testing & just a little bit of CSS. I chose
`Tailwind` to save even more time, to allow rapid prototyping.

The not so nice thing about my solution is, that I spread the actual `state` across too many layers
in my opinion (meaning `game$` & `values` array). But I am wearing our little one in a baby carrier in front of me right at this moment :-)
Sorry for the excuse.

## Services

I first implemented a basic `fizz-buzz.service.ts` (incl. spec) to have this out of the way. After some
quick thougths I wanted the "game logic" to be separated from the component code, and implented another
service `fizz-buzz-game.service.ts` (skipped testing, I am good with marble testing, but takes quite some time).

- I chose an `interval` to fullfill the 500ms requirement
- regarding the stop mechanism I decided to go with a `takeUntil`
- to stop after 100 emissions I simply chose `filter` and checked the index
- last but not least, I `map`'ed the data to directly emit the fizzbuzz values

## AppComponent

I directly went for a "single component" solution, as well as chose `standalone` just to safe some setup time.

To easily fullfill the stop mechanism, I went for a `FormGroup` (combined with `FormBuilder`) & specified the
submit behavior rules as `Validators`.

The last step was to subscribe to the "game$", but don't forget to `takeUntil(destroy)`.

Regarding styling, I didn't spend much time and simply sprinkled a little tailwind here and there.

The rest should be pretty buch straight forward.
