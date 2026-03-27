export const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const throttle = (func: Function, limit: number) => {
  let lastCall = 0;

  return (...args: any[]) => {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
};

String.split().reverse();

String.split().reverse().join();

const arr = [1, 2, 3, 2, 4, 1, 5];

const unique = arr.filter((item, index) => {
  return arr.indexOf(item) === index;
});

const arr = [10, 25, 7, 99, 42];

const max = Math.max(...arr);

const getCharFrequency = (str) => {
  const freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  return freq;
};

const result = getCharFrequency("hello world");
const arr = [1, [2, 3], [4, [5, 6]]];

console.log(arr.flat(Infinity));

const twoSum = (nums, target) => {
  const map = {}; // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
};

const arr = [1, 2, 3, 4, 5, 6];

const grouped = arr.reduce(
  (acc, num) => {
    if (num % 2 === 0) {
      acc.even.push(num);
    } else {
      acc.odd.push(num);
    }
    return acc;
  },
  { even: [], odd: [] }
);

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(15);
