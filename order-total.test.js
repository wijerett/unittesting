const orderTotal = require('./order-total')

// it('works', () => {
// 	expect(1).toBe(1)
// })

it('Quantity', () => 
	expect(orderTotal({
		items: [
			{ 'name': 'Dragon candy', price: 2, quantity: 3 }
		]
	})).toBe(6)
)

it('No quantity specified', () =>
	expect(orderTotal({
		items: [
			{ 'name': 'Dragon candy', price: 3 }
		]
	})).toBe(3)
)

it('Happy path (Example 1)', () => 
	expect(orderTotal({
		items: [
			{ name: 'Dragon food', price: 8 },
			{ name: 'Dragon cage (small)', price: 800 }
		]
})).toBe(808)
)
    
it('Happy path (Example 2)', () =>
	expect(orderTotal({
	items: [
		{ name: 'Dragon collar', price: 20 },
		{ name: 'Dragon cage (small)', price: 40 }
	]
})).toBe(60)
)

