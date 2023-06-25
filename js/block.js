// 블록 clear
function clearBlock() {
  boardCtx.clearRect(0, 0, boardCanvasWidth, boardCanvasHeight);
  drawBoard();
}

// 블록 그리기()
function drawBlock(x, y, nowBlock, nowColor) {
  nowBlock.forEach((row, rowIdx) => {
    row.forEach((cel, celIdx) => {
      if (cel === 1) {
        const xPos = x + celIdx * boardCellSize;
        const yPos = y + rowIdx * boardCellSize;
        boardCtx.fillStyle = nowColor;
        boardCtx.fillRect(xPos, yPos, boardCellSize, boardCellSize);
      }
    });
  });
}

// 블록 회전(알고리즘... 자세히 확인..)
function rotateBlock(block) {
  const rowCnt = block.length;
  const colCnt = block[0].length;
  const rotatedBlock = [];

  for (let col = 0; col < colCnt; col++) {
    const newRow = [];
    for (let row = rowCnt - 1; row >= 0; row--) {
      newRow.push(block[row][col]);
    }
    rotatedBlock.push(newRow);
  }
  return rotatedBlock;
}

// 왼쪽으로 이동
function moveLeft() {
  xPosition = xPosition - 30;
  drawBlock(xPosition, yPosition, block, color);
}

// 오른쪽으로 이동
function moveRight() {
  xPosition = xPosition + 30;
  drawBlock(xPosition, yPosition, block, color);
}

// 한 칸 밑으로 이동
function moveOneClickDown() {
  yPosition = yPosition + 30;
  drawBlock(xPosition, yPosition, block, color);
}

// 바닥으로 이동
function moveDown() {
  yPosition = boardCanvasHeight - block.length * 30;

  drawBlock(xPosition, yPosition, block, color);
}

// 블록 리셋
function newBlock() {
  yPosition = 0;
  randomBlockIdx = Math.floor(Math.random() * (blocks.length - 1));
  block = blocks[randomBlockIdx];
  color = blockColors[randomBlockIdx];
}

// 쌓인 블록 그리기
function drawStackBlock() {
  stackedBlocks.forEach((stackBlock, idx) => {
    console.log(stackBlock);
    drawBlock(stackBlock.x, stackBlock.y, stackBlock.block, stackBlock.color);
  });
}
