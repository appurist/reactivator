export default function(lib) {

  const { ref, reactive, computed, watch, unwatch } = lib;

  describe('simple integer .value tests', () => {
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

  describe('simple string .value tests', () => {
    it('initialize/read', () => {
      let data = ref('Hello.');
      expect(data.value).to.equal('Hello.');
    })
    it('append', () => {
      let data = ref('Hello');
      data.value += ' there.'
      expect(data.value).to.equal('Hello there.');
    })
    it('assignment', () => {
      let data = ref('Hello.');
      data.value = 'Goodbye.'
      expect(data.value).to.equal('Goodbye.');
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
    it('watch for string values, sees change', () => {
      let reaction = undefined;
      let data = ref('Hello');
    
      watch (data, (old, val) => { 
        expect(old).to.equal('Hello');
        expect(val).to.equal('Hello world.');
        reaction = val;
      })
    
      data.value += ' world.'; // trigger watch
      expect(reaction).to.equal(data.value);
      expect(reaction).to.equal('Hello world.');
    });
    it('unwatch no longer sees change', () => {
      let reaction = undefined;
      let data = ref(42);
      let handler = undefined;
    
      watch (data, handler = (old, val) => { 
        expect(old).to.equal(42);
        expect(val).to.equal(43);
        reaction = val;
      })
    
      data.value++; // trigger watch
      expect(reaction).to.equal(data.value);
      expect(reaction).to.equal(43);

      unwatch (data, handler);
      data.value++; // change value
      expect(reaction).to.not.equal(data.value);
      expect(reaction).to.equal(43);
      expect(data.value).to.equal(44);
    });

    it('watch sees the correct number of changes', () => {
      let data = ref(42);
      let reaction = undefined;
      let handler = undefined;
      let changes = 0;
    
      data.value++; // no watch installed yet (43)

      watch (data, handler = (old, val) => { 
        reaction = val;
        changes++;
      })
    
      data.value++; // trigger watch (44)
      expect(changes).to.equal(1);
      expect(reaction).to.equal(44);

      data.value = 5; // trigger watch
      expect(changes).to.equal(2);
      expect(reaction).to.equal(5);

      unwatch (data, handler);
      data.value++; // change value
      expect(data.value).to.equal(6);
      expect(reaction).to.not.equal(data.value);
      expect(reaction).to.equal(5);
      expect(changes).to.equal(2);  // still
    });
  });

  describe('computed tests', () => {
    it('computed values correct for direct variables (via lambda)', () => {
      let data = 12;
      let computedSubtract = computed(() => {
        return data - 1;
      });
      // computedSubtract.value should follow data as it changes
      expect(computedSubtract.value).to.equal(data-1);
      data = 100;
      expect(computedSubtract.value).to.equal(data-1);
      data += 10;
      expect(computedSubtract.value).to.equal(data-1);
    });
    
    it('computed values correct for refs', () => {
      let data = ref(42)
      function addOne(context) {
        return context.value + 1;
      }
      let computedAdd = computed(data, addOne);
      // computedAdd.value should follow data.value as it changes
      expect(computedAdd.value).to.equal(data.value+1);
      data.value = 100;
      expect(computedAdd.value).to.equal(data.value+1);
      data.value += 10;
      expect(computedAdd.value).to.equal(data.value+1);
    });

    it('computed values correct for reactive objects', () => {
      let data = reactive({textField: 'Hello', numField: 100})
      function combineFields(context) {
        return context.textField + ' #' + context.numField;
      }
      let computedCombine = computed(data, combineFields)
      // computedSubtract.value should follow data.value as it changes
      expect(computedCombine.value).to.equal(combineFields(data));
      expect(computedCombine.value).to.equal('Hello #100');
      data.numField++;
      expect(computedCombine.value).to.equal(combineFields(data));
      expect(computedCombine.value).to.equal('Hello #101');
      data.numField = 999;
      data.textField = 'Goodbye';
      expect(computedCombine.value).to.equal(combineFields(data));
      expect(computedCombine.value).to.equal('Goodbye #999');
    });
  });
}