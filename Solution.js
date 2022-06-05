
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.prefixSum = Array.from(new Array(matrix.length + 1), () => new Array(matrix[0].length + 1).fill(0));
    for (let r = 0; r < matrix.length; ++r) {
        for (let c = 0; c < matrix[0].length; ++c) {
            this.prefixSum[r + 1][c + 1] = this.prefixSum[r + 1][c] + this.prefixSum[r][c + 1] + matrix[r][c] - this.prefixSum[r][c];
        }
    }
};

/** 
 * @param {number} row_01 
 * @param {number} column_01 
 * @param {number} row_02 
 * @param {number} column_02
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row_01, column_01, row_02, column_02) {
    return this.prefixSum[row_02 + 1][column_02 + 1]
            - this.prefixSum[row_01][column_02 + 1]
            - this.prefixSum[row_02 + 1][column_01]
            + this.prefixSum[row_01][column_01];
};
