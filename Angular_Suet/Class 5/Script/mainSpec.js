/**
 * Created by Lenovo on 9/19/2015.
 */
describe('filter', function(){
    beforeEach(module(IG));
    describe('reverse', function(){
        it('should reverse a string', inject(function(reverseFilter){
            expect(reverseFilter('ABCD')).toEqual('DCBA');
        }))
    })

})