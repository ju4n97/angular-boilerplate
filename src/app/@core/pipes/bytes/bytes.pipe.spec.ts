import { BytesPipe } from './bytes.pipe';

describe('BytesPipe', () => {
  it('create an instance', () => {
    const pipe = new BytesPipe();
    expect(pipe).toBeTruthy();
  });
});
