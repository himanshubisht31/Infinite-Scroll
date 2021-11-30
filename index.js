var studentList = document.querySelector("#listContainer");

var nextItem = 1;
var loadMore = function () {
  for (var i = 0; i < 25; i++) {
    var item = document.createElement("li");
    item.innerText = "Masai Student " + nextItem++;
    studentList.appendChild(item);
  }
};

studentList.addEventListener("scroll", function () {
  if (studentList.scrollTop + studentList.clientHeight >= studentList.scrollHeight) {
    loadMore();
  }
});

loadMore();
