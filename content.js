// 使用 MutationObserver 監聽 DOM 的變化
const targetNode = document.body;  // 我們選擇監聽整個頁面
const config = { childList: true, subtree: true };  // 監聽子元素的變化和後代節點的變化

// 定義監聽到變化後的回調函數
const callback = function(mutationsList, observer) {
  for (let mutation of mutationsList) {
    // 檢查是否有新的節點被加入到 DOM 中
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      console.log('檢測到新的元素加入到 DOM 中，開始檢查劇透內容');

      // 查找符合條件的元素
      const elements = document.querySelectorAll('.titleCard-synopsis.previewModal--small-text .ptrack-content');
      elements.forEach((element) => {
        console.log('隱藏內容:', element.textContent);
        element.textContent = "此內容已被隱藏以避免劇透!";
      });
    }
  }
};

// 創建一個 MutationObserver 來監控目標節點
const observer = new MutationObserver(callback);

// 開始監控目標節點及其子節點的變化
observer.observe(targetNode, config);

// 你可以根據需要選擇何時停止監控，例如當你達到一定條件時
// observer.disconnect();  // 當不需要再監控時，可以調用這個方法停止監控
