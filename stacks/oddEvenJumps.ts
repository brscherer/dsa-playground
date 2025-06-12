function oddEvenJumps(arr: number[]): number {
    const N = arr.length;

    function make(B: number[]): (number | null)[] {
        const ans: (number | null)[] = Array(N).fill(null);
        const stack: number[] = [];
        for (const i of B) {
            while (stack.length && i > stack[stack.length - 1]) {
                ans[stack.pop()!] = i;
            }
            stack.push(i);
        }
        return ans;
    }

    const B = [...Array(N).keys()].sort((i, j) => arr[i] - arr[j]);
    const oddnext = make(B);
    B.sort((i, j) => arr[j] - arr[i]);
    const evennext = make(B);

    const odd: boolean[] = Array(N).fill(false);
    const even: boolean[] = Array(N).fill(false);
    odd[N - 1] = even[N - 1] = true;

    for (let i = N - 2; i >= 0; i--) {
        if (oddnext[i] !== null) {
            odd[i] = even[oddnext[i]!];
        }
        if (evennext[i] !== null) {
            even[i] = odd[evennext[i]!];
        }
    }

    return odd.reduce((acc, val) => acc + (val ? 1 : 0), 0);
};