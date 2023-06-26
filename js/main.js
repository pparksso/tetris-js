let xPosition = 90;
let yPosition = 0;
let interval;
const stackedBlocks = [];

// 보드 그리기
function drawBoard() {
  boardCtx.clearRect(0, 0, boardCanvasWidth, boardCanvasHeight);
  boardCtx.fillStyle = 'rgb(240,240,240)';
  boardCtx.fillRect(0, 0, boardCanvasWidth, boardCanvasHeight);
  boardCtx.strokeStyle = 'rgb(200,200,200)';

  for (let row = 0; row < 20; row++) {
    for (let col = 0; col < 10; col++) {
      const x = boardCanvasX + col * boardCellSize;
      const y = boardCanvasY + row * boardCellSize;
      boardCtx.strokeRect(x, y, boardCellSize, boardCellSize);
    }
  }
}

let randomBlockIdx = Math.floor(Math.random() * (blocks.length - 1));
let block = blocks[randomBlockIdx];
let color = blockColors[randomBlockIdx];

startBtn.addEventListener('click', () => {
  startBtn.classList.remove('on');
  stopBtn.classList.add('on');
  drawBlock(xPosition, yPosition, block, color);
  interval = setInterval(() => {
    clearBlock();
    moveOneClickDown();
  }, 1500);
});

stopBtn.addEventListener('click', () => {
  stopBtn.classList.remove('on');
  startBtn.classList.add('on');
  xPosition = 90;
  yPosition = 0;
  drawBoard();
  clearInterval(interval);
});

window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowLeft') {
    if (xPosition <= 0) {
      return false;
    }
    clearBlock();
    drawStackBlock();
    moveLeft();
  } else if (e.code === 'ArrowRight') {
    if (xPosition + block[0].length * 30 >= boardCanvasWidth) {
      return false;
    }
    clearBlock();
    drawStackBlock();
    moveRight();
  } else if (e.code === 'ArrowUp') {
    const rotatedBlock = rotateBlock(block);
    if (xPosition + rotatedBlock[0].length * 30 >= boardCanvasWidth) {
      return false;
    }
    clearBlock();
    drawStackBlock();
    block = rotatedBlock;
    drawBlock(xPosition, yPosition, block, color);
  } else if (e.code === 'Space') {
    moveDown();
    stackedBlocks.push({ x: xPosition, y: yPosition, block: block, color: color });
    newBlock();
    clearBlock();
    clearInterval(interval);
    drawStackBlock();
    drawBlock(xPosition, yPosition, block, color);
    interval = setInterval(() => {
      clearBlock();
      drawStackBlock();
      moveOneClickDown();
    }, 1500);
  } else if (e.code === 'ArrowDown') {
    if (yPosition + block.length * 30 === boardCanvasHeight) {
      stackedBlocks.push({ x: xPosition, y: yPosition, block: block, color: color });
      newBlock();
      clearBlock();
      drawStackBlock();
      drawBlock(xPosition, yPosition, block, color);
      return false;
    }
    clearBlock();
    drawStackBlock();
    moveOneClickDown();
  }
});

drawBoard();
