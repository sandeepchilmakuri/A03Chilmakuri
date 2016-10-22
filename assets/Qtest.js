QUnit.test('Testing Multiplication function with four sets of inputs', function (assert) {
   // assert.throws(function () { mul(); }, new Error("only numbers are allowed"), 'Passing in array correctly raises an Error');
    assert.strictEqual(mul(2,4), 8, 'All positive numbers');
    assert.strictEqual(mul(3,-6), -18, 'Positive and negative numbers');
    assert.strictEqual(mul(-4,-8), 32, 'All are negative numbers');
});
