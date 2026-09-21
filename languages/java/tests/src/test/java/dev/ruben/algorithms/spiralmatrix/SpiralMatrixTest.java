package dev.ruben.algorithms.spiralmatrix;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import org.junit.jupiter.api.Test;

class SpiralMatrixTest {

    @Test
    void walksASquareMatrixClockwiseFromTheTopLeftCorner() {
        assertEquals(
                List.of(1, 2, 3, 6, 9, 8, 7, 4, 5),
                SpiralMatrix.spiralOrder(new int[][] {
                        {1, 2, 3},
                        {4, 5, 6},
                        {7, 8, 9}}));
    }

    @Test
    void walksAMatrixWiderThanItIsTall() {
        assertEquals(
                List.of(1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7),
                SpiralMatrix.spiralOrder(new int[][] {
                        {1, 2, 3, 4},
                        {5, 6, 7, 8},
                        {9, 10, 11, 12}}));
    }

    @Test
    void walksAMatrixTallerThanItIsWide() {
        assertEquals(
                List.of(1, 2, 4, 6, 8, 7, 5, 3),
                SpiralMatrix.spiralOrder(new int[][] {
                        {1, 2},
                        {3, 4},
                        {5, 6},
                        {7, 8}}));
    }

    @Test
    void walksTheInnerRingOfALargerMatrix() {
        assertEquals(
                List.of(1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10),
                SpiralMatrix.spiralOrder(new int[][] {
                        {1, 2, 3, 4},
                        {5, 6, 7, 8},
                        {9, 10, 11, 12},
                        {13, 14, 15, 16}}));
    }

    @Test
    void returnsASingleRowLeftToRight() {
        assertEquals(List.of(1, 2, 3), SpiralMatrix.spiralOrder(new int[][] {{1, 2, 3}}));
    }

    @Test
    void returnsASingleColumnTopToBottom() {
        assertEquals(List.of(1, 2, 3), SpiralMatrix.spiralOrder(new int[][] {{1}, {2}, {3}}));
    }

    @Test
    void returnsTheOnlyElementOfAOneByOneMatrix() {
        assertEquals(List.of(7), SpiralMatrix.spiralOrder(new int[][] {{7}}));
    }

    @Test
    void returnsAnEmptyListForAMatrixWithoutRows() {
        assertEquals(List.of(), SpiralMatrix.spiralOrder(new int[0][0]));
    }
}
