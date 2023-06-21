const boardCanvas = document.getElementById('boardCanvas');
const boardCtx = boardCanvas.getContext('2d');

const boardCanvasWidth = 300;
const boardCanvasHeight = 600;
const boardCanvasX = 0;
const boardCanvasY = 0;
const boardCellSize = 30;

// 보드
boardCanvas.width = boardCanvasWidth;
boardCanvas.height = boardCanvasHeight;

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

drawBoard();
