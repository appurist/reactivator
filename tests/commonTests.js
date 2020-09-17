export default function(lib) {

const { ref, watch } = lib;

describe('simple .value tests', () => {
  it('initialize/read', () => {
    let data = ref(42);
    expect(data.value).to.equal(42);
  })
  it('increment', () => {
    let data = ref(42);
    data.value++;
    expect(data.value).to.equal(43);
  })
  it('assignment', () => {
    let data = ref(42);
    data.value = 99
    expect(data.value).to.equal(99);
  })
});

describe('watch tests', () => {
  it('watch parameters correct, sees change', () => {
    let reaction = undefined;
    let data = ref(42);
  
    watch (data, (old, val) => { 
      expect(old).to.equal(42);
      expect(val).to.equal(43);
      reaction = val;
    })
  
    data.value++; // trigger watch
    expect(reaction).to.equal(data.value);
    expect(reaction).to.equal(43);
  });
});

}