const boardCanvas = document.getElementById('boardCanvas');
const startBtn = document.querySelector('.playBtn');
const stopBtn = document.querySelector('.stopBtn');

const boardCtx = boardCanvas.getContext('2d');

const boardCanvasWidth = 300;
const boardCanvasHeight = 600;
const boardCanvasX = 0;
const boardCanvasY = 0;
const boardCellSize = 30;

// 보드
boardCanvas.width = boardCanvasWidth;
boardCanvas.height = boardCanvasHeight;

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
const blockColors = ['#0C7EFA', '#FDEA3B', '#4AAEFC', '#5BF242', '#FE0054', ' #AD63F9', '#F3720B'];
