// 첫 문장 후보 바꿔 보기 (아직 확정하지 않은 문구)
(function () {
  var line = document.getElementById('hook-line');
  var note = document.getElementById('hook-note');
  if (!line) return;
  document.querySelectorAll('.hook-pick button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.hook-pick button').forEach(function (x) { x.classList.toggle('on', x === b); });
      line.textContent = b.dataset.hook;
      note.textContent = b.dataset.note || '';
    });
  });
})();
