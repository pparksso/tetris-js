const boardCanvasWidth = 300;
const boardCanvasHeight = 600;
const boardCanvasX = 0;
const boardCanvasY = 0;
const boardCellSize = 30;

const blocks = [
  [
    [1, 1],
    [1, 1]
  ], // ㅁ
  [[1, 1, 1, 1]], // ㅡ
  [[1], [1], [1], [1]], // |
  [
    [1, 1, 0],
    [0, 1, 1]
  ], // ㄹ
  [
    [1, 0, 0],
    [1, 1, 1]
  ], //ㄴ
  [
    [1, 1, 1],
    [0, 0, 1]
  ], // ㄱ
  [
    [0, 1, 0],
    [1, 1, 1]
  ], // ㅗ
  [
    [0, 1, 1],
    [1, 1, 0]
  ] // ㄹ 반대
];

const startBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');

const blockColors = ['#0C7EFA', '#FDEA3B', '#4AAEFC', '#5BF242', '#FE0054', ' #AD63F9', '#F3720B'];
const blockCanvas = document.getElementById('blockCanvas');
const blockCtx = blockCanvas.getContext('2d');

blockCanvas.width = boardCanvasWidth;
blockCanvas.height = boardCanvasHeight;

const stackCanvas = document.getElementById('stackCanvas');
const stackCtx = stackCanvas.getContext('2d');

stackCanvas.width = boardCanvasWidth;
stackCanvas.height = boardCanvasHeight;
// 블럭 그리기!
function drawBlock(block, x, y, color) {
  block.forEach((row, rowIdx) => {
    row.forEach((cell, colIdx) => {
      if (cell === 1) {
        const xPos = x + colIdx * 30;
        const yPos = y + rowIdx * 30;
        blockCtx.fillStyle = color;
        blockCtx.fillRect(xPos, yPos, 30, 30);
      }
    });
  });
}

// 게임 시작!
startBtn.addEventListener('click', () => {
  startBtn.classList.remove('on');
  stopBtn.classList.add('on');
  // 이 이후의 함수 분리 작업 해야함
  drawBlock(
    blocks[Math.floor(Math.random() * blocks.length)],
    120,
    0,
    blockColors[Math.floor(Math.random() * blockColors.length)]
  );
});

// 블록이 밑에 닿고 난 다음 실행할 블록 함수 생성
// 이벤트에 따라 블록 캔버스가 다시 그려지게 생성
// 1초마다 블록캔버스 다시 그려야 함
// 스택캔버스 어떻게 그릴 지 생각 중...

// 게임 스톱!
stopBtn.addEventListener('click', () => {
  stopBtn.classList.remove('on');
  startBtn.classList.add('on');
  blockCtx.clearRect(0, 0, boardCanvasWidth, boardCanvasHeight);
  stackCtx.clearRect(0, 0, boardCanvasWidth, boardCanvasHeight);
});
