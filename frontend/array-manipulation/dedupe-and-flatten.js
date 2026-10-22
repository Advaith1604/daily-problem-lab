// ==========================================
// Problem: Deduplicate and Flatten
// Input:  [1, [2, [3, 4], 2], [5, 1], 4]
// Output: [1, 2, 3, 4, 5]
// ==========================================

// Approach 1: Built-in Methods
function flattenAndDedupeBuiltin(arr) {
  return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b);
}

// Approach 2: Manual DFS Recursion (If .flat is disallowed)
function flattenAndDedupeManual(arr) {
  const flat = [];

  function extract(item) {
    if (Array.isArray(item)) {
      for (const el of item) extract(el);
    } else if (typeof item === 'number') {
      flat.push(item);
    }
  }

  extract(arr);
  return [...new Set(flat)].sort((a, b) => a - b);
}

// Verification
const input = [1, [2, [3, 4], 2], [5, 1], 4];
console.log("Built-in:", flattenAndDedupeBuiltin(input));
console.log("Manual:", flattenAndDedupeManual(input));
