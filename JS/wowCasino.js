// a random roll from 1 to 100
// 1 - 56 loses
// 75 - 98 Doubles
// 99 - 100 Triples
// cost to gamble has a max and min bet 50g - 500g
// Theory always try to get back what you lost and no more should give you a possible 8 losses in a row b4 its a total loss

const arrayGenerator = (length) => {
  return Array.from({ length: length }, () => Math.floor(Math.random() * (100 - 1 + 1) + 1));
};

const wowCasino = (
  iterations,
  bet = 50,
  minBet = 50,
  maxBet = 500,
  loss = 0,
  currentLoss = 0,
  win = 0,
  total = 0,
  currentTotal = 0,
  lossCount = 0,
  mostAhead = 0,
  doubleWinCount = 0,
  tripleWinCount = 0,
  totalLossCount = 0,
  testArray = arrayGenerator(iterations),
  i = 0,
  mostLosses = 0,
  positiveThreashold = 50,
  negitiveThreashold = -500,
  grandTotal = 0
) => {
  if (lossCount > mostLosses) mostLosses = lossCount;

  if (total > mostAhead) mostAhead = total;

  if (i === testArray.length) {
    if (grandTotal === 0) {
      grandTotal = total;
    }
    return `test results: Loss total = ${loss}, Win total = ${win}, current win/loss = ${total}, triple win count = ${tripleWinCount}, total losses = ${totalLossCount}, the most losses in a row = ${mostLosses}, most ahead = ${mostAhead}, grandTotal with threashold = ${grandTotal}`;
  }

  // if (currentTotal >= positiveThreashold || currentTotal <= negitiveThreashold) {
  //   grandTotal += currentTotal;

  //   return wowCasino(
  //     iterations,
  //     minBet,
  //     minBet,
  //     maxBet,
  //     loss,
  //     0,
  //     win,
  //     total,
  //     0,
  //     lossCount,
  //     0,
  //     doubleWinCount,
  //     tripleWinCount,
  //     totalLossCount,
  //     testArray,
  //     i,
  //     mostLosses,
  //     positiveThreashold,
  //     negitiveThreashold,
  //     grandTotal
  //   );
  // }

  if (testArray[i] <= 56 && bet <= maxBet) {
    ++lossCount;
    total -= bet;
    currentTotal -= bet;
    loss += bet;
    currentLoss += bet;
    // let tempBet = Math.ceil(currentLoss / 2 / 5) * 5;
    // // console.log(`Roll of ${testArray[i]} end in a loss of ${bet} bringing your current win/loss total to ${total}`);
    // if (tempBet > minBet) {
    //   bet = tempBet;
    // }
    // test opposite
    bet = minBet;
    // test section
    if (bet > maxBet) {
      //   console.log("total loss");
      return wowCasino(
        iterations,
        minBet,
        minBet,
        maxBet,
        loss,
        0,
        win,
        total,
        currentTotal,
        lossCount,
        mostAhead,
        doubleWinCount,
        tripleWinCount,
        ++totalLossCount,
        testArray,
        ++i,
        mostLosses,
        positiveThreashold,
        negitiveThreashold,
        grandTotal
      );
    }
    return wowCasino(
      iterations,
      bet,
      minBet,
      maxBet,
      loss,
      currentLoss,
      win,
      total,
      currentTotal,
      lossCount,
      mostAhead,
      doubleWinCount,
      tripleWinCount,
      totalLossCount,
      testArray,
      ++i,
      mostLosses,
      positiveThreashold,
      negitiveThreashold,
      grandTotal
    );
  }

  if (testArray[i] > 56 && testArray[i] < 99 && bet <= maxBet) {
    total += bet;
    currentTotal += bet;
    win += bet;
    bet = bet * 2;
    // bet += minBet;
    if (bet > maxBet) {
      bet = minBet;
    }
    // console.log(`Roll of ${testArray[i]} end in a double win of ${bet} bringing your current win/loss total to ${total}`);
    return wowCasino(
      iterations,
      bet,
      minBet,
      maxBet,
      loss,
      0,
      win,
      total,
      currentTotal,
      0,
      mostAhead,
      ++doubleWinCount,
      tripleWinCount,
      totalLossCount,
      testArray,
      ++i,
      mostLosses,
      positiveThreashold,
      negitiveThreashold,
      grandTotal
    );
  }

  if (testArray[i] === 99 || (testArray[i] === 100 && bet <= maxBet)) {
    const winTotal = bet * 2;
    total += winTotal;
    currentTotal += winTotal;
    win += winTotal;
    bet = bet * 2;
    // bet += minBet;
    if (bet > maxBet) {
      bet = minBet;
    }
    // console.log(`Roll of ${testArray[i]} end in a triple win of ${winTotal} bringing your current win/loss total to ${total}`);
    return wowCasino(
      iterations,
      bet,
      minBet,
      maxBet,
      loss,
      0,
      win,
      total,
      currentTotal,
      0,
      mostAhead,
      doubleWinCount,
      ++tripleWinCount,
      totalLossCount,
      testArray,
      ++i,
      mostLosses,
      positiveThreashold,
      negitiveThreashold,
      grandTotal
    );
  }
};

console.log(wowCasino(10));
