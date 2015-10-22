var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Button = require('../button');

var button;
describe('button', function () {

    describe('when the button have default props', function (){
        button = TestUtils.renderIntoDocument(<Button />);
        it('', function () {
            expect(button.getClass()).to.equal('custom-button');
            expect(button.props.children).to.equal('undefined');
        });
    });

    describe('when the button have childrems', function () {
        button = TestUtils.renderIntoDocument(<Button>lalala</Button>);
        it('', function() {
            expect(button.props.children).to.equal('lalala');
        });
    });
});