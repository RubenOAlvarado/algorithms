package dev.ruben.algorithms.maxprofit;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class MaxProfitTest {

    @Test
    void returnsTheProfitOfTheBestSingleTrade() {
        assertEquals(5, MaxProfit.maxProfit(new int[] {7, 1, 5, 3, 6, 4}));
    }

    @Test
    void returnsZeroWhenPricesOnlyFall() {
        assertEquals(0, MaxProfit.maxProfit(new int[] {7, 6, 4, 3, 1}));
    }

    @Test
    void returnsZeroForAnEmptyPriceSeries() {
        assertEquals(0, MaxProfit.maxProfit(new int[] {}));
    }

    @Test
    void returnsZeroWhenThereIsOnlyOneDayToTrade() {
        assertEquals(0, MaxProfit.maxProfit(new int[] {5}));
    }

    @Test
    void returnsZeroWhenEveryPriceIsTheSame() {
        assertEquals(0, MaxProfit.maxProfit(new int[] {3, 3, 3, 3}));
    }

    @Test
    void buysBeforeItSellsInsteadOfSubtractingTheGlobalMinimum() {
        assertEquals(1, MaxProfit.maxProfit(new int[] {8, 1, 2}));
    }

    @Test
    void pairsTheLowestPriceWithTheHighestPriceThatFollowsIt() {
        assertEquals(4, MaxProfit.maxProfit(new int[] {3, 2, 6, 5, 0, 3}));
    }

    @Test
    void keepsTheBestProfitWhenThePriceDropsAfterwards() {
        assertEquals(2, MaxProfit.maxProfit(new int[] {2, 4, 1}));
    }
}
