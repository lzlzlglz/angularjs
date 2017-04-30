// File: chapter9/timeAgoFilterOptionalArgumentSpec.js
describe('timeAgo Filter', function () {
    beforeEach(module('filtersApp'));

    var filter;
    beforeEach(inject(function (timeAgoFilter) {
        filter = timeAgoFilter;
    }));

    it('should respond based on timestamp', function () {
        // The presence of new Date().getTime() makes it slightly
        // hard to unit test deterministicly.
        // Ideally, we would inject a dateProvider into the timeAgo
        // filter, but we are trying to keep it simple here
        // So going to assume that our tests are fast enough to
        // execute in mere milliseconds

        var currentTime = new Date().getTime();
        currentTime -= 10000;
        expect(filter(currentTime, false)).toEqual('minutes ago');
        var fewMinutesAgo = currentTime - 1000 * 60;
        expect(filter(fewMinutesAgo, false)).toEqual('minutes ago');
        var fewHoursAgo = currentTime - 1000 * 60 * 68;
        expect(filter(fewHoursAgo, false)).toEqual('hours ago');
        var fewDaysAgo = currentTime - 1000 * 60 * 60 * 26;
        expect(filter(fewDaysAgo, false)).toEqual('days ago');
        var fewMonthsAgo = currentTime - 1000 * 60 * 60 * 24 * 32;
        expect(filter(fewMonthsAgo, false)).toEqual('months ago');
    });
});
