// 1. Create a 3x3 matrix
class Matrix {
    rows: number;
    cols: number;
    data: number[][];

    constructor(rows: number, cols: number) {
        this.rows = rows;
        this.cols = cols;
        this.data = Array.from({ length: rows }, () => Array(cols).fill(0));  // Initialize with zeroes
    }

    // 2. Set a value at a specific position in the matrix
    set(row: number, col: number, value: number): void {
        if (row < this.rows && col < this.cols) {
            this.data[row][col] = value;
        } else {
            console.log("Index out of bounds");
        }
    }

    // 3. Get a value from a specific position in the matrix
    get(row: number, col: number): number {
        if (row < this.rows && col < this.cols) {
            return this.data[row][col];
        } else {
            console.log("Index out of bounds");
            return -1;  // Return an error value
        }
    }

    // 4. Add two matrices
    add(otherMatrix: Matrix): Matrix | null {
        if (this.rows !== otherMatrix.rows || this.cols !== otherMatrix.cols) {
            console.log("Matrices must be the same size for addition.");
            return null;
        }

        const result = new Matrix(this.rows, this.cols);

        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                result.set(i, j, this.get(i, j) + otherMatrix.get(i, j));
            }
        }

        return result;
    }

    // 5. Print matrix
    print(): void {
        console.table(this.data);
    }
}

// Example usage:
const matrix1 = new Matrix(3, 3);
matrix1.set(0, 0, 1);
matrix1.set(0, 1, 2);
matrix1.set(0, 2, 3);
matrix1.set(1, 0, 4);
matrix1.set(1, 1, 5);
matrix1.set(1, 2, 6);
matrix1.set(2, 0, 7);
matrix1.set(2, 1, 8);
matrix1.set(2, 2, 9);

const matrix2 = new Matrix(3, 3);
matrix2.set(0, 0, 9);
matrix2.set(0, 1, 8);
matrix2.set(0, 2, 7);
matrix2.set(1, 0, 6);
matrix2.set(1, 1, 5);
matrix2.set(1, 2, 4);
matrix2.set(2, 0, 3);
matrix2.set(2, 1, 2);
matrix2.set(2, 2, 1);

// Adding matrices
const resultMatrix = matrix1.add(matrix2);
if (resultMatrix) {
    console.log("Sum of Matrix1 and Matrix2:");
    resultMatrix.print();
}
