const _board = [
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],
    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],
    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
];
function getvalue()
{
  for(var i=0;i<9;i++){
  for(var j=0;j<9;j++){
   	var s=i+""+j+"";
	var val=document.getElementById(s).value;
	if(val==""){
	_board[i][j]=".";
	}
	else{
	_board[i][j]=val;
	}
  }
 }
  sodokoSolver(_board);
  writevalue();
}
function reset()
{
	for(var i=0;i<9;i++){
  	for(var j=0;j<9;j++){
   	var s=i+""+j+"";
	console.log(s);
	document.getElementById(s).value=".";
  }
 }
}
function writevalue()
{
  for(var i=0;i<9;i++){
  for(var j=0;j<9;j++){
   	var s=i+""+j+"";
	console.log(s);
	document.getElementById(s).value=_board[i][j];
  }
 }

}
console.log(_board);


function isValid(board, row, col, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}


function sodokoSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '.') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = k;
          if (sodokoSolver(data)) {
           return true;
          } else {
           data[i][j] = '.';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}