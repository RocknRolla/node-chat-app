const expect = require('expect');

let {generateMessage} = require('./../../utils/message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        let from = 'Tony';
        let text = 'Some messsage';
        let message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});