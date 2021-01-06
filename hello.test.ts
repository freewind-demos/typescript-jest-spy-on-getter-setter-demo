import {Hello} from './hello';

describe('test', () => {
  let hello: Hello;
  beforeEach(() => {
    hello = new Hello(' typescript ');
  })

  it('gets by real getter', () => {
    expect(hello.name).toBe('typescript');
  })

  it('spies on getter', () => {
    jest.spyOn(hello, 'name', 'get').mockReturnValue('mocked-getter');
    expect(hello.name).toBe('mocked-getter')
  })

  it('spies on setter', () => {
    const mocks = {
      name: jest.spyOn(hello, 'name', 'set')
    }
    hello.name = 'new-value'
    expect(mocks.name).toHaveBeenCalledWith('new-value');
  })

})
