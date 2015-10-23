var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Button = require('../button');
var button;
var buttonWithChildren;

describe('button tests', function () {

    describe('when the button have default props', function (){
        button = TestUtils.renderIntoDocument(<Button />);

        console.log(button.props);
        it('expect statements to be defined ', function () {
            expect(button.getClass()).to.equal('custom-button');
        });
        it('expect statement to be undefined', function () {
            console.log(button.props.children);
            expect(button.props.children).to.equal(undefined);
        });
    });

    describe('when the button have childrems', function () {
        buttonWithChildren = TestUtils.renderIntoDocument(<Button>lalala</Button>);
        it('expect statements to be defined', function() {
            expect(buttonWithChildren.props.children).to.equal('lalala');
        });
    });
});