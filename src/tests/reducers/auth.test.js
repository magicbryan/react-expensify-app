import authReducers from '../../reducers/auth';

test('should set uid for login', () => {
   const action = {
       type: 'LOGIN',
       uid: 123
   };
   const state = authReducers(undefined, action);
   expect(state.uid).toBe(123);
})

test('should set logout', () => {
   
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducers({uid: 'anything'}, action);
    expect(state).toEqual({});
 })