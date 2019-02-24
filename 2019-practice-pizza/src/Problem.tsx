export interface Input {
    R: number,
    C: number,
    L: number,
    H: number,
    board: Array<String>,
}

export function parseInput(text: string): Input {
    let input = text.split(/[\n\s\r\t]+/);

    let R = Number(input[0]);
    let C = Number(input[1]);
    let L = Number(input[2]);
    let H = Number(input[3]);
    let board = input.slice(4, 4 + R);
    return {
        R: R, C: C, L: L, H: H, board: board
    };
}

export interface Output {
    slices: Array<[number, number, number, number]>
}

export function parseOutput(text: string): Output {
    let input = text.split(/[\n\r]+/);
    let size = Number(input[0]);
    let slices: Array<[number, number, number, number]> = input.slice(1, 1 + size).map((line) => {
        let l = line.split(/[\s\t]+/);
        let r1 = Number(l[0]);
        let c1 = Number(l[1]);
        let r2 = Number(l[2]);
        let c2 = Number(l[3]);
        let a: [number, number, number, number] = [r1, c1, r2, c2];
        return a;
    });
    return { slices: slices };
}

