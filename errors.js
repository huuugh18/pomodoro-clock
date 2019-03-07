// 1. When I click the element with the id of "reset", any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.
// Default timer label was not properly reset : expected 'SESSION' to equal 'BREAK'
// AssertionError: Default timer label was not properly reset : expected 'SESSION' to equal 'BREAK'

// 13. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.
// Timer has switched to Break time, but it didn't start with the correct value.: expected 1 to equal 5
// AssertionError: Timer has switched to Break time, but it didn't start with the correct value.: expected 1 to equal 5

